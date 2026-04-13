
import { CheckCircle, Clock, Target, Zap, Award, Users, BookOpen, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      name: "Hands-on Learning",
      description: "Real-world projects and labs that mirror industry scenarios",
      icon: Target,
    },
    {
      name: "Industry Mentors",
      description: "Learn from experienced professionals currently working in top tech companies",
      icon: Users,
    },
    {
      name: "Flexible Schedule",
      description: "Weekend and evening batches designed for working professionals and students",
      icon: Clock,
    },
    {
      name: "Job Assistance",
      description: "Resume building, interview prep, and direct connections with hiring partners",
      icon: Zap,
    },
    {
      name: "Certification",
      description: "Industry-recognized certifications from AWS, Azure, and Google Cloud",
      icon: Award,
    },
    {
      name: "Lifetime Access",
      description: "Access to course materials, updates, and community support forever",
      icon: Globe,
    },
    {
      name: "Small Batches",
      description: "Maximum 15 students per batch for personalized attention",
      icon: BookOpen,
    },
    {
      name: "Money-back Guarantee",
      description: "100% refund if you\'re not satisfied within the first 7 days",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Everything you need to succeed in DevOps
          </p>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-600 lg:mx-auto">
            We\'ve designed our programs based on industry demands and student success stories. 
            Here\'s what makes us different.
          </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;
