/* eslint-disable react/no-unescaped-entities */
import hero from "../../public/images/Hero.png";
import facebook from "../../public/images/facebook.png";
import twitter from "../../public/images/twitter.png";
import instagram from "../../public/images/instagram.png";
import linkedin from "../../public/images/linkedin.png";
import reactLogo from "../../public/images/React.png";
import reduxLogo from "../../public/images/Redux.png";
import tailwind from "../../public/images/Tailwind Css.png";

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex md:ml-10 lg:ml-0 flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'm Al Amin <span className="text-red-500">Islam</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">Web Developer & Designer</p>
            <p className="mb-4 text-lg text-gray-700">
              I'm a passoinate web developer with expertise in React,
              Express.js, Mongo-DB, Node.js and modern web technologies. I love
              solving problems with Javascript and creating functional websites
              that solve real time problems.
            </p>
            <button className="bg-black text-white px-3 py-2 w-max rounded-md">
              Download CV
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src={hero} alt="" className="lg:h-[90vh] h-96" />
            <img
              src={reactLogo}
              alt=""
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={reduxLogo}
              alt=""
              className="absolute w-10 top-0 right-5 md:hidden"
            />
            <img
              src={tailwind}
              alt=""
              className="absolute w-10 rounded-full right-0 bottom-36 md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
        <img src={facebook} alt="" className="w-20" />
        <img src={instagram} alt="" className="w-20" />
        <img src={twitter} alt="" className="w-20" />
        <img src={linkedin} alt="" className="w-20" />
      </div>
    </section>
  );
};

export default Hero;
