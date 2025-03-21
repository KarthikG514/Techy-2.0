import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { BookOpen, Clock, Search, Star, Users, Youtube } from "lucide-react"
import Link from "next/link"

const courseCategories = [
  {
    id: "all",
    label: "All Courses",
  },
  {
    id: "programming",
    label: "Programming",
  },
  {
    id: "web-dev",
    label: "Web Development",
  },
  {
    id: "data-science",
    label: "Data Science",
  },
]

const courses = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description: "Master the basics of JavaScript programming with practical examples",
    category: "programming",
    lessons: 24,
    duration: "6 hours",
    level: "Beginner",
    students: 3245,
    rating: 4.8,
    instructor: "Alex Johnson",
    thumbnail: "/placeholder.svg?height=180&width=320",
    tags: ["JavaScript", "Programming", "Web Development"],
    featured: true,
  },
  {
    id: 2,
    title: "React Hooks & Components",
    description: "Learn modern React development with hooks and component patterns",
    category: "web-dev",
    lessons: 32,
    duration: "8 hours",
    level: "Intermediate",
    students: 2176,
    rating: 4.9,
    instructor: "Sarah Miller",
    thumbnail: "/placeholder.svg?height=180&width=320",
    tags: ["React", "JavaScript", "Web Development"],
    featured: true,
  },
  {
    id: 3,
    title: "CSS Grid & Flexbox Mastery",
    description: "Master modern CSS layout techniques for responsive web design",
    category: "web-dev",
    lessons: 18,
    duration: "4.5 hours",
    level: "Beginner",
    students: 1532,
    rating: 4.7,
    instructor: "Emma Wilson",
    thumbnail: "/placeholder.svg?height=180&width=320",
    tags: ["CSS", "Web Design", "Responsive"],
  },
  {
    id: 4,
    title: "Python Data Structures",
    description: "Learn essential Python data structures and algorithms",
    category: "programming",
    lessons: 28,
    duration: "7 hours",
    level: "Intermediate",
    students: 2943,
    rating: 4.6,
    instructor: "David Chen",
    thumbnail: "/placeholder.svg?height=180&width=320",
    tags: ["Python", "Data Structures", "Algorithms"],
  },
  {
    id: 5,
    title: "Machine Learning Fundamentals",
    description: "Introduction to machine learning concepts and techniques",
    category: "data-science",
    lessons: 36,
    duration: "10 hours",
    level: "Advanced",
    students: 1621,
    rating: 4.9,
    instructor: "Michael Zhang",
    thumbnail: "/placeholder.svg?height=180&width=320",
    tags: ["Machine Learning", "Python", "Data Science"],
    featured: true,
  },
  {
    id: 6,
    title: "SQL for Data Analysis",
    description: "Master SQL for data analysis and database management",
    category: "data-science",
    lessons: 22,
    duration: "5.5 hours",
    level: "Beginner",
    students: 2087,
    rating: 4.5,
    instructor: "Lisa Rodriguez",
    thumbnail: "/placeholder.svg?height=180&width=320",
    tags: ["SQL", "Databases", "Data Analysis"],
  },
]

export default function CoursesPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight neon-text">Courses</h1>
          <p className="text-muted-foreground">Expand your knowledge with our video courses</p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 rounded-lg border bg-card p-6 sm:flex-row sm:items-center">
            <div className="flex-1 space-y-1">
              <h2 className="text-xl font-semibold">Featured Courses</h2>
              <p className="text-muted-foreground">Top-rated courses recommended for you</p>
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search courses..." className="w-full pl-8" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses
              .filter((course) => course.featured)
              .map((course) => (
                <Card key={course.id} className="glow-card overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={course.thumbnail || "/placeholder.svg"}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription className="mt-1">{course.description}</CardDescription>
                      </div>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>{course.lessons} lessons</span>
                      </div>
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
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {course.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/50 pt-2">
                    <Link href={`/courses/${course.id}`} className="w-full">
                      <Button className="w-full">
                        <Youtube className="mr-2 h-4 w-4" />
                        Start Learning
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
          </div>

          <Tabs defaultValue="all">
            <div className="flex items-center justify-between">
              <TabsList>
                {courseCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {courseCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {courses
                    .filter((course) => category.id === "all" || course.category === category.id)
                    .map((course) => (
                      <Card key={course.id} className="glow-card overflow-hidden">
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src={course.thumbnail || "/placeholder.svg"}
                            alt={course.title}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle>{course.title}</CardTitle>
                              <CardDescription className="mt-1">{course.description}</CardDescription>
                            </div>
                            <Badge variant="outline">{course.level}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                            <div className="flex items-center gap-1">
                              <BookOpen className="h-3.5 w-3.5 text-muted-foreground" />
                              <span>{course.lessons} lessons</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                              <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-3.5 w-3.5 text-yellow-500" />
                              <span>{course.rating}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="bg-muted/50 pt-2">
                          <Link href={`/courses/${course.id}`} className="w-full">
                            <Button className="w-full">
                              <Youtube className="mr-2 h-4 w-4" />
                              Start Learning
                            </Button>
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

