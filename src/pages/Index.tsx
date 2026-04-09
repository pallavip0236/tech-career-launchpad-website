
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BookOpen, 
  Users, 
  Award, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  Play,
  TrendingUp,
  Clock,
  Globe,
  Target,
  Zap
} from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { TodoInput } from "@/components/TodoInput";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Hero />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Todo Input Demonstration</h2>
        <div className="max-w-md mx-auto">
          <TodoInput />
        </div>
      </div>
      <Stats />
      <Features />
      <Courses />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
