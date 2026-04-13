
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  MessageCircle
} from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Clahan Technologies
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              Empowering the next generation of tech professionals with practical DevOps and DevSecOps training. 
              From students to industry experts - we bridge the gap between learning and career success.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@clahantechnologies.com</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">WhatsApp: +91 9876543210</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 mt-8 md:mt-0">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-blue-400 transition-colors">Courses</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Career Support</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 mt-8 md:mt-0">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap items-center justify-center sm:justify-start space-x-4 sm:space-x-6 mb-4 md:mb-0">
            <span className="text-gray-300 mb-2 sm:mb-0">Follow us:</span>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 p-1 sm:p-2">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 p-1 sm:p-2">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 p-1 sm:p-2">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 p-1 sm:p-2">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 p-1 sm:p-2">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2024 Clahan Technologies. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Made with ❤️ in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
