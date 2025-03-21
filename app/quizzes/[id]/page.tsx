"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { AlertCircle, ArrowLeft, CheckCircle, Clock, HelpCircle, XCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from "@/components/ui/use-toast"

// Mock quiz data - in a real app, this would come from an API
const quizData = {
  id: 1,
  title: "JavaScript Fundamentals",
  description: "Test your knowledge of JavaScript basics",
  timeEstimate: "10 min",
  questions: [
    {
      id: 1,
      question: "Which of the following is NOT a JavaScript data type?",
      options: [
        { id: "a", text: "String" },
        { id: "b", text: "Boolean" },
        { id: "c", text: "Float" },
        { id: "d", text: "Symbol" },
      ],
      correctAnswer: "c",
      explanation:
        "JavaScript has the following primitive data types: String, Number, Boolean, Undefined, Null, Symbol, and BigInt. There is no specific Float type in JavaScript; floating-point numbers are part of the Number type.",
    },
    {
      id: 2,
      question: "What will the following code return? \n\n```javascript\nconsole.log(typeof [])\n```",
      options: [
        { id: "a", text: "array" },
        { id: "b", text: "object" },
        { id: "c", text: "undefined" },
        { id: "d", text: "null" },
      ],
      correctAnswer: "b",
      explanation:
        "In JavaScript, arrays are actually objects, so typeof [] returns 'object'. This is one of the quirks of JavaScript's type system.",
    },
    {
      id: 3,
      question: "Which method is used to add one or more elements to the end of an array?",
      options: [
        { id: "a", text: "push()" },
        { id: "b", text: "append()" },
        { id: "c", text: "add()" },
        { id: "d", text: "insert()" },
      ],
      correctAnswer: "a",
      explanation:
        "The push() method adds one or more elements to the end of an array and returns the new length of the array.",
    },
    {
      id: 4,
      question: "What is the correct way to create a function in JavaScript?",
      options: [
        { id: "a", text: "function = myFunction() {}" },
        { id: "b", text: "function:myFunction() {}" },
        { id: "c", text: "function myFunction() {}" },
        { id: "d", text: "create myFunction() {}" },
      ],
      correctAnswer: "c",
      explanation: "The correct syntax for creating a function in JavaScript is: function functionName() {}",
    },
    {
      id: 5,
      question: "What does the '===' operator do in JavaScript?",
      options: [
        { id: "a", text: "Assigns a value to a variable" },
        { id: "b", text: "Compares values and types" },
        { id: "c", text: "Compares values only" },
        { id: "d", text: "Checks if a variable exists" },
      ],
      correctAnswer: "b",
      explanation:
        "The strict equality operator (===) checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator (==), it doesn't perform type conversion, so it only returns true when the operands are of the same type and have the same value.",
    },
  ],
}

export default function QuizPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [showExplanation, setShowExplanation] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(600) // 10 minutes in seconds

  const question = quizData.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100
  const isLastQuestion = currentQuestion === quizData.questions.length - 1
  const hasSelectedAnswer = selectedAnswers[question.id] !== undefined
  const isCorrect = hasSelectedAnswer && selectedAnswers[question.id] === question.correctAnswer

  const handleSelectAnswer = (value: string) => {
    if (showExplanation) return // Prevent changing answer after seeing explanation

    setSelectedAnswers((prev) => ({
      ...prev,
      [question.id]: value,
    }))
  }

  const handleCheckAnswer = () => {
    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    setShowExplanation(false)

    if (isLastQuestion) {
      // Calculate score
      const correctAnswers = Object.entries(selectedAnswers).filter(([questionId, answer]) => {
        const question = quizData.questions.find((q) => q.id.toString() === questionId)
        return question && answer === question.correctAnswer
      }).length

      const score = Math.round((correctAnswers / quizData.questions.length) * 100)

      // Show completion screen
      setQuizCompleted(true)

      // Show toast with score
      toast({
        title: "Quiz Completed!",
        description: `You scored ${score}% (${correctAnswers}/${quizData.questions.length})`,
      })
    } else {
      setCurrentQuestion((prev) => prev + 1)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowExplanation(false)
    setQuizCompleted(false)
  }

  if (quizCompleted) {
    // Calculate results
    const correctAnswers = Object.entries(selectedAnswers).filter(([questionId, answer]) => {
      const question = quizData.questions.find((q) => q.id.toString() === questionId)
      return question && answer === question.correctAnswer
    }).length

    const score = Math.round((correctAnswers / quizData.questions.length) * 100)
    const xpEarned = score >= 80 ? 100 : score >= 60 ? 75 : score >= 40 ? 50 : 25

    return (
      <div className="container py-8">
        <div className="mx-auto max-w-3xl">
          <Button variant="ghost" size="sm" className="mb-4" onClick={() => router.push("/quizzes")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Quizzes
          </Button>

          <Card className="glow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
              <CardDescription>Here's how you did on {quizData.title}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/20">
                  {score >= 80 ? (
                    <CheckCircle className="h-12 w-12 text-green-500" />
                  ) : score >= 60 ? (
                    <HelpCircle className="h-12 w-12 text-yellow-500" />
                  ) : (
                    <XCircle className="h-12 w-12 text-red-500" />
                  )}
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold">{score}%</h3>
                  <p className="text-muted-foreground">
                    {correctAnswers} out of {quizData.questions.length} correct
                  </p>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">XP Earned</p>
                    <p className="text-sm text-muted-foreground">Based on your score</p>
                  </div>
                  <Badge className="text-lg">+{xpEarned} XP</Badge>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Performance Breakdown</h3>
                <div className="space-y-4">
                  {quizData.questions.map((q, index) => {
                    const userAnswer = selectedAnswers[q.id]
                    const isCorrect = userAnswer === q.correctAnswer

                    return (
                      <div key={q.id} className="flex items-center gap-2">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full">
                          {isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                        <span className="text-sm">Question {index + 1}</span>
                        {!isCorrect && (
                          <span className="ml-auto text-xs text-muted-foreground">
                            Correct: Option {q.correctAnswer.toUpperCase()}
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button variant="outline" className="w-full" onClick={handleRestartQuiz}>
                Retry Quiz
              </Button>
              <Button className="w-full" onClick={() => router.push("/quizzes")}>
                More Quizzes
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="mx-auto max-w-3xl">
        <Button variant="ghost" size="sm" className="mb-4" onClick={() => router.push("/quizzes")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Quizzes
        </Button>

        <Card className="glow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{quizData.title}</CardTitle>
                <CardDescription>{quizData.description}</CardDescription>
              </div>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {quizData.timeEstimate}
              </Badge>
            </div>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between text-sm">
                <span>
                  Question {currentQuestion + 1} of {quizData.questions.length}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="progress-bar" />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">{question.question}</h3>
            </div>

            <RadioGroup value={selectedAnswers[question.id]} onValueChange={handleSelectAnswer} className="space-y-3">
              {question.options.map((option) => (
                <div
                  key={option.id}
                  className={`flex items-center space-x-2 rounded-md border p-3 transition-colors ${
                    showExplanation && option.id === question.correctAnswer
                      ? "border-green-500 bg-green-500/10"
                      : showExplanation &&
                          selectedAnswers[question.id] === option.id &&
                          option.id !== question.correctAnswer
                        ? "border-red-500 bg-red-500/10"
                        : ""
                  }`}
                >
                  <RadioGroupItem value={option.id} id={`option-${option.id}`} disabled={showExplanation} />
                  <Label htmlFor={`option-${option.id}`} className="flex-1 cursor-pointer">
                    {option.text}
                  </Label>
                  {showExplanation && option.id === question.correctAnswer && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                  {showExplanation &&
                    selectedAnswers[question.id] === option.id &&
                    option.id !== question.correctAnswer && <XCircle className="h-5 w-5 text-red-500" />}
                </div>
              ))}
            </RadioGroup>

            {showExplanation && (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Explanation</AlertTitle>
                <AlertDescription>{question.explanation}</AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter className="flex gap-4">
            {!showExplanation ? (
              <Button className="w-full" onClick={handleCheckAnswer} disabled={!hasSelectedAnswer}>
                Check Answer
              </Button>
            ) : (
              <Button className="w-full" onClick={handleNextQuestion}>
                {isLastQuestion ? "Finish Quiz" : "Next Question"}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

