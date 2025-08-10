import { motion } from "framer-motion";

const HeroSection = () => {
  const techStack = [
    { src: '/img/reactjs.png', alt: 'React' },
    { src: '/img/tailwind.png', alt: 'Tailwind' },
    { src: '/img/motion.png', alt: 'Motion' },
  ]

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1,
      },
    },
  };

  // Variants untuk text yang muncul berurutan
  const textStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Individual word variants
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  // Content variants (paragraph, button, etc)
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  // Tech stack variants dengan stagger
  const techStackContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const techItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="home"
      className="h-screen flex flex-wrap xl:flex-row items-center justify-center lg:px-24 px-10 relative overflow-hidden max-w-screen"
    >
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto text-center"
      >
        <div className="space-y-4">
          <motion.div
            variants={textStaggerVariants}
            className="space-x-2.5 flex flex-wrap justify-center text-5xl lg:text-6xl font-bold"
          >
            <motion.span variants={wordVariants}>Hi,</motion.span>
            <motion.span variants={wordVariants}>I'm</motion.span>
            <motion.span variants={wordVariants}>Rangga</motion.span>
          </motion.div>
          <motion.p variants={contentVariants} className="max-w-3xl text-base text-gray-800 mx-auto">
            Menciptakan solusi digital yang mengutamakan pengalaman pengguna
            dengan menggabungkan kreativitas desain dan keahlian teknis
            programming
          </motion.p>
          {/* <motion.div variants={contentVariants}>
            <a
              href="#about"
              className="border border-blue-400 active:bg-blue-500 py-2.5 px-10 rounded-full font-medium hover:shadow-lg transition-all hover:bg-blue-500 active:text-white hover:border-blue-500 hover:text-white duration-300 hover:scale-105 inline-block"
            >
              About Me
            </a>
          </motion.div> */}

          {/* Tech stacks */}
          <motion.div variants={contentVariants}>
            <motion.h1 className="mb-5 text-lg text-gray-900 font-medium">
              Tech Stacks
            </motion.h1>
            <motion.div
              variants={techStackContainerVariants}
              className="flex flex-row justify-center items-center space-x-5"
            >
              {techStack.map((item, index) => (
                <motion.div
                  variants={techItemVariants}
                  key={index}
                  className="w-10 flex flex-col items-center"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg">
                    <img
                      src={item.src}
                      className="w-10 h-10 object-contain"
                      alt={item.alt}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
