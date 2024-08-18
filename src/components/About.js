import React from "react";

function About() {
  return (
    <section id="about" className="bg-white text-gray-800 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <div className="max-w-4xl mx-auto text-center">
        <ul className="space-y-6">
          <li
            className="text-lg leading-relaxed flex justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <span className="mr-2 text-green-500">→</span>
            <span>
              I am a passionate and dedicated Fullstack Web Developer with
              experience in building web applications.
            </span>
          </li>
          <li
            className="text-lg leading-relaxed flex justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="mr-2 text-green-500">→</span>
            <span>
              On the front-end, I specialize in using{" "}
              <span className="font-semibold">React.js</span> and{" "}
              <span className="font-semibold">JavaScript/TypeScript</span>.
            </span>
          </li>
          <li
            className="text-lg leading-relaxed flex justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span className="mr-2 text-green-500">→</span>
            <span>
              On the back-end, I have extensive experience with{" "}
              <span className="font-semibold">Node.js</span> and{" "}
              <span className="font-semibold">Express.js</span>.
            </span>
          </li>
          <li
            className="text-lg leading-relaxed flex justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <span className="mr-2 text-green-500">→</span>
            <span>
              I also work with modern tools and environments, including{" "}
              <span className="font-semibold">Bun</span> and{" "}
              <span className="font-semibold">Docker</span>.
            </span>
          </li>
          <li
            className="text-lg leading-relaxed flex justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <span className="mr-2 text-green-500">→</span>
            <span>
              I am continuously learning and exploring new technologies.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
