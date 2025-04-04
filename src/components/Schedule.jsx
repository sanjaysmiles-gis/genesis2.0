import { motion } from 'framer-motion';

const Schedule = () => {
  const scheduleData = [
    {
      day: "Day 1",
      events: [
        {
          time: "09:00 AM - 10:30 AM",
          name: "BIDWARS",
          description: "Strategic bidding competition enhancing entrepreneurial skills"
        },
        {
          time: "11:00 AM - 12:30 PM",
          name: "CODEVERSE",
          description: "Coding challenge developing problem-solving skills"
        },
        {
          time: "02:00 PM - 03:30 PM",
          name: "PROTOVESE Workshop",
          description: "Hands-on session on prototype development"
        },
        {
          time: "04:00 PM - 05:30 PM",
          name: "INTERVISTA 2.0",
          description: "Mock interview sessions with industry experts"
        }
      ]
    },
    {
      day: "Day 2",
      events: [
        {
          time: "09:00 AM - 10:30 AM",
          name: "SUSTAINABLE TECH EXPO",
          description: "Showcase of SDG-aligned projects"
        },
        {
          time: "11:00 AM - 12:30 PM",
          name: "TEASEBURST",
          description: "Tech teaser video creation challenge"
        },
        {
          time: "02:00 PM - 03:30 PM",
          name: "STARTUP PITCH FEST",
          description: "Startup pitching and networking session"
        },
        {
          time: "04:00 PM - 05:30 PM",
          name: "AUTOMAX Workshop",
          description: "Workshop on AI & automation technologies"
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white text-center mb-12"
      >
        Event Schedule
      </motion.h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {scheduleData.map((day, dayIndex) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, x: dayIndex === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: dayIndex * 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-accent mb-6">{day.day}</h2>
            <div className="space-y-6">
              {day.events.map((event, eventIndex) => (
                <motion.div
                  key={event.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: dayIndex * 0.2 + eventIndex * 0.1 }}
                  className="border-l-2 border-accent pl-4"
                >
                  <p className="text-blue-200 text-sm">{event.time}</p>
                  <h3 className="text-white font-bold mt-1">{event.name}</h3>
                  <p className="text-blue-200 text-sm mt-1">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
