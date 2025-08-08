import Title from '../../components/ui/Title/Title'
import mySkills from '../../constants/skills'
import { motion } from 'framer-motion'

const Skills = () => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      },
    };

    const titleVariants = {
      hidden: { opacity: 0, y: -50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    };

    const contentVariants = {
      hidden: { opacity: 0, y: -50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    };

    return (
      <section id="skills" className='py-20'>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-10 md:px-20"
        >
          <motion.div variants={titleVariants}>
            <Title title="My Skills" />
          </motion.div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-items-center">
            {mySkills.map((item, index) => (
              <motion.div
                variants={contentVariants}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                key={index}
                className="w-20 flex flex-col items-center"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-lg">
                  <img
                    src={item.src}
                    className="w-16 h-16 object-contain"
                    alt={item.alt || item.title}
                  />
                </div>
                {item.title && (
                  <p className="text-sm text-center mt-2 font-medium text-gray-600">
                    {item.title}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    );
}

export default Skills