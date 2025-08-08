import Title from "../../components/ui/Title/Title";
import projects from "../../constants/projects";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { CiShare1 } from "react-icons/ci";

const Projects = () => {
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModalDetail = (project) => {
    setSelectedProject(project);
    setDetailModalOpen(true);
  };

  const closeModalDetail = () => {
    setDetailModalOpen(false);
    setSelectedProject(null);
  };

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
    <section id="projects" className="py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-20"
      >
        <motion.div variants={titleVariants}>
          <Title title="Projects" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {projects.map((item, index) => (
            <motion.div
              variants={contentVariants}
              key={index}
              className="col-span-1 border rounded-lg flex flex-col h-full"
            >
              <div>
                <img
                  src={item.src}
                  alt={item.title.toLowerCase()}
                  className="rounded-t-lg w-full"
                />
              </div>
              <div className="p-3 space-y-4 flex flex-col flex-grow">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-medium">{item.title}</h1>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === "offline"
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="text-sm line-clamp-3">
                  {item.description ?? "Tidak ada deskripsi"}
                </p>
                <div className="mb-3 mt-auto">
                  <button
                    className="py-2 px-6 inline-block rounded-full text-white font-medium duration-200 bg-blue-500 hover:scale-105 hover:shadow-md transition-transform cursor-pointer"
                    onClick={() => openModalDetail(item)}
                  >
                    See Detail
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* see detail modal */}
      {detailModalOpen && selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
          }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModalDetail}
        >
          <div
            className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-gray-800">
                {selectedProject.title}
              </h1>
              <button onClick={closeModalDetail}>
                <FiX className="w-5 h-5 text-gray-800 cursor-pointer" />
              </button>
            </div>

            <div className="space-y-4">
              <img
                src={selectedProject.src}
                alt={selectedProject.title.toLowerCase()}
                className="w-full rounded-lg"
              />
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    selectedProject.status === "offline"
                      ? "bg-red-100 text-red-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {selectedProject.status}
                </span>
              </div>
              <p className="text-gray-700">
                {selectedProject.description ?? "Tidak ada deskripsi"}
              </p>
              {selectedProject.tech && (
                <div>
                  <h3 className="font-semibold mb-2">Technologies:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <a
                href={selectedProject.status === 'offline' ? null : selectedProject.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-4 py-2 rounded-full transition-colors ${
                  selectedProject.status === "offline"
                    ? "bg-gray-100 border border-gray-400 hover:bg-gray-200 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                Visit Project <CiShare1 className="ml-2 size-4" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
