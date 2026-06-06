import React from 'react';
import { 
  Compass, 
  Sparkles, 
  MapPin, 
  Clock, 
  Star, 
  Trophy, 
  Users, 
  Award,
  TrendingUp,
  Flame,
  BookOpen,
  GraduationCap,
  Briefcase,
  Crown,
  Calendar,
  ChevronRight,
  Building
} from 'lucide-react';

const Discover = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Luxury Hospitality Management",
      provider: "Aman Resorts International",
      duration: "8 weeks",
      students: "2,345",
      rating: 4.8,
      level: "Advanced",
      icon: Crown
    },
    {
      id: 2,
      title: "Fine Dining & Wine Curatorship",
      provider: "Le Cordon Bleu",
      duration: "6 weeks",
      students: "1,892",
      rating: 4.9,
      level: "Intermediate",
      icon: Briefcase
    },
    {
      id: 3,
      title: "Boutique Hotel Operations",
      provider: "The Savoy Institute",
      duration: "10 weeks",
      students: "3,124",
      rating: 4.7,
      level: "Beginner",
      icon: Building
    }
  ];

  const trendingNow = [
    {
      id: 4,
      title: "Digital Marketing for Luxury Brands",
      provider: "LVMH Academy",
      participants: "1.2k",
      trending: true,
      icon: TrendingUp
    },
    {
      id: 5,
      title: "Spa & Wellness Management",
      provider: "Six Senses",
      participants: "892",
      trending: true,
      icon: Sparkles
    },
    {
      id: 6,
      title: "Event Planning Masterclass",
      provider: "The Knot Worldwide",
      participants: "2.1k",
      trending: false,
      icon: Calendar
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#F0EDE8] h-full overflow-y-auto select-none">
      <div className="p-4 space-y-5 pb-8">
        
        {/* Header Section */}
        <div className="space-y-1">
          <span className="text-[9px] text-[#9A8878] uppercase tracking-wider font-semibold">
            CURATED DIRECTORY
          </span>
          <div className="flex justify-between items-end">
            <h2 className="font-poppins text-[18px] font-bold text-[#1C1510] leading-tight">
              Discover Courses
            </h2>
            <button className="text-[10px] text-[#B8923E] font-semibold flex items-center gap-1">
              See All <ChevronRight size={10} />
            </button>
          </div>
          <p className="text-[11px] text-[#9A8878] mt-1">
            Hand-picked courses from industry leaders
          </p>
        </div>

        {/* Featured Partner Card */}
        <div className="bg-gradient-to-br from-white to-[#FAF7F2] border border-[rgba(184,146,62,0.15)] rounded-2xl p-4 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#B8923E]/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#B8923E]/5 rounded-full blur-xl"></div>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#B8923E]/10 flex items-center justify-center">
                <Sparkles size={12} className="text-[#B8923E]" />
              </div>
              <span className="text-[9px] font-bold text-[#B8923E] uppercase tracking-wider">
                Exclusive Summer Partner
              </span>
            </div>
            <Trophy size={14} className="text-[#B8923E]" />
          </div>

          <div className="space-y-2">
            <h3 className="font-poppins text-[14px] font-bold text-[#1C1510]">
              Aman Resorts International
            </h3>
            <p className="text-[10px] text-[#9A8878] leading-relaxed">
              Basic members receive early check-in, personalized local welcome gifts, and priority reservation services at selected resort locations worldwide.
            </p>
            
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1">
                <Users size={10} className="text-[#B8923E]" />
                <span className="text-[9px] text-[#1C1510] font-medium">2.3k+ enrolled</span>
              </div>
              <div className="flex items-center gap-1">
                <Star size={10} className="text-[#B8923E] fill-[#B8923E]" />
                <span className="text-[9px] text-[#1C1510] font-medium">4.9 rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Courses Section */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <BookOpen size={12} className="text-[#B8923E]" />
              <h3 className="text-[12px] font-bold text-[#1C1510]">Featured Courses</h3>
            </div>
            <span className="text-[8px] text-[#9A8878]">Updated weekly</span>
          </div>
          
          <div className="space-y-3">
            {featuredCourses.map((course) => {
              const IconComponent = course.icon;
              return (
                <div key={course.id} className="bg-white rounded-xl p-3 border border-[rgba(184,146,62,0.08)] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B8923E]/20 to-[#B8923E]/5 flex items-center justify-center">
                      <IconComponent size={20} className="text-[#B8923E]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="text-[12px] font-bold text-[#1C1510]">{course.title}</h4>
                        <div className="flex items-center gap-0.5">
                          <Star size={9} className="text-[#B8923E] fill-[#B8923E]" />
                          <span className="text-[9px] font-semibold text-[#1C1510]">{course.rating}</span>
                        </div>
                      </div>
                      <p className="text-[9px] text-[#9A8878] mt-0.5">{course.provider}</p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <div className="flex items-center gap-1">
                          <Clock size={8} className="text-[#B8923E]" />
                          <span className="text-[8px] text-[#9A8878]">{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={8} className="text-[#B8923E]" />
                          <span className="text-[8px] text-[#9A8878]">{course.students} students</span>
                        </div>
                        <span className="text-[7px] px-1.5 py-0.5 bg-[#B8923E]/10 text-[#B8923E] rounded-full font-semibold">
                          {course.level}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trending Now Section */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Flame size={12} className="text-[#B8923E]" />
              <h3 className="text-[12px] font-bold text-[#1C1510]">Trending Now</h3>
            </div>
            <button className="text-[9px] text-[#B8923E] font-medium flex items-center gap-1">
              View All <ChevronRight size={8} />
            </button>
          </div>
          
          <div className="space-y-2">
            {trendingNow.map((trend) => {
              const IconComponent = trend.icon;
              return (
                <div key={trend.id} className="bg-white/80 backdrop-blur-sm rounded-lg p-2.5 border border-[rgba(184,146,62,0.08)]">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 flex-1">
                      <IconComponent size={14} className="text-[#B8923E]" />
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-[11px] font-semibold text-[#1C1510]">{trend.title}</h4>
                          {trend.trending && (
                            <span className="text-[7px] px-1.5 py-0.5 bg-red-500/10 text-red-600 rounded-full font-semibold flex items-center gap-0.5">
                              <Flame size={6} /> Hot
                            </span>
                          )}
                        </div>
                        <p className="text-[8px] text-[#9A8878] mt-0.5">{trend.provider}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-semibold text-[#1C1510]">{trend.participants}</div>
                      <div className="text-[7px] text-[#9A8878]">participants</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="bg-white rounded-xl p-3 text-center border border-[rgba(184,146,62,0.08)]">
            <GraduationCap size={16} className="text-[#B8923E] mx-auto mb-1" />
            <div className="text-[14px] font-bold text-[#1C1510]">50+</div>
            <div className="text-[8px] text-[#9A8878]">Expert Courses</div>
          </div>
          <div className="bg-white rounded-xl p-3 text-center border border-[rgba(184,146,62,0.08)]">
            <Users size={16} className="text-[#B8923E] mx-auto mb-1" />
            <div className="text-[14px] font-bold text-[#1C1510]">10k+</div>
            <div className="text-[8px] text-[#9A8878]">Active Learners</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;