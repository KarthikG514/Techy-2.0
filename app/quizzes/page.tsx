import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
  Clock,
  Star,
  Trophy,
  BookOpen,
  BarChart3,
  Code,
  Calculator,
  FlaskRoundIcon as Flask,
  Lightbulb,
  Gamepad2,
} from "lucide-react"
import Link from "next/link"

const quizCategories = [
  {
    id: "all",
    label: "All Quizzes",
    icon: Brain,
  },
  {
    id: "programming",
    label: "Coding",
    icon: Code,
  },
  {
    id: "aptitude",
    label: "Aptitude",
    icon: Calculator,
  },
  {
    id: "science",
    label: "Science",
    icon: Flask,
  },
  {
    id: "tech",
    label: "Tech",
    icon: Lightbulb,
  },
  {
    id: "gaming",
    label: "Gaming",
    icon: Gamepad2,
  },
]

const quizzes = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description: "Test your knowledge of JavaScript basics",
    category: "programming",
    questions: 15,
    timeEstimate: "10 min",
    difficulty: "Beginner",
    completions: 1245,
    rating: 4.8,
    emoji: "💻",
    color: "neon-blue",
  },
  {
    id: 2,
    title: "React Hooks & Components",
    description: "Challenge yourself with React concepts",
    category: "programming",
    questions: 20,
    timeEstimate: "15 min",
    difficulty: "Intermediate",
    completions: 876,
    rating: 4.9,
    emoji: "⚛️",
    color: "neon-cyan",
  },
  {
    id: 3,
    title: "CSS Grid & Flexbox",
    description: "Master modern CSS layout techniques",
    category: "programming",
    questions: 12,
    timeEstimate: "8 min",
    difficulty: "Beginner",
    completions: 1532,
    rating: 4.7,
    emoji: "🎨",
    color: "neon-pink",
  },
  {
    id: 4,
    title: "Python Data Structures",
    description: "Test your knowledge of Python data structures",
    category: "programming",
    questions: 18,
    timeEstimate: "12 min",
    difficulty: "Intermediate",
    completions: 943,
    rating: 4.6,
    emoji: "🐍",
    color: "neon-green",
  },
  {
    id: 5,
    title: "Machine Learning Basics",
    description: "Introduction to machine learning concepts",
    category: "tech",
    questions: 25,
    timeEstimate: "20 min",
    difficulty: "Advanced",
    completions: 621,
    rating: 4.9,
    emoji: "🤖",
    color: "neon-purple",
  },
  {
    id: 6,
    title: "SQL Fundamentals",
    description: "Test your database query knowledge",
    category: "programming",
    questions: 15,
    timeEstimate: "10 min",
    difficulty: "Beginner",
    completions: 1087,
    rating: 4.5,
    emoji: "🗄️",
    color: "neon-orange",
  },
  {
    id: 7,
    title: "Logical Reasoning",
    description: "Sharpen your logical thinking skills",
    category: "aptitude",
    questions: 20,
    timeEstimate: "15 min",
    difficulty: "Intermediate",
    completions: 892,
    rating: 4.7,
    emoji: "🧩",
    color: "neon-yellow",
  },
  {
    id: 8,
    title: "Numerical Ability",
    description: "Test your mathematical aptitude",
    category: "aptitude",
    questions: 25,
    timeEstimate: "20 min",
    difficulty: "Intermediate",
    completions: 756,
    rating: 4.6,
    emoji: "🔢",
    color: "neon-green",
  },
  {
    id: 9,
    title: "Verbal Reasoning",
    description: "Enhance your verbal reasoning skills",
    category: "aptitude",
    questions: 18,
    timeEstimate: "15 min",
    difficulty: "Beginner",
    completions: 1023,
    rating: 4.5,
    emoji: "🔤",
    color: "neon-blue",
  },
  {
    id: 10,
    title: "Data Interpretation",
    description: "Analyze and interpret complex data",
    category: "aptitude",
    questions: 15,
    timeEstimate: "12 min",
    difficulty: "Advanced",
    completions: 543,
    rating: 4.8,
    emoji: "📊",
    color: "neon-purple",
  },
  {
    id: 11,
    title: "Physics Phenomena",
    description: "Explore fascinating physics concepts",
    category: "science",
    questions: 20,
    timeEstimate: "15 min",
    difficulty: "Intermediate",
    completions: 678,
    rating: 4.7,
    emoji: "⚛️",
    color: "neon-blue",
  },
  {
    id: 12,
    title: "Chemistry Basics",
    description: "Test your knowledge of chemical elements and reactions",
    category: "science",
    questions: 18,
    timeEstimate: "12 min",
    difficulty: "Beginner",
    completions: 789,
    rating: 4.5,
    emoji: "🧪",
    color: "neon-green",
  },
  {
    id: 13,
    title: "Biology Wonders",
    description: "Discover amazing facts about living organisms",
    category: "science",
    questions: 22,
    timeEstimate: "18 min",
    difficulty: "Intermediate",
    completions: 654,
    rating: 4.6,
    emoji: "🧬",
    color: "neon-pink",
  },
  {
    id: 14,
    title: "Space Exploration",
    description: "Journey through the cosmos with this quiz",
    category: "science",
    questions: 15,
    timeEstimate: "10 min",
    difficulty: "Beginner",
    completions: 987,
    rating: 4.9,
    emoji: "🚀",
    color: "neon-purple",
  },
  {
    id: 15,
    title: "AI and Future Tech",
    description: "Explore cutting-edge technology trends",
    category: "tech",
    questions: 20,
    timeEstimate: "15 min",
    difficulty: "Advanced",
    completions: 543,
    rating: 4.8,
    emoji: "🤖",
    color: "neon-cyan",
  },
  {
    id: 16,
    title: "Cybersecurity Essentials",
    description: "Test your knowledge of digital security",
    category: "tech",
    questions: 18,
    timeEstimate: "12 min",
    difficulty: "Intermediate",
    completions: 678,
    rating: 4.7,
    emoji: "🔒",
    color: "neon-green",
  },
  {
    id: 17,
    title: "Blockchain Fundamentals",
    description: "Understand the basics of blockchain technology",
    category: "tech",
    questions: 15,
    timeEstimate: "10 min",
    difficulty: "Intermediate",
    completions: 432,
    rating: 4.6,
    emoji: "⛓️",
    color: "neon-orange",
  },
  {
    id: 18,
    title: "Gaming History",
    description: "Test your knowledge of video game history",
    category: "gaming",
    questions: 20,
    timeEstimate: "15 min",
    difficulty: "Beginner",
    completions: 876,
    rating: 4.8,
    emoji: "🎮",
    color: "neon-purple",
  },
  {
    id: 19,
    title: "Game Development Basics",
    description: "Learn about game engines and development",
    category: "gaming",
    questions: 18,
    timeEstimate: "12 min",
    difficulty: "Intermediate",
    completions: 543,
    rating: 4.7,
    emoji: "🎲",
    color: "neon-blue",
  },
  {
    id: 20,
    title: "E-Sports Champions",
    description: "Test your knowledge of competitive gaming",
    category: "gaming",
    questions: 15,
    timeEstimate: "10 min",
    difficulty: "Intermediate",
    completions: 432,
    rating: 4.5,
    emoji: "🏆",
    color: "neon-yellow",
  },
]

export default function QuizzesPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight neon-text">
            Quizzes <span className="emoji-pop">🧠</span>
          </h1>
          <p className="text-muted-foreground">Test your knowledge and earn XP with interactive quizzes</p>
        </div>

        <div className="flex flex-col gap-6">
          <Card className="glow-card cyber-dots">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>
                    Weekly Challenge <span className="emoji-pop">🎯</span>
                  </CardTitle>
                  <CardDescription>Complete 3 quizzes to earn 500 bonus XP</CardDescription>
                </div>
                <Trophy className="h-8 w-8 text-neon-purple pulse" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex items-center gap-4 rounded-lg border p-4 transition-transform hover:scale-105">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">
                      Complete Quizzes <span className="emoji-pop">📝</span>
                    </p>
                    <p className="text-sm text-muted-foreground">1/3 completed</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border p-4 transition-transform hover:scale-105">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">
                      Earn XP <span className="emoji-pop">⚡</span>
                    </p>
                    <p className="text-sm text-muted-foreground">150/500 XP</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border p-4 transition-transform hover:scale-105">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">
                      Claim Reward <span className="emoji-pop">🎁</span>
                    </p>
                    <p className="text-sm text-muted-foreground">Unlock badge</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="all">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <TabsList className="h-auto flex-wrap">
                {quizCategories.map((category) => {
                  const Icon = category.icon
                  return (
                    <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-1">
                      <Icon className="h-4 w-4" />
                      {category.label}
                    </TabsTrigger>
                  )
                })}
              </TabsList>
              <Button variant="outline" size="sm">
                <BookOpen className="mr-2 h-4 w-4" />
                My Completed Quizzes
              </Button>
            </div>

            {quizCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {quizzes
                    .filter((quiz) => category.id === "all" || quiz.category === category.id)
                    .map((quiz) => (
                      <Card
                        key={quiz.id}
                        className={`glow-card overflow-hidden transition-all hover:shadow-[0_0_15px_rgba(var(--${quiz.color})/0.7)]`}
                      >
                        <div className="relative">
                          <div className="absolute right-3 top-3 z-10 text-2xl">{quiz.emoji}</div>
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle>{quiz.title}</CardTitle>
                              <CardDescription className="mt-1">{quiz.description}</CardDescription>
                            </div>
                            <Badge variant="outline" className={`text-${quiz.color}`}>
                              {quiz.difficulty}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                            <div className="flex items-center gap-1">
                              <Brain className="h-3.5 w-3.5 text-muted-foreground" />
                              <span>{quiz.questions} questions</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              <span>{quiz.timeEstimate}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-3.5 w-3.5 text-yellow-500" />
                              <span>{quiz.rating}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="bg-muted/50 pt-2">
                          <Link href={`/quizzes/${quiz.id}`} className="w-full">
                            <Button className="w-full">Start Quiz</Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}

