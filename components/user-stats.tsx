import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart3, Flame, Trophy, Brain } from "lucide-react"

export default function UserStats() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card className="glow-card">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Level <span className="emoji-pop">⭐</span>
              </p>
              <p className="text-2xl font-bold">12</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div className="mt-2 space-y-1">
            <div className="flex justify-between text-xs">
              <span>XP: 2,450</span>
              <span>Next: 3,000</span>
            </div>
            <Progress value={82} className="progress-bar h-2" />
          </div>
        </CardContent>
      </Card>

      <Card className="glow-card">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Streak <span className="emoji-pop">🔥</span>
              </p>
              <p className="text-2xl font-bold">7 days</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
              <Flame className="h-5 w-5 text-neon-pink" />
            </div>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Longest: 14 days</p>
        </CardContent>
      </Card>

      <Card className="glow-card">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Rank <span className="emoji-pop">🏅</span>
              </p>
              <p className="text-2xl font-bold">#42</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
              <Trophy className="h-5 w-5 text-neon-blue" />
            </div>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Top 10% this week</p>
        </CardContent>
      </Card>

      <Card className="glow-card">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Quizzes <span className="emoji-pop">🧠</span>
              </p>
              <p className="text-2xl font-bold">24</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
              <Brain className="h-5 w-5 text-neon-green" />
            </div>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Avg. Score: 85%</p>
        </CardContent>
      </Card>
    </div>
  )
}

