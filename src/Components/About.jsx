import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-black to-cyan-900  text-white md:h-screen"
    >
      <div className=" max-w-screen-lg flex flex-col justify-center mx-auto pt-20 px-4 w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>
        <p className=" text-xl mt-18 text-left">
          Hello, I am Sumit Kumar, a final-year Computer Science student from
          India and a dedicated Full Stack Web Developer. My expertise includes
          programming languages such as Python, JavaScript, PHP, HTML, CSS, and
          C, alongside frameworks like ReactJS, NodeJS, and Firebase. I am
          proficient in data analytics with Power BI, UI/UX design using Figma,
          and database management with MySQL. Additionally, I have experience
          with tools like GitHub, VS Code, and PyCharm, as well as a foundation
          in machine learning. I am passionate about delivering high-quality,
          user-centric web solutions.
        </p>
        <br />
        <p className="text-xl text-left">
          {" "}
          Highly responsible and organized with excellent writing,
          communication, and critical thinking abilities.
        </p>

        <div className=" bg-slate-300 bg-opacity-10 rounded-md mt-10 border-slate-300  border-2">
          <ul className="list-disc pl-4 m-6 space-y-3">
            <li>
              Project Admin at{" "}
              <a href="https://gssoc.girlscript.tech/" className=" font-bold">
                GSSoC'24 EXTD
              </a>
            </li>
            <li>
              Project Admin at{" "}
              <a href="https://www.vsoc.tech/" className=" font-bold">
                VSoC'24
              </a>
            </li>
            <li>
              Joint Web Master at{" "}
              <a href="https://cscmuj.netlify.app/" className=" font-bold">
                Cyber Space Club MUJ
              </a>
            </li>
            <li>
              Recipient of the <b>Student Excellence Award</b> for academic and
              personal growth
            </li>
            <li>
              Finalist at the <b>Hack the Metaverse Hackathon</b>, hosted by
              IEEE Computer Society Bangalore and IIIT Bangalore
            </li>
            <li>
              Achieved Third Position in <b>Quizophile 3.0</b>, conducted by
              SIMS, Pune
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
