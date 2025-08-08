import { GoPerson } from "react-icons/go";
import Input from "../../components/ui/Input/Input";
import Title from "../../components/ui/Title/Title";
import { MdOutlineEmail } from "react-icons/md";
import Textarea from "../../components/ui/Textarea/Textarea";
import { FiMessageSquare, FiX } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { SlClose } from "react-icons/sl";

const Contact = () => {
  const [result, setResult] = useState("");
  const [notification, setNotification] = useState({
    show: false,
    type: "", // 'success' atau 'error'
    title: "",
    message: "",
  });

  const closeNotification = () => setNotification(false);

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
      setNotification({
        show: true,
        type: "success",
        title: "Success!",
        message: data.value || "Operation completed successfully!",
      });
      event.target.reset();
    } else {
      setNotification({
        show: true,
        type: "error",
        title: "Error!",
        message: data.message || "Something went wrong!",
      });
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
      <div className="container mx-auto max-w-md md:max-w-3xl xl:max-w-4xl rounded-xl shadow-xl">
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
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
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

      {notification.show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
          }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative"
          >
            {/* Tombol X di kanan atas */}
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center relative">
                <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  {notification.type === "success" ? (
                    <>
                      <IoIosCheckmarkCircleOutline className="text-green-500" />
                      {notification.title}
                    </>
                  ) : (
                    <>
                      <SlClose className="text-red-500" />
                      {notification.title}
                    </>
                  )}
                </h1>
              </div>

              <button
                className="absolute right-5 cursor-pointer text-gray-500 hover:text-gray-800 transition-colors"
                onClick={closeNotification}
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <div className="pt-3">
              <p className='text-gray-800'>{notification.message}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Contact;
