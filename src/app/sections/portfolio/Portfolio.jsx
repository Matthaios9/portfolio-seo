"use client";
import "./portfolio.css";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import data from "./data";
import { useState, useEffect } from "react";
import axios from "axios";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const categories = projects.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  const filterProjectsHandler = (category) => {
    if (category === "all") {
      fetchProjects();
      setProjects(projects);
      return;
    }

    const filterProjects = projects.filter(
      (project) => project.category === category
    );
    setProjects(filterProjects);
  };
  const fetchProjects = async () => {
    const projectsData = await axios
      .get("/api/project")
      .then((res) => res.data);
    console.log("projects", projectsData);
    setProjects(projectsData);
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Check out some of the projects I recently worked on for my clients. Use
        the buttons to toggle the different categories.
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories
          categories={uniqueCategories}
          onFilterProjects={filterProjectsHandler}
        />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
