/* eslint-disable react/no-unescaped-entities */
import MernStack from "../../public/images/mernstack.png";
import Html from "../../public/images/Html.png";
import Css from "../../public/images/CSS.png";
import Javascript from "../../public/images/JS.png";
import ReactLogo from "../../public/images/React.png";
import ReduxLogo from "../../public/images/Redux.png";
import Tailwind from "../../public/images/Tailwind Css.png";
import Bootstrap from "../../public/images/Bootstrap.png";
import Nodejs from "../../public/images/NodeLogo.png";
import Mongodb from "../../public/images/mongodb.svg";
import Express from "../../public/images/Express.png";
import Nextjs from "../../public/images/NextJs.png";

const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg text-red-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-4xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I'm Al Amin Islam
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A Full-Stack Developer with expertise in web development, SEO and
              MERN stack
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  My Journey
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  My journey into web development began with a simple curiosity
                  about how websites work. I started learning HTML and CSS, and
                  soon found myself drawn deeper into JavaScript. As I explored
                  more, React opened the door to building dynamic and
                  interactive user interfaces. To become a complete MERN Stack
                  developer, I dived into backend technologies like Node.js,
                  Express.js, and MongoDB. Through building real-world projects,
                  I learned how to solve real user problems and create
                  functional, scalable applications. Each day, I strive to learn
                  something new and sharpen my skills. For me, coding is not
                  just a profession — it’s a passion that drives me to build,
                  learn, and grow continuously.
                </p>
                <img src={MernStack} alt="" className="rounded-lg w-52 mt-4" />
              </div>
              <div className="border rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-2xl shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  Skills & Expertise
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Html} alt="" className="w-10" />
                    <span className="font-semibold">HTML</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Css} alt="" className="w-8" />
                    <span className="font-semibold">CSS</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Javascript} alt="" className="w-10" />
                    <span className="font-semibold">Javascript</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={ReactLogo} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">React</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={ReduxLogo} alt="" className="w-8" />
                    <span className="font-semibold">Redux</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Tailwind} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">Tailwind</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Bootstrap} alt="" className="w-10" />
                    <span className="font-semibold">Bootstrap</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Nodejs} alt="" className="w-10" />
                    <span className="font-semibold">Node Js</span>
                  </div>
                  <div className="border border-red-300 flex items-center w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Mongodb} alt="" className="w-10" />
                    <span className="font-semibold">Mongodb</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Express} alt="" className="w-10" />
                    <span className="font-semibold">Express</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Nextjs} alt="" className="w-9" />
                    <span className="font-semibold">Next Js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              More About Me
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              I’m a passionate and detail-oriented MERN Stack developer with a
              strong focus on building real-world, user-centric web
              applications. I enjoy solving problems through code and turning
              ideas into interactive, responsive digital solutions. With
              hands-on experience in JavaScript (ES6+), React.js, Node.js,
              Express.js, and MongoDB, I love working on both frontend and
              backend to bring full-stack projects to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
