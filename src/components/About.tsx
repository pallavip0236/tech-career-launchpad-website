
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
              Our Story
            </Badge>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              From Struggle to Success: 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Our Mission</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              Founded by professionals who understand the challenges of breaking into tech, Clahan Technologies was born from a simple belief: 
              <strong className="text-gray-900"> everyone deserves a chance to build a meaningful career in technology.</strong>
            </p>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Our founder\'s journey from a non-tech background to leading DevOps teams at Fortune 500 companies inspired the creation of practical, 
              job-focused training programs that actually work.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                <p className="mt-2 text-sm text-gray-600">Bridge the gap between academic learning and industry requirements</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Our Values</h3>
                <p className="mt-2 text-sm text-gray-600">Practical learning, individual attention, and genuine career support</p>
              </div>
            </div>

            <div className="mt-8">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Meet Our Team
              </Button>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <Card className="overflow-hidden shadow-xl">
              <div className="relative">
                <img
                  className="w-full h-56 sm:h-64 md:h-72 object-cover"
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                  alt="Team at work"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Students Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Industry Experience</p>
                      <p className="text-sm text-gray-600">Instructors with 10+ years in top tech companies</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Personal Mentorship</p>
                      <p className="text-sm text-gray-600">One-on-one guidance throughout your learning journey</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Target className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Job-Focused Training</p>
                      <p className="text-sm text-gray-600">Curriculum designed based on actual job requirements</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
