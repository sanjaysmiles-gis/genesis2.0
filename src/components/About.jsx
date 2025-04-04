import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-white mb-6">About Genesis 2.0</h1>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto">
          A two-day symposium by IEEE-HKN Nu Eta Chapter, designed to empower engineering students
          with technical expertise, professional skills, and ethical values.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: faGlobe,
            title: "SDG Alignment",
            description: "Contributing to UN Sustainable Development Goals through innovation and technology"
          },
          {
            icon: faUsers,
            title: "Target Audience",
            description: "IEEE Madras Section engineering students and aspiring innovators"
          },
          {
            icon: faLightbulb,
            title: "Our Vision",
            description: "Fostering technical excellence and sustainable development in engineering"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
          >
            <FontAwesomeIcon icon={feature.icon} className="text-4xl text-accent mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-blue-200">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Event Objectives</h2>
        <ul className="space-y-4">
          {[
            "Enhance technical and professional skills through hands-on workshops",
            "Foster innovation and entrepreneurship in sustainable development",
            "Create networking opportunities with industry experts",
            "Promote ethical values and social responsibility in engineering"
          ].map((objective, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="flex items-center text-blue-200"
            >
              <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
              {objective}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default About;
