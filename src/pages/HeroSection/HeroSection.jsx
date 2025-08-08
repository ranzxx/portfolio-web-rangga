import { motion } from "framer-motion";

const HeroSection = () => {
  const techStack = [
    { src: '/img/reactjs.png', alt: 'React' },
    { src: '/img/tailwind.png', alt: 'Tailwind' },
    { src: '/img/motion.png', alt: 'Motion' },
  ]

  return (
    <section
      id="home"
      className="h-screen flex flex-wrap xl:flex-row items-center justify-center lg:px-24 px-10 relative overflow-hidden max-w-screen"
    >
      <div className="container mx-auto text-center">
        <div className="space-y-4">
          <div className="space-x-2.5 flex flex-wrap justify-center text-5xl lg:text-6xl font-bold">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", delay: 0.8 }}
            >
              Hi,
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", delay: 1 }}
            >
              I'm
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", delay: 1.2 }}
            >
              Rangga
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", delay: 1.4 }}
            ></motion.span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 1.6,
            }}
            className="max-w-3xl mx-auto"
          >
            Menciptakan solusi digital yang mengutamakan pengalaman pengguna
            dengan menggabungkan kreativitas desain dan keahlian teknis
            programming
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 1.8,
            }}
          >
            <a
              href="#about"
              className="border border-blue-400 active:bg-blue-500 py-2.5 px-10 rounded-full font-medium hover:shadow-lg transition-all hover:bg-blue-500 active:text-white hover:border-blue-500 hover:text-white duration-300 hover:scale-105 inline-block"
            >
              About Me
            </a>
          </motion.div>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 2,
              }}
              className="mb-5 text-lg text-gray-900 font-medium"
            >
              Tech Stacks
            </motion.h1>
            <div className="flex flex-row justify-center items-center space-x-5">
              {techStack.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 2.2 + index * 0.2,
                  }}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
