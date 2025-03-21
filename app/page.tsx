import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, Trophy, Flame, Zap, Award, ArrowRight, CheckCircle2, Clock, Star } from "lucide-react"
import UserStats from "@/components/user-stats"
import RecommendedCourses from "@/components/recommended-courses"
import ActivityFeed from "@/components/activity-feed"

export default function Dashboard() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight neon-text">
            Welcome back, Learner! <span className="emoji-pop">🚀</span>
          </h1>
          <p className="text-muted-foreground">Continue your learning journey and level up your tech skills.</p>
        </div>

        <UserStats />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="glow-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium">
                  Daily Streak <span className="emoji-pop">🔥</span>
                </CardTitle>
                <Flame className="h-5 w-5 text-neon-pink" />
              </div>
              <CardDescription>Keep your learning momentum</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">7</span>
                  <span className="text-muted-foreground">days</span>
                </div>
                <Badge variant="outline" className="bg-secondary/50">
                  <Zap className="mr-1 h-3 w-3" />
                  On Fire!
                </Badge>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Current</span>
                  <span>Goal: 10 days</span>
                </div>
                <Progress value={70} className="progress-bar" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full">
                View Streak History
              </Button>
            </CardFooter>
          </Card>

          <Card className="glow-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium">
                  Current Course <span className="emoji-pop">📚</span>
                </CardTitle>
                <BookOpen className="h-5 w-5 text-neon-blue" />
              </div>
              <CardDescription>Resume where you left off</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-medium">Advanced JavaScript Concepts</h3>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>65%</span>
                </div>
                <Progress value={65} className="progress-bar" />
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Last accessed 2 hours ago</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Continue Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="glow-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium">
                  Achievements <span className="emoji-pop">🏆</span>
                </CardTitle>
                <Award className="h-5 w-5 text-neon-green" />
              </div>
              <CardDescription>Your learning milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">First Quiz Completed</p>
                    <p className="text-sm text-muted-foreground">Earned 50 XP</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">5-Day Streak</p>
                    <p className="text-sm text-muted-foreground">Earned 100 XP</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full">
                View All Achievements
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <RecommendedCourses />
          </div>
          <div>
            <ActivityFeed />
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">
                Weekly Challenge <span className="emoji-pop">🎯</span>
              </h2>
              <p className="text-muted-foreground">Complete 3 quizzes to earn bonus XP</p>
            </div>
            <Trophy className="h-8 w-8 text-neon-purple" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>1/3 completed</span>
            </div>
            <Progress value={33} className="progress-bar" />
          </div>
          <div className="mt-4">
            <Link href="/quizzes">
              <Button>
                Take a Quiz
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

