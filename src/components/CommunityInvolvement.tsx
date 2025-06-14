
import { Card, CardContent } from '@/components/ui/card';

const CommunityInvolvement = () => {
  const events = [
    {
      year: "2025",
      role: "Volunteer - A/V",
      event: "WordCamp Ahmedabad 2025",
      location: "Ahmedabad",
      type: "volunteer",
      status: "upcoming"
    },
    {
      year: "2024",
      role: "Volunteer - Photography",
      event: "WordCamp Delhi 2024",
      location: "Delhi",
      type: "volunteer",
      status: "completed"
    },
    {
      year: "2024",
      role: "Speaker",
      event: "WordCamp Nepal 2024",
      location: "Nepal",
      type: "speaker",
      status: "completed"
    },
    {
      year: "2024",
      role: "Attendee",
      event: "WordCamp Bengaluru 2024",
      location: "Bengaluru",
      type: "attendee",
      status: "completed"
    },
    {
      year: "2023",
      role: "Organizer",
      event: "WordCamp Bengaluru 2023",
      location: "Bengaluru",
      type: "organizer",
      status: "completed"
    },
    {
      year: "2023",
      role: "Speaker",
      event: "WordCamp Bhopal 2023",
      location: "Bhopal",
      type: "speaker",
      status: "completed"
    },
    {
      year: "2023",
      role: "Attendee",
      event: "WordCamp Udaipur 2023",
      location: "Udaipur",
      type: "attendee",
      status: "completed"
    },
    {
      year: "2024",
      role: "Meetup Organizer",
      event: "WordPress Alwar",
      location: "Alwar",
      type: "organizer",
      status: "ongoing"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'organizer': return 'bg-purple-500';
      case 'speaker': return 'bg-wp-teal';
      case 'volunteer': return 'bg-blue-500';
      case 'attendee': return 'bg-slate-500';
      default: return 'bg-slate-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'organizer': return '👨‍💼';
      case 'speaker': return '🎤';
      case 'volunteer': return '🤝';
      case 'attendee': return '👥';
      default: return '📅';
    }
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-baloo font-bold text-white mb-4">
            Community <span className="text-gradient">Involvement</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Active contributor to the WordPress community through speaking, organizing, and volunteering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-wp-teal to-wp-blue"></div>

            <div className="space-y-8">
              {events.map((event, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-wp-teal rounded-full border-4 border-slate-900 z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="bg-slate-800 border-slate-700 hover:border-wp-teal/50 transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{getTypeIcon(event.type)}</span>
                            <div>
                              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${getTypeColor(event.type)}`}>
                                {event.role}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-wp-teal font-bold text-lg">{event.year}</div>
                            {event.status === 'upcoming' && (
                              <div className="text-yellow-400 text-xs font-semibold">Upcoming</div>
                            )}
                            {event.status === 'ongoing' && (
                              <div className="text-green-400 text-xs font-semibold">Ongoing</div>
                            )}
                          </div>
                        </div>
                        
                        <h3 className="font-baloo font-bold text-white text-xl mb-2">
                          {event.event}
                        </h3>
                        
                        <div className="flex items-center text-slate-300 text-sm">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                          {event.location}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityInvolvement;
