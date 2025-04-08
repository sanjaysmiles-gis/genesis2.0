import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* College Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full h-[400px] mb-16 rounded-2xl overflow-hidden"
      >
        <img
          src="/images/sairam-nu-eta.jpeg"
          alt="Sri Sairam Engineering College"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-6xl font-bold text-white mb-6">
          <span className="text-accent">GENESIS</span> 2.0
        </h1>
        <p className="text-xl text-blue-200 mb-4">
          Empowering Engineering Excellence through Innovation and Sustainability
        </p>
        <p className="text-2xl text-accent font-bold mb-8">
          August 12 - 13, 2025
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors"
        >
          Register Now
        </motion.button>
      </motion.div>

      {/* Key Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            icon: faCalendar,
            title: "Two-Day Symposium",
            description: "Comprehensive program featuring expert talks, competitions, and hands-on workshops"
          },
          {
            icon: faUsers,
            title: "3,500+ Participants",
            description: "Connect with peers and industry experts from the IEEE Madras Section"
          },
          {
            icon: faLightbulb,
            title: "SDG Aligned",
            description: "Contributing to UN Sustainable Development Goals through innovation"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
            whileHover={{ y: -5 }}
          >
            <FontAwesomeIcon icon={feature.icon} className="text-4xl text-accent mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-blue-200">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Event Highlights */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Event Highlights</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              day: "Day 1",
              events: [
                "BIDWARS - Strategic Bidding Competition",
                "CODEVERSE - Coding Challenge",
                "PROTOVESE Workshop",
                "INTERVISTA 2.0 - Mock Interviews"
              ]
            },
            {
              day: "Day 2",
              events: [
                "SUSTAINABLE TECH EXPO",
                "TEASEBURST - Tech Teaser Challenge",
                "STARTUP PITCH FEST",
                "AUTOMAX Workshop"
              ]
            }
          ].map((day, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold text-accent mb-4">{day.day}</h3>
              <ul className="space-y-3">
                {day.events.map((event, i) => (
                  <li key={i} className="text-blue-200 flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    {event}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
