import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, BookOpen, Award, CheckCircle2 } from "lucide-react"

const activities = [
  {
    id: 1,
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AJ",
    },
    action: "completed a course",
    subject: "React Fundamentals",
    time: "2 hours ago",
    icon: BookOpen,
    iconColor: "text-neon-blue",
  },
  {
    id: 2,
    user: {
      name: "Sarah Miller",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SM",
    },
    action: "earned a badge",
    subject: "Quiz Master",
    time: "4 hours ago",
    icon: Award,
    iconColor: "text-neon-green",
  },
  {
    id: 3,
    user: {
      name: "David Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DC",
    },
    action: "reached #1",
    subject: "on the leaderboard",
    time: "Yesterday",
    icon: Trophy,
    iconColor: "text-neon-pink",
  },
  {
    id: 4,
    user: {
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "EW",
    },
    action: "completed a quiz",
    subject: "JavaScript Basics",
    time: "Yesterday",
    icon: CheckCircle2,
    iconColor: "text-neon-purple",
  },
]

export default function ActivityFeed() {
  return (
    <Card className="glow-card">
      <CardHeader>
        <CardTitle>Activity Feed</CardTitle>
        <CardDescription>See what others are learning</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon

            return (
              <div key={activity.id} className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                  <AvatarFallback>{activity.user.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{activity.user.name}</span>
                    <span className="text-sm text-muted-foreground">{activity.action}</span>
                    <span className="font-medium">{activity.subject}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                    <Icon className={`h-3.5 w-3.5 ${activity.iconColor}`} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

