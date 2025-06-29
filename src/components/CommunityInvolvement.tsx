import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CommunityInvolvement = () => {
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
      case 'organizer':
        return 'bg-purple-500';
      case 'speaker':
        return 'bg-wp-teal';
      case 'volunteer':
        return 'bg-blue-500';
      case 'attendee':
        return 'bg-slate-500';
      default:
        return 'bg-slate-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'organizer':
        return '👨‍💼';
      case 'speaker':
        return '🎤';
      case 'volunteer':
        return '🤝';
      case 'attendee':
        return '👥';
      default:
        return '📅';
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-white tracking-tight">
          Community <span className="text-wp-teal">Involvement</span>
        </h2>
        <p className="text-slate-400 mt-3 max-w-xl mx-auto">
          A creative journey through speaking, organizing, volunteering, and
          attending.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-wp-teal to-wp-blue transform -translate-x-1/2 z-0" />

        <div className="space-y-24 relative z-10">
          {events.map((event, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 60, rotate: isLeft ? -4 : 4 }}
                animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-5 w-6 h-6 rounded-full bg-wp-teal border-4 border-slate-900 shadow-lg shadow-wp-teal/50 transform -translate-x-1/2 z-20 animate-pulse" />

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.03, rotate: isLeft ? -1 : 1 }}
                  className="w-full md:w-[45%]"
                >
                  <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:shadow-wp-teal/40 transition duration-300 rounded-2xl hover:scale-105">
                    <CardContent className="p-6 relative">
                      <div className="absolute top-4 right-4 text-right text-sm text-wp-teal font-bold">
                        {event.year}
                        {event.status === 'ongoing' && (
                          <div className="text-green-400 text-xs">Ongoing</div>
                        )}
                      </div>

                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-2xl">
                          {getTypeIcon(event.type)}
                        </span>
                        <span
                          className={`text-xs px-3 py-1 rounded-full font-semibold text-white ${getTypeColor(
                            event.type
                          )}`}
                        >
                          {event.role}
                        </span>
                      </div>

                      <h3 className="text-white font-semibold text-xl mb-2">
                        {event.event}
                      </h3>

                      <div className="flex items-center text-slate-400 text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        {event.location}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunityInvolvement;
