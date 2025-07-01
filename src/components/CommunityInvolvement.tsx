
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, MapPin, Calendar, Users } from 'lucide-react';
import { useState } from 'react';

const CommunityInvolvement = () => {
  const [showAll, setShowAll] = useState(false);

  const events = [
    {
      year: '2025',
      role: 'Volunteer - A/V',
      event: 'WordCamp Nepal 2025',
      location: 'Kathmandu',
      type: 'volunteer',
      status: 'completed',
    },
    {
      year: '2025',
      role: 'Volunteer - A/V',
      event: 'WordCamp Ahmedabad 2025',
      location: 'Ahmedabad',
      type: 'volunteer',
      status: 'completed',
    },
    {
      year: '2024',
      role: 'Volunteer - Photography',
      event: 'WordCamp Delhi 2024',
      location: 'Delhi',
      type: 'volunteer',
      status: 'completed',
    },
    {
      year: '2024',
      role: 'Attendee',
      event: 'WordCamp Bengaluru 2024',
      location: 'Bengaluru',
      type: 'attendee',
      status: 'completed',
    },
    {
      year: '2024',
      role: 'Speaker',
      event: 'WordCamp Nepal 2024',
      location: 'Nepal',
      type: 'speaker',
      status: 'completed',
    },
    {
      year: '2024',
      role: 'Meetup Organizer',
      event: 'WordPress Alwar',
      location: 'Alwar',
      type: 'organizer',
      status: 'ongoing',
    },
    {
      year: '2023',
      role: 'Attendee',
      event: 'WordCamp Udaipur 2023',
      location: 'Udaipur',
      type: 'attendee',
      status: 'completed',
    },
    {
      year: '2023',
      role: 'Speaker',
      event: 'WordCamp Bhopal 2023',
      location: 'Bhopal',
      type: 'speaker',
      status: 'completed',
    },
    {
      year: '2023',
      role: 'Organizer',
      event: 'WordCamp Bengaluru 2023',
      location: 'Bengaluru',
      type: 'organizer',
      status: 'completed',
    },
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

  const displayedEvents = showAll ? events : events.slice(0, 6);

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-baloo font-bold text-white mb-4">
            Community <span className="text-gradient">Involvement</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Active participation in WordPress community events across the globe
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center p-4 bg-slate-800/50 rounded-2xl">
            <div className="text-3xl font-bold text-wp-teal mb-1">9+</div>
            <div className="text-slate-400 text-sm">Events</div>
          </div>
          <div className="text-center p-4 bg-slate-800/50 rounded-2xl">
            <div className="text-3xl font-bold text-purple-400 mb-1">3</div>
            <div className="text-slate-400 text-sm">Years</div>
          </div>
          <div className="text-center p-4 bg-slate-800/50 rounded-2xl">
            <div className="text-3xl font-bold text-blue-400 mb-1">6</div>
            <div className="text-slate-400 text-sm">Cities</div>
          </div>
          <div className="text-center p-4 bg-slate-800/50 rounded-2xl">
            <div className="text-3xl font-bold text-green-400 mb-1">4</div>
            <div className="text-slate-400 text-sm">Roles</div>
          </div>
        </div>

        {/* Compact Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {displayedEvents.map((event, index) => (
            <Card
              key={index}
              className="bg-slate-800/60 hover:bg-slate-800/80 transition-all duration-300 border-slate-700/50 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{getTypeIcon(event.type)}</span>
                  <div className="text-right">
                    <div className="text-wp-teal font-bold text-sm">{event.year}</div>
                    {event.status === 'ongoing' && (
                      <div className="text-green-400 text-xs">Ongoing</div>
                    )}
                  </div>
                </div>

                <div className="mb-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-semibold text-white ${getTypeColor(event.type)}`}>
                    {event.role}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
                  {event.event}
                </h3>

                <div className="flex items-center text-slate-400 text-xs">
                  <MapPin className="w-3 h-3 mr-1" />
                  {event.location}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        {events.length > 6 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-wp-teal to-wp-teal-dark hover:from-wp-teal-dark hover:to-wp-teal text-white font-bold px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              {showAll ? 'Show Less' : 'View All Events'}
              <ChevronRight className={`w-4 h-4 ml-2 transition-transform ${showAll ? 'rotate-90' : ''}`} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CommunityInvolvement;
