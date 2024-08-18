import React from "react";
import ProjectImage1 from "../assets/Kanban-and-Attendance-API.png";
import ProjectImage2 from "../assets/Kanban-and-Attendance-API.png";
import ProjectImage3 from "../assets/Web-Voucher-Express-React.png";

function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-100 text-gray-800 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">My Work</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-white p-4 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Project 1</h3>
          <img
            src={ProjectImage1}
            alt="Project 1"
            className="mb-4 w-full h-48 object-cover rounded-lg img-hover-zoom hover:scale-105"
            data-aos="zoom-in"
          />
          <p className="text-gray-700 leading-relaxed">
            This is a brief description of Project 1. It highlights the key
            features and technologies used.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Project 2</h3>
          <img
            src={ProjectImage2}
            alt="Project 2"
            className="mb-4 w-full h-48 object-cover rounded-lg img-hover-zoom hover:scale-105"
            data-aos="zoom-in"
          />
          <p className="text-gray-700 leading-relaxed">
            This is a brief description of Project 2. It highlights the key
            features and technologies used.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Project 3</h3>
          <img
            src={ProjectImage3}
            alt="Project 3"
            className="mb-4 w-full h-48 object-cover rounded-lg img-hover-zoom hover:scale-105"
            data-aos="zoom-in"
          />
          <p className="text-gray-700 leading-relaxed">
            This is a brief description of Project 3. It highlights the key
            features and technologies used.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
