"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bot, Send, User, Sparkles, BookOpen, Lightbulb, History, Zap, Brain } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { generateGeminiResponse, type GeminiMessage } from "@/lib/gemini-api"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

// Mock suggested questions
const suggestedQuestions = [
  "Explain JavaScript closures",
  "What are React hooks?",
  "Help me understand CSS Grid",
  "Give me a coding challenge",
  "Explain Big O notation",
  "How does machine learning work?",
  "What's the difference between HTTP and HTTPS?",
  "Explain quantum computing",
]

// Mock learning resources
const learningResources = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    type: "Course",
    description: "Master the basics of JavaScript programming",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "React Component Patterns",
    type: "Article",
    description: "Learn advanced component design patterns",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "CSS Grid & Flexbox",
    type: "Tutorial",
    description: "Modern layout techniques explained",
    icon: BookOpen,
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    type: "Course",
    description: "Introduction to artificial intelligence",
    icon: Brain,
  },
]

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi there! I'm your AI learning assistant powered by Gemini. How can I help you today? 🚀",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [apiKey, setApiKey] = useState<string>("")
  const [isApiKeySet, setIsApiKeySet] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    try {
      if (isApiKeySet && apiKey) {
        // Convert messages to Gemini format
        const geminiMessages: GeminiMessage[] = messages.concat(userMessage).map((msg) => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }],
        }))

        // Call Gemini API
        const response = await generateGeminiResponse(geminiMessages, apiKey)

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: response,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, assistantMessage])
      } else {
        // Fallback to mock responses if API key is not set
        setTimeout(() => {
          const responseText =
            "I'm your AI learning assistant. To get the most accurate and helpful responses, please set your Gemini API key. In the meantime, I can still help with basic questions!"

          const assistantMessage: Message = {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: responseText,
            timestamp: new Date(),
          }

          setMessages((prev) => [...prev, assistantMessage])
        }, 1500)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate response. Please check your API key and try again.",
        variant: "destructive",
      })
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleSuggestedQuestion = (question: string) => {
    setInput(question)
    // Focus the input
    document.getElementById("message-input")?.focus()
  }

  const handleSetApiKey = () => {
    if (apiKey.trim()) {
      setIsApiKeySet(true)
      toast({
        title: "API Key Set",
        description: "Your Gemini API key has been set successfully!",
      })
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid API key",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight neon-text">
            AI Learning Assistant <span className="emoji-pop">🤖</span>
          </h1>
          <p className="text-muted-foreground">Get personalized help with your learning journey</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <Card className="glow-card cyber-dots flex h-[calc(100vh-12rem)] flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback className="bg-primary">
                      <Bot className="h-4 w-4 text-primary-foreground" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Learning Assistant</CardTitle>
                    <CardDescription>
                      Powered by Gemini AI <span className="emoji-pop">✨</span>
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="ml-auto flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5 text-yellow-500" />
                    Premium
                  </Badge>
                </div>
              </CardHeader>
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex max-w-[80%] items-start gap-3 rounded-lg p-3 ${
                          message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        {message.role === "assistant" && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" />
                            <AvatarFallback className="bg-primary">
                              <Bot className="h-4 w-4 text-primary-foreground" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <div className="text-sm">{message.content}</div>
                          <div className="mt-1 text-xs text-muted-foreground">
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </div>
                        </div>
                        {message.role === "user" && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" />
                            <AvatarFallback>
                              <User className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex max-w-[80%] items-start gap-3 rounded-lg bg-muted p-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback className="bg-primary">
                            <Bot className="h-4 w-4 text-primary-foreground" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex gap-1">
                          <span className="animate-bounce">●</span>
                          <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
                            ●
                          </span>
                          <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
                            ●
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
              <CardFooter className="border-t p-4">
                <div className="flex w-full items-center gap-2">
                  <Input
                    id="message-input"
                    placeholder="Ask anything about your learning..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1"
                  />
                  <Button size="icon" onClick={handleSendMessage} disabled={!input.trim() || isTyping}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-6">
            {!isApiKeySet && (
              <Card className="glow-card pulse">
                <CardHeader>
                  <CardTitle>
                    Connect to Gemini <span className="emoji-pop">🔌</span>
                  </CardTitle>
                  <CardDescription>Set your API key to enable Gemini AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input
                      type="password"
                      placeholder="Enter your Gemini API key"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                    />
                    <Button onClick={handleSetApiKey} className="w-full">
                      <Zap className="mr-2 h-4 w-4" />
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="glow-card">
              <CardHeader>
                <CardTitle>
                  Suggested Questions <span className="emoji-pop">💡</span>
                </CardTitle>
                <CardDescription>Get quick answers to common questions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {suggestedQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-left"
                      onClick={() => handleSuggestedQuestion(question)}
                    >
                      <Lightbulb className="mr-2 h-4 w-4 text-yellow-500" />
                      {question}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="resources">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              <TabsContent value="resources" className="mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">
                      Learning Resources <span className="emoji-pop">📚</span>
                    </CardTitle>
                    <CardDescription>Recommended for you</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {learningResources.map((resource) => {
                        const Icon = resource.icon
                        return (
                          <div
                            key={resource.id}
                            className="flex items-start gap-3 rounded-lg border p-3 transition-transform hover:scale-105"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                              <Icon className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-medium">{resource.title}</p>
                                <Badge variant="outline" className="text-xs badge-shine">
                                  {resource.type}
                                </Badge>
                              </div>
                              <p className="text-xs text-muted-foreground">{resource.description}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="history" className="mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">
                      Recent Conversations <span className="emoji-pop">💬</span>
                    </CardTitle>
                    <CardDescription>Your chat history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 rounded-lg border p-3 transition-transform hover:scale-105"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                            <History className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Conversation {i}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(Date.now() - i * 86400000).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

