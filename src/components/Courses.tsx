
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, ArrowRight, Star } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Complete DevOps Bootcamp",
      description: "Master the entire DevOps lifecycle from development to deployment with hands-on projects",
      duration: "12 weeks",
      students: "450+",
      rating: 4.9,
      price: "₹29,999",
      originalPrice: "₹49,999",
      level: "Beginner to Advanced",
      features: [
        "Docker & Kubernetes",
        "CI/CD Pipelines",
        "AWS/Azure Cloud",
        "Infrastructure as Code",
        "Monitoring & Logging"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      popular: true
    },
    {
      id: 2,
      title: "DevSecOps Mastery",
      description: "Integrate security into DevOps practices with comprehensive security automation training",
      duration: "10 weeks",
      students: "280+",
      rating: 4.8,
      price: "₹34,999",
      originalPrice: "₹54,999",
      level: "Intermediate",
      features: [
        "Security Scanning",
        "Compliance Automation",
        "Threat Modeling",
        "Secure Code Review",
        "Incident Response"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
      popular: false
    },
    {
      id: 3,
      title: "Cloud Native Development",
      description: "Build scalable applications using cloud-native technologies and microservices architecture",
      duration: "8 weeks",
      students: "320+",
      rating: 4.7,
      price: "₹24,999",
      originalPrice: "₹39,999",
      level: "Intermediate",
      features: [
        "Microservices Design",
        "Serverless Computing",
        "API Gateway",
        "Service Mesh",
        "Cloud Databases"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      popular: false
    }
  ];

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Courses</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Choose Your Learning Path
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Comprehensive courses designed to take you from beginner to industry-ready professional
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-8">
          {courses.map((course) => (
            <Card key={course.id} className={`relative overflow-hidden hover:shadow-xl transition-shadow duration-300 ${course.popular ? 'ring-2 ring-blue-600' : ''}`}>
              {course.popular && (
                <Badge className="absolute top-4 left-4 z-10 bg-blue-600 text-white">
                  Most Popular
                </Badge>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <Badge className="absolute bottom-4 left-4 bg-white text-gray-900">
                  {course.level}
                </Badge>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({course.rating})</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <Award className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                  <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            View All Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
