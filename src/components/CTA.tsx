
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden">
          <CardContent className="p-8 lg:p-12">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Ready to Transform Your Career?
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Join thousands of successful professionals who started their DevOps journey with us. 
                  Our next batch starts soon - limited seats available!
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium text-lg px-8 py-4">
                    Enroll Now - 50% Off
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-medium text-lg px-8 py-4">
                    Download Free Syllabus
                  </Button>
                </div>

                <div className="mt-8 flex items-center space-x-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm text-gray-600">12 seats left in next batch</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Starts March 15, 2024</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 lg:mt-0">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Free Career Consultation</h3>
                  <p className="text-gray-600 mb-6">
                    Not sure which course is right for you? Book a free 30-minute consultation with our career experts.
                  </p>
                  
                  <div className="space-y-3">
                    <Button className="w-full justify-start bg-white text-gray-700 hover:bg-gray-50 border border-gray-200">
                      <Phone className="mr-3 h-4 w-4 text-blue-600" />
                      Schedule Phone Call
                    </Button>
                    
                    <Button className="w-full justify-start bg-white text-gray-700 hover:bg-gray-50 border border-gray-200">
                      <MessageCircle className="mr-3 h-4 w-4 text-green-500" />
                      WhatsApp Consultation
                    </Button>
                    
                    <Button className="w-full justify-start bg-white text-gray-700 hover:bg-gray-50 border border-gray-200">
                      <Mail className="mr-3 h-4 w-4 text-purple-600" />
                      Email Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
