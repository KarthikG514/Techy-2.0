"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  Clock,
  Download,
  MessageSquare,
  Play,
  Star,
  ThumbsUp,
  Users,
} from "lucide-react"

// Mock course data
const courseData = {
  id: 1,
  title: "JavaScript Fundamentals",
  description:
    "Master the basics of JavaScript programming with practical examples and hands-on exercises. This course covers everything from variables and data types to functions, objects, and asynchronous programming.",
  category: "programming",
  level: "Beginner",
  students: 3245,
  rating: 4.8,
  reviews: 342,
  instructor: {
    name: "Alex Johnson",
    title: "Senior JavaScript Developer",
    bio: "Alex has been teaching programming for over 8 years and has worked with companies like Google and Microsoft.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  thumbnail: "/placeholder.svg?height=400&width=800",
  lastUpdated: "March 2025",
  tags: ["JavaScript", "Programming", "Web Development"],
  modules: [
    {
      id: "module-1",
      title: "Introduction to JavaScript",
      lessons: [
        {
          id: "lesson-1-1",
          title: "What is JavaScript?",
          duration: "10:25",
          completed: true,
          videoId: "poo0BXryffI?si=XTUgJrj0sgYss9lP", // This would be a real YouTube video ID
        },
        {
          id: "lesson-1-2",
          title: "Setting Up Your Development Environment",
          duration: "15:40",
          completed: true,
          videoId: "dQw4w9WgXcQ",
        },
        {
          id: "lesson-1-3",
          title: "Variables and Data Types",
          duration: "18:30",
          completed: false,
          videoId: "dQw4w9WgXcQ",
        },
      ],
    },
    {
      id: "module-2",
      title: "JavaScript Basics",
      lessons: [
        {
          id: "lesson-2-1",
          title: "Operators and Expressions",
          duration: "14:15",
          completed: false,
          videoId: "dQw4w9WgXcQ",
        },
        {
          id: "lesson-2-2",
          title: "Control Flow: Conditionals",
          duration: "16:20",
          completed: false,
          videoId: "dQw4w9WgXcQ",
        },
        {
          id: "lesson-2-3",
          title: "Control Flow: Loops",
          duration: "12:45",
          completed: false,
          videoId: "dQw4w9WgXcQ",
        },
      ],
    },
    {
      id: "module-3",
      title: "Functions and Objects",
      lessons: [
        {
          id: "lesson-3-1",
          title: "Functions: Declaration and Expression",
          duration: "20:10",
          completed: false,
          videoId: "dQw4w9WgXcQ",
        },
        {
          id: "lesson-3-2",
          title: "Function Parameters and Return Values",
          duration: "15:35",
          completed: false,
          videoId: "dQw4w9WgXcQ",
        },
        {
          id: "lesson-3-3",
          title: "Objects and Properties",
          duration: "22:15",
          completed: false,
          videoId: "dQw4w9WgXcQ",
        },
        {
          id: "lesson-3-4",
          title: "Object Methods and 'this' Keyword",
          duration: "25:40",
          completed: false,
          videoId: "dQw4w9WgXcQ",
        },
      ],
    },
  ],
}

export default function CoursePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [activeLesson, setActiveLesson] = useState(courseData.modules[0].lessons[0])
  const [expandedModule, setExpandedModule] = useState(courseData.modules[0].id)

  // Calculate course progress
  const totalLessons = courseData.modules.reduce((total, module) => total + module.lessons.length, 0)
  const completedLessons = courseData.modules.reduce(
    (total, module) => total + module.lessons.filter((lesson) => lesson.completed).length,
    0,
  )
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100)

  const handleLessonClick = (moduleId: string, lesson: any) => {
    setActiveLesson(lesson)
    setExpandedModule(moduleId)
  }

  return (
    <div className="container py-8">
      <Button variant="ghost" size="sm" className="mb-4" onClick={() => router.push("/courses")}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Courses
      </Button>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="glow-card overflow-hidden">
            <div className="aspect-video w-full bg-black">
              <div className="relative h-full w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${activeLesson.videoId}`}
                  title={activeLesson.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <CardHeader>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{courseData.level}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{courseData.rating}</span>
                    <span className="text-muted-foreground">({courseData.reviews} reviews)</span>
                  </div>
                </div>
                <CardTitle className="text-2xl">{courseData.title}</CardTitle>
                <CardDescription>{courseData.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="content">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="content">Course Content</TabsTrigger>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                </TabsList>
                <TabsContent value="content" className="mt-4 space-y-4">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <h3 className="font-medium">Your Progress</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>
                          {completedLessons} of {totalLessons} lessons completed
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold">{progressPercentage}%</span>
                    </div>
                  </div>
                  <Progress value={progressPercentage} className="progress-bar" />

                  <div className="rounded-lg border">
                    <Accordion type="single" collapsible value={expandedModule} onValueChange={setExpandedModule}>
                      {courseData.modules.map((module) => (
                        <AccordionItem key={module.id} value={module.id}>
                          <AccordionTrigger className="px-4">
                            <div className="flex items-center gap-2">
                              <BookOpen className="h-4 w-4" />
                              <span>{module.title}</span>
                              <Badge variant="outline" className="ml-2">
                                {module.lessons.length} lessons
                              </Badge>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4">
                            <div className="space-y-2">
                              {module.lessons.map((lesson) => (
                                <div
                                  key={lesson.id}
                                  className={`flex cursor-pointer items-center justify-between rounded-md p-2 transition-colors hover:bg-accent ${
                                    activeLesson.id === lesson.id ? "bg-accent" : ""
                                  }`}
                                  onClick={() => handleLessonClick(module.id, lesson)}
                                >
                                  <div className="flex items-center gap-3">
                                    {lesson.completed ? (
                                      <CheckCircle className="h-4 w-4 text-green-500" />
                                    ) : (
                                      <Play className="h-4 w-4 text-primary" />
                                    )}
                                    <span>{lesson.title}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </TabsContent>
                <TabsContent value="overview" className="mt-4 space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">About This Course</h3>
                    <div className="mt-2 space-y-4">
                      <p>
                        This comprehensive JavaScript course is designed for beginners who want to learn the
                        fundamentals of JavaScript programming. You'll start with the basics and progress to more
                        advanced concepts.
                      </p>
                      <p>By the end of this course, you'll be able to:</p>
                      <ul className="ml-6 list-disc space-y-1">
                        <li>Understand JavaScript syntax and basic programming concepts</li>
                        <li>Write functions and work with objects</li>
                        <li>Handle events and manipulate the DOM</li>
                        <li>Work with asynchronous JavaScript</li>
                        <li>Build simple interactive web applications</li>
                      </ul>
                      <p>Last updated: {courseData.lastUpdated}</p>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">Instructor</h3>
                    <div className="mt-4 flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={courseData.instructor.avatar} alt={courseData.instructor.name} />
                        <AvatarFallback>{courseData.instructor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{courseData.instructor.name}</h4>
                        <p className="text-sm text-muted-foreground">{courseData.instructor.title}</p>
                        <p className="mt-2 text-sm">{courseData.instructor.bio}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="resources" className="mt-4 space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">Course Resources</h3>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between rounded-md border p-3">
                        <div className="flex items-center gap-3">
                          <Download className="h-5 w-5 text-primary" />
                          <span>JavaScript Cheat Sheet.pdf</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                      <div className="flex items-center justify-between rounded-md border p-3">
                        <div className="flex items-center gap-3">
                          <Download className="h-5 w-5 text-primary" />
                          <span>Course Code Examples.zip</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                      <div className="flex items-center justify-between rounded-md border p-3">
                        <div className="flex items-center gap-3">
                          <Download className="h-5 w-5 text-primary" />
                          <span>Exercise Solutions.zip</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">Additional Resources</h3>
                    <div className="mt-2 space-y-2">
                      <p>Here are some additional resources to help you on your learning journey:</p>
                      <ul className="ml-6 list-disc space-y-1">
                        <li>MDN Web Docs - JavaScript Reference</li>
                        <li>JavaScript.info - The Modern JavaScript Tutorial</li>
                        <li>Eloquent JavaScript - Free Online Book</li>
                        <li>JavaScript30 - 30 Day Vanilla JS Coding Challenge</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="glow-card sticky top-20">
            <CardHeader>
              <CardTitle>Course Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Lessons</p>
                  <p className="font-medium">{totalLessons} lessons</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Duration</p>
                  <p className="font-medium">6 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Enrolled Students</p>
                  <p className="font-medium">{courseData.students.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                  <ThumbsUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
                  <p className="font-medium">{courseData.rating * 20}%</p>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Currently Watching</h3>
                <p className="mt-1 text-sm">{activeLesson.title}</p>
                <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{activeLesson.duration}</span>
                </div>
              </div>

              <Button className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Ask a Question
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

