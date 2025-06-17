
import { TrendingUp, Users, Award, Globe } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      id: 1,
      name: "Students Trained",
      value: "2,000+",
      icon: Users,
      change: "+12%",
      changeType: "increase",
    },
    {
      id: 2,
      name: "Job Placement Rate",
      value: "94%",
      icon: TrendingUp,
      change: "+5%",
      changeType: "increase",
    },
    {
      id: 3,
      name: "Industry Certifications",
      value: "15+",
      icon: Award,
      change: "+3",
      changeType: "increase",
    },
    {
      id: 4,
      name: "Global Reach",
      value: "25+",
      icon: Globe,
      change: "+8",
      changeType: "increase",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 px-6 py-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <dt>
                <div className="absolute rounded-md bg-gradient-to-r from-blue-600 to-purple-600 p-3">
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-600">{item.name}</p>
              </dt>
              <dd className="ml-16 flex items-baseline">
                <p className="text-3xl font-bold text-gray-900">{item.value}</p>
                <p className="ml-2 flex items-baseline text-sm font-medium text-green-600">
                  <span className="sr-only">Increased by</span>
                  {item.change}
                </p>
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
