import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Trophy, Medal, Award, Crown, Flame, Star, ArrowUp, ArrowDown, Minus } from "lucide-react"

// Mock leaderboard data
const leaderboardData = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "AJ",
    points: 12450,
    level: 24,
    streak: 15,
    rank: 1,
    rankChange: "up", // up, down, same
    badges: ["Quiz Master", "Streak King", "Top Contributor"],
  },
  {
    id: 2,
    name: "Sarah Miller",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SM",
    points: 10820,
    level: 21,
    streak: 12,
    rank: 2,
    rankChange: "same",
    badges: ["Course Completer", "Fast Learner"],
  },
  {
    id: 3,
    name: "David Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "DC",
    points: 9750,
    level: 19,
    streak: 8,
    rank: 3,
    rankChange: "up",
    badges: ["JavaScript Pro", "Quiz Master"],
  },
  {
    id: 4,
    name: "Emma Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "EW",
    points: 8900,
    level: 18,
    streak: 10,
    rank: 4,
    rankChange: "down",
    badges: ["CSS Wizard", "Streak King"],
  },
  {
    id: 5,
    name: "Michael Zhang",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "MZ",
    points: 8450,
    level: 17,
    streak: 7,
    rank: 5,
    rankChange: "up",
    badges: ["Python Master", "Data Scientist"],
  },
  {
    id: 6,
    name: "Lisa Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "LR",
    points: 7980,
    level: 16,
    streak: 9,
    rank: 6,
    rankChange: "down",
    badges: ["SQL Expert", "Fast Learner"],
  },
  {
    id: 7,
    name: "James Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JW",
    points: 7650,
    level: 15,
    streak: 5,
    rank: 7,
    rankChange: "same",
    badges: ["React Developer", "Course Completer"],
  },
  {
    id: 8,
    name: "Olivia Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "OB",
    points: 7320,
    level: 14,
    streak: 6,
    rank: 8,
    rankChange: "up",
    badges: ["UX Designer", "Creative Thinker"],
  },
  {
    id: 9,
    name: "Daniel Lee",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "DL",
    points: 6980,
    level: 14,
    streak: 4,
    rank: 9,
    rankChange: "down",
    badges: ["Mobile Developer", "Quiz Master"],
  },
  {
    id: 10,
    name: "Sophia Garcia",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SG",
    points: 6540,
    level: 13,
    streak: 3,
    rank: 10,
    rankChange: "same",
    badges: ["DevOps Engineer", "Fast Learner"],
  },
]

// Mock user data (current user)
const currentUser = {
  id: 42,
  name: "You",
  avatar: "/placeholder.svg?height=40&width=40",
  initials: "YO",
  points: 4250,
  level: 12,
  streak: 7,
  rank: 42,
  rankChange: "up",
  badges: ["JavaScript Beginner", "Quiz Taker"],
  nextRankPoints: 4500,
  nextRankUser: "Chris Thompson",
}

// Mock badges data
const badgesData = [
  {
    id: "quiz-master",
    name: "Quiz Master",
    description: "Complete 50 quizzes with a score of 80% or higher",
    icon: Trophy,
    rarity: "Legendary",
    progress: 65,
    unlocked: true,
  },
  {
    id: "streak-king",
    name: "Streak King",
    description: "Maintain a 30-day learning streak",
    icon: Flame,
    rarity: "Epic",
    progress: 50,
    unlocked: true,
  },
  {
    id: "course-completer",
    name: "Course Completer",
    description: "Complete 10 courses from start to finish",
    icon: Medal,
    rarity: "Rare",
    progress: 40,
    unlocked: false,
  },
  {
    id: "fast-learner",
    name: "Fast Learner",
    description: "Complete a course in less than 3 days",
    icon: Award,
    rarity: "Uncommon",
    progress: 100,
    unlocked: true,
  },
  {
    id: "top-contributor",
    name: "Top Contributor",
    description: "Help 20 other students by answering their questions",
    icon: Crown,
    rarity: "Epic",
    progress: 25,
    unlocked: false,
  },
  {
    id: "javascript-pro",
    name: "JavaScript Pro",
    description: "Score 100% on the JavaScript advanced quiz",
    icon: Star,
    rarity: "Rare",
    progress: 0,
    unlocked: false,
  },
]

export default function LeaderboardPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight neon-text">Leaderboard</h1>
          <p className="text-muted-foreground">See how you rank against other learners</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="glow-card md:col-span-2">
            <CardHeader>
              <CardTitle>Global Rankings</CardTitle>
              <CardDescription>Based on XP points earned</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="weekly">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="alltime">All Time</TabsTrigger>
                </TabsList>
                <TabsContent value="weekly" className="mt-4">
                  <div className="space-y-4">
                    <div className="rounded-lg bg-primary/10 p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-xl font-bold">
                          {currentUser.rank}
                        </div>
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                          <AvatarFallback>{currentUser.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{currentUser.name}</span>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Flame className="h-3 w-3 text-neon-pink" />
                              {currentUser.streak} day streak
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm">Level {currentUser.level}</span>
                            <span className="text-sm text-muted-foreground">•</span>
                            <span className="text-sm">{currentUser.points.toLocaleString()} XP</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-green-500/20 px-2 py-1 text-sm text-green-500">
                          <ArrowUp className="h-3.5 w-3.5" />
                          <span>3</span>
                        </div>
                      </div>
                      <div className="mt-4 space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>{currentUser.points.toLocaleString()} XP</span>
                          <span>
                            Next Rank: {currentUser.nextRankPoints.toLocaleString()} XP ({currentUser.nextRankUser})
                          </span>
                        </div>
                        <Progress
                          value={((currentUser.points - 4000) / (currentUser.nextRankPoints - 4000)) * 100}
                          className="progress-bar"
                        />
                      </div>
                    </div>

                    <div className="rounded-lg border">
                      <div className="grid grid-cols-12 gap-4 border-b p-4 font-medium">
                        <div className="col-span-1">Rank</div>
                        <div className="col-span-7">User</div>
                        <div className="col-span-2 text-right">Level</div>
                        <div className="col-span-2 text-right">XP</div>
                      </div>
                      {leaderboardData.map((user) => (
                        <div key={user.id} className="grid grid-cols-12 gap-4 border-b p-4 last:border-0">
                          <div className="col-span-1 flex items-center">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                                user.rank <= 3 ? "bg-yellow-500/20 text-yellow-500" : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {user.rank}
                            </div>
                          </div>
                          <div className="col-span-7 flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{user.name}</span>
                                {user.badges.length > 0 && (
                                  <Badge variant="outline" className="hidden sm:inline-flex">
                                    {user.badges[0]}
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Flame className="h-3 w-3 text-neon-pink" />
                                <span>{user.streak} day streak</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-2 flex items-center justify-end">
                            <Badge variant="secondary">{user.level}</Badge>
                          </div>
                          <div className="col-span-2 flex items-center justify-end gap-2">
                            <span>{user.points.toLocaleString()}</span>
                            {user.rankChange === "up" && (
                              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                                <ArrowUp className="h-3 w-3" />
                              </div>
                            )}
                            {user.rankChange === "down" && (
                              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500/20 text-red-500">
                                <ArrowDown className="h-3 w-3" />
                              </div>
                            )}
                            {user.rankChange === "same" && (
                              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-muted-foreground">
                                <Minus className="h-3 w-3" />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="monthly" className="mt-4">
                  <div className="flex h-40 items-center justify-center rounded-lg border">
                    <p className="text-muted-foreground">Monthly leaderboard data would appear here</p>
                  </div>
                </TabsContent>
                <TabsContent value="alltime" className="mt-4">
                  <div className="flex h-40 items-center justify-center rounded-lg border">
                    <p className="text-muted-foreground">All-time leaderboard data would appear here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="glow-card">
              <CardHeader>
                <CardTitle>Your Badges</CardTitle>
                <CardDescription>Achievements you've earned</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {badgesData
                    .filter((badge) => badge.unlocked)
                    .slice(0, 3)
                    .map((badge) => {
                      const Icon = badge.icon
                      return (
                        <div key={badge.id} className="flex items-start gap-3 rounded-lg border p-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{badge.name}</p>
                              <Badge variant="outline" className="text-xs">
                                {badge.rarity}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">{badge.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  <Button variant="outline" size="sm" className="w-full">
                    View All Badges
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card">
              <CardHeader>
                <CardTitle>Badges in Progress</CardTitle>
                <CardDescription>Keep learning to unlock these</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {badgesData
                    .filter((badge) => !badge.unlocked && badge.progress > 0)
                    .slice(0, 3)
                    .map((badge) => {
                      const Icon = badge.icon
                      return (
                        <div key={badge.id} className="space-y-2 rounded-lg border p-3">
                          <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                              <Icon className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-medium">{badge.name}</p>
                                <Badge variant="outline" className="text-xs">
                                  {badge.rarity}
                                </Badge>
                              </div>
                              <p className="text-xs text-muted-foreground">{badge.description}</p>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span>Progress</span>
                              <span>{badge.progress}%</span>
                            </div>
                            <Progress value={badge.progress} className="progress-bar h-2" />
                          </div>
                        </div>
                      )
                    })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

