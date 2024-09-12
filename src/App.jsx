import React from "react";
import myImage from "./public/dev-ed-wave.png";
import design from "./public/design.png";
import code from "./public/code.png";
import consulting from "./public/consulting.png";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="bg-white px-5">
        <section>
          <nav className="py-10 mb-10 flex justify-between">
            <h1 className="text-xl font-burtons">My Resume</h1>
            <ul className="flex items-center">
              <li>
                <i className="fa-solid fa-moon cursor-pointer text-2xl"></i>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md border-none ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center">
            <h2 className="text-4xl py-2 text-teal-600 font-medium">Sreang Mnegheang</h2>
            <h3 className="text-2xl py-2 font-bold">Website Developer</h3>
            <p className="text-md py-4 leading-8 text-gray-800">
              Currently a computer science student looking for job opportunities.
              Even though I have not had work experience before, with my passion and
              commitment, I believe I am a good candidate for this position. I am very
              excited and cannot wait to use what I have learned in school.
            </p>
          </div>
          <div className="text-4xl flex justify-center gap-16 py-3 text-gray-600">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-telegram"></i>
          </div>
          <div className="relative object-cover bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
            <img src={myImage} alt="Avatar" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-2xl py-1 mt-5">
              My expertise
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a Website Developer I have studying HTML, CSS, JavaScript, Bootstrap 5, Tailwind and React.JS.
            </p>
          </div>
          <div className="text-center text-3xl text-teal-600">
            <h2>Services I offer</h2>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <div className="flex justify-center">
              <img src={design} width={100} height={100} alt="" />
            </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Design
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="text-xl py-4">Design tools I use</h4>
              <p className="text-teal-600 py-1">HTML</p>
              <p className="text-teal-600 py-1">CSS</p>
              <p className="text-teal-600 py-1">Bootstrap 5</p>
              <p className="text-teal-600 py-1">Tailwind</p>
              <p className="text-teal-600 py-1">JavaScript</p>
              <p className="text-teal-600 py-1">React.JS</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <div className="flex justify-center">
              <img src={code} width={100} height={100} alt="" />
            </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="text-xl py-4">Design tools I use</h4>
              <p className="text-teal-600 py-1">HTML</p>
              <p className="text-teal-600 py-1">CSS</p>
              <p className="text-teal-600 py-1">Bootstrap 5</p>
              <p className="text-teal-600 py-1">Tailwind</p>
              <p className="text-teal-600 py-1">JavaScript</p>
              <p className="text-teal-600 py-1">React.JS</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <div className="flex justify-center">
              <img src={consulting} width={100} height={100} alt="" />
            </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Consulting
              </h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="text-xl py-4">Design tools I use</h4>
              <p className="text-teal-600 py-1">HTML</p>
              <p className="text-teal-600 py-1">CSS</p>
              <p className="text-teal-600 py-1">Bootstrap 5</p>
              <p className="text-teal-600 py-1">Tailwind</p>
              <p className="text-teal-600 py-1">JavaScript</p>
              <p className="text-teal-600 py-1">React.JS</p>
          </div>
        </section>

      </main>
    </>
  );
}

export default App;
