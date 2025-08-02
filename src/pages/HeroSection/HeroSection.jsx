import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-b from-white to-sky-950 flex flex-wrap xl:flex-row items-center justify-center lg:px-24 px-10 relative overflow-hidden max-w-screen"
    >
      <div className="container mx-auto text-center">
        <div className="space-y-7">
          {/* <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            duration: 1,
            delay: 2,
          }}
          className="text-6xl lg:text-6xl font-bold">Hi, I'm Rangga</motion.h1> */}
          <div className="space-x-2.5 text-6xl lg:text-6xl font-bold">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", delay: 1 }}
            >
              Hi,
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", delay: 1.2 }}
            >
              I'm
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", delay: 1.4 }}
              className='text-white'
            >
              Rangga
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", delay: 1.6 }}
            >
              Nafie
            </motion.span>
          </div>
          <motion.p 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            delay: 1.8
          }}
          className="max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            recusandae distinctio necessitatibus aspernatur deleniti doloremque
            nulla, perferendis asperiores eum
          </motion.p>
          <motion.div
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 2
            }}
          >
            <a
              href="#about"
              className="border border-blue-400 py-2.5 px-10 rounded-full font-medium hover:shadow-lg transition-all hover:bg-blue-500 hover:border-blue-500 hover:text-white duration-300 hover:text-xl"
            >
              About Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection