import { motion } from "framer-motion";
import Title from "../../components/ui/Title/Title";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.20,
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
    // <section className="bg-sky-950 overflow-x-hidden max-w-screen py-10">
    //   <motion.div
    //     initial={{ opacity: 0, y: -100 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{
    //         type: 'spring',
    //         damping: 20,
    //         duration: 1,
    //     }}
    //     viewport={{ once: true, amount: 0.4 }}
    //     className="container mx-auto px-10"
    //   >
    //     <h1 className="text-5xl font-semibold text-center text-white mb-10">About Me</h1>
    //     <div className="flex flex-col md:flex-row items-center justify-around">
    //       <div className="max-w-xl">
    //         <p className="text-white text-lg">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
    //           itaque quos! Nisi labore iusto voluptates placeat veritatis, nemo
    //           sequi similique expedita recusandae assumenda tenetur. Eos minus
    //           quaerat ad nemo adipisci quos molestias ducimus, totam pariatur
    //           officia aliquam ullam, iusto aut ex repudiandae voluptatibus
    //           minima repellendus corrupti voluptatum. Laudantium, error natus!
    //         </p>
    //       </div>
    //       <div>
    //         <img src="/vite.svg" alt="" width={250} />
    //       </div>
    //     </div>
    //   </motion.div>
    // </section>
    <section id='about' className="py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-10 md:px-0"
      >
        <motion.div
          variants={titleVariants}
        >
          <Title title="About Me" />
        </motion.div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-around">
          <motion.div variants={contentVariants} className="max-w-xl">
            <p className="text-black text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              itaque quos! Nisi labore iusto voluptates placeat veritatis, nemo
              sequi similique expedita recusandae assumenda tenetur. Eos minus
              quaerat ad nemo adipisci quos molestias ducimus, totam pariatur
              officia aliquam ullam, iusto aut ex repudiandae voluptatibus
              minima repellendus corrupti voluptatum. Laudantium, error natus!
            </p>
          </motion.div>
          <motion.div variants={contentVariants} className="mb-10 md:mb-0">
            <img src="/vite.svg" alt="" width={250} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
