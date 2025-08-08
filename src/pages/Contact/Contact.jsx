import { GoPerson } from "react-icons/go";
import Input from "../../components/ui/Input/Input";
import Title from "../../components/ui/Title/Title";
import { MdOutlineEmail } from "react-icons/md";
import Textarea from "../../components/ui/Textarea/Textarea";
import { FiMessageSquare } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "06d65ee3-0be3-4b09-b8c3-9a93ce6398b1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
        delayChildren: 0.3, // Initial delay before children start
      },
    },
  };

  // Item animation variants
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50, // Start from below
      scale: 0.95, // Slightly smaller
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Title animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8, // Delay untuk muncul terakhir
        type: "spring",
        stiffness: 200,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <section id="contact" className="py-20 px-10 md:px-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={titleVariants}>
          <Title title="Contact" />
        </motion.div>
      </motion.div>
      <div className="container mx-auto max-w-md md:max-w-3xl xl:max-w-4xl rounded-xl shadow-lg">
        <div className="p-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={titleVariants}
            className="mb-6"
          >
            <h2 className="text-3xl font-semibold">Get In Touch</h2>
            <p>Have something to discuss? Send me a message.</p>
          </motion.div>
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            onSubmit={onSubmit}
          >
            <div className="space-y-5 mb-5">
              <motion.div variants={itemVariants}>
                <Input
                  label="Name"
                  leftIcon={<GoPerson className="size-5" />}
                  placeholder="Your Name"
                  autocomplete="off"
                  name="name"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Input
                  label="Email"
                  type="email"
                  leftIcon={<MdOutlineEmail className="size-5" />}
                  placeholder="Your Email"
                  autocomplete="off"
                  name="email"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Textarea
                  label="Message"
                  leftIcon={<FiMessageSquare className="size-5" />}
                  rows={4}
                  placeholder="Send Message"
                  autocomplete="off"
                  name="message"
                  required
                />
              </motion.div>
            </div>
            <motion.button
              className="flex items-center hover:scale-101 cursor-pointer bg-blue-500 w-full justify-center py-2.5 rounded-xl text-white font-medium transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <IoPaperPlaneOutline className="mr-2 size-5" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
