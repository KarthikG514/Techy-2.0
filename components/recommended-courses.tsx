import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Star, Users } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Advanced JavaScript Concepts",
    description: "Deep dive into closures, prototypes, and async patterns",
    duration: "4 hours",
    level: "Advanced",
    students: 1245,
    rating: 4.8,
    category: "Programming",
    videoUrl: "https://youtu.be/poo0BXryffI?si=hKc3R319ZUt0Mezg", // Add video URL
  },
  {
    id: 2,
    title: "React Hooks Masterclass",
    description: "Learn to build efficient React applications with hooks",
    duration: "3.5 hours",
    level: "Intermediate",
    students: 2130,
    rating: 4.9,
    category: "Web Development",
    videoUrl: "https://www.youtube.com/watch?v=example2", // Add video URL
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    description: "Essential algorithms and data structures for interviews",
    duration: "6 hours",
    level: "Intermediate",
    students: 3450,
    rating: 4.7,
    category: "Computer Science",
    videoUrl: "https://www.youtube.com/watch?v=example3", // Add video URL
  },
];

export default function RecommendedCourses() {
  return (
    <Card className="glow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recommended Courses</CardTitle>
            <CardDescription>Based on your learning history</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded bg-primary/10 sm:h-14 sm:w-14">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 space-y-2">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{course.title}</h3>
                    <Badge variant="outline" className="ml-2 hidden sm:inline-flex">
                      {course.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 text-yellow-500" />
                    <span>{course.rating}</span>
                  </div>
                  <Badge variant="secondary" className="ml-auto">
                    {course.level}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

