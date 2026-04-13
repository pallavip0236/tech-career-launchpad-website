
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "DevOps Engineer at TCS",
      company: "TCS",
      content: "The hands-on approach at Clahan Technologies completely transformed my career. I went from being a fresher to landing a DevOps role at TCS within 6 months of completing the course.",
      avatar: "PS",
      rating: 5,
      previousRole: "Recent Graduate",
      salaryIncrease: "₹8 LPA"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      role: "Cloud Engineer at Infosys",
      company: "Infosys",
      content: "I was working in manual testing and wanted to switch to DevOps. The mentors here not only taught me the technical skills but also helped me build confidence for interviews.",
      avatar: "RK",
      rating: 5,
      previousRole: "Manual Tester",
      salaryIncrease: "60% hike"
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "Site Reliability Engineer at Wipro",
      company: "Wipro",
      content: "The real-world projects and industry mentorship made all the difference. I\'m now working as an SRE and loving every day of my work. Best decision I ever made!",
      avatar: "AP",
      rating: 5,
      previousRole: "Support Engineer",
      salaryIncrease: "₹12 LPA"
    },
    {
      id: 4,
      name: "Vikash Singh",
      role: "DevSecOps Specialist at HCL",
      company: "HCL",
      content: "Coming from a non-tech background, I was worried about making the transition. The supportive environment and step-by-step approach made it possible for me to succeed.",
      avatar: "VS",
      rating: 5,
      previousRole: "Sales Executive",
      salaryIncrease: "Career Switch"
    },
    {
      id: 5,
      name: "Sneha Reddy",
      role: "Platform Engineer at Accenture",
      company: "Accenture",
      content: "The placement assistance is phenomenal. They didn\'t just train me; they helped me prepare for interviews, review my resume, and even connected me with their hiring partners.",
      avatar: "SR",
      rating: 5,
      previousRole: "Final Year Student",
      salaryIncrease: "₹9 LPA"
    },
    {
      id: 6,
      name: "Amit Gupta",
      role: "Infrastructure Engineer at Cognizant",
      company: "Cognizant",
      content: "The small batch size meant I got personal attention from instructors. Every doubt was cleared, every concept was explained until I understood it completely.",
      avatar: "AG",
      rating: 5,
      previousRole: "Network Admin",
      salaryIncrease: "45% hike"
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Success Stories</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Real People, Real Success
          </p>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-600 mx-auto">
            See how our students transformed their careers and achieved their dreams
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-6">
                  \"{testimonial.content}\"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm space-y-2 sm:space-y-0">
                    <Badge variant="outline" className="text-xs">
                      From: {testimonial.previousRole}
                    </Badge>
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      {testimonial.salaryIncrease}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
