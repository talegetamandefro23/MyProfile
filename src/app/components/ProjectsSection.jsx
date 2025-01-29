"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Hotel Management System",
    description:
      "A Hotel Management System (HMS) is a software solution designed to streamline and automate the operations of a hotel or hospitality business. It helps manage reservations, guest services, room assignments, billing, and other administrative tasks, ensuring efficient operations and enhanced guest experiences.",
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl:
      "",
    previewUrl:
      "/images/projects/project1.png",
  },
  {
    id: 2,
    title: "License Issuance System for Ethiopian Civil Avation Authority",
    description: " A License Issuance System for the ECAA would streamline the process of applying for, evaluating, approving, and renewing aviation-related licenses.",
    image: "/images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "/images/projects/project2.png",
  },
  {
    id: 3,
    title:
      "Ethiopian Airlines Employee promotion and competative achievment Coaching Training System",
    description:
      "A project created for Ethiopian airlines Employees coaching training process for promotion and competitve achievement",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://ethiopianairlines.visualstudio.com/Corporate%20Coaching/_git/Coaching%20V2%20UI",
    previewUrl: "https://etgcoaching.ethiopianairlines.com/",
  },
  {
    id: 4,
    title: "SAP ABAP Projects",
    description:
      "Experienced in developing and customizing SAP solutions, including ABAP report programs, module pool (dialog) programs, Smart Forms, and RFC integrations for seamless data exchange. Skilled in enhancements (user exits, BAdIs), data migration (LSMW, BDC), and workflow configuration. Proficient in integrating SAP with external systems, optimizing processes, and delivering tailored solutions for modules like SD, MM, and FI. Strong expertise in ALV reports, form design, and performance optimization, ensuring efficient and scalable SAP implementations.",
    image: "/images/projects/SAP_project.png",
    tag: ["All", "SAP ABAP"],
    gitUrl: "https://github.com/talegetamandefro23/SAP_Project",
    previewUrl: "/images/projects/SAP_project.png",
  },
  // {
  //   id: 5,
  //   title: "Modern NextJS and Tailwind CSS Website Template",
  //   description:
  //     "Create a professional and visually appealing website with our NextJS and Tailwind CSS template. This template is perfect for businesses, agencies, portfolios, and more. The modern design is fully customizable to match your brand, and the responsive layout ensures your website looks great on all devices. The code is well-organized and easy to edit, making it simple to create a unique website that stands out from the competition. With integration with popular plugins and tools, this template offers everything you need to create a successful online presence. Upgrade your website today with our NextJS and Tailwind CSS template.",
  //   image: "/images/projects/5.jpg",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/abrahamjo25/Hubnox-nextJS-UI-Template",
  //   previewUrl: "https://hubnox.vercel.app/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Sample Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="SAP ABAP"
          isSelected={tag === "SAP ABAP"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
