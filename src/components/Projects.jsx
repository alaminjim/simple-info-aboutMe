import Portfolio from "../../public/images/protfolio.png";
import SpicyBites from "../../public/images/spicyBytes.jpg";
import Youtube from "../../public/images/spotify.jpg";
import Webelite from "../../public/images/webelite.png";
import Supercar from "../../public/images/Supercar.png";
import Cards from "./Cards";

const Projects = () => {
  const dataJson = [
    {
      title: "Portfolio",
      desc: "Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.",
      image: Portfolio,
      live: "",
      github: "https://github.com/alaminjim",
    },
    {
      title: "Spicy Bites",
      desc: "The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!",
      image: SpicyBites,
      live: "",
      github: "https://github.com/alaminjim",
    },
    {
      title: "Spotify Clone",
      desc: "Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.",
      image: Youtube,
      live: "https://github.com/alaminjim",
      github: "https://github.com/alaminjim",
    },
    {
      title: "Webelite builder",
      desc: "Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.",
      image: Webelite,
      live: "",
      github: "https://github.com/alaminjim",
    },
    {
      title: "Super Car",
      desc: "Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.",
      image: Supercar,
      live: "",
      github: "https://github.com/alaminjim",
    },
  ];

  return (
    <section id="projects" className="relative bg-slate-50 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black border-b border-red-500 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {dataJson.map((items) => {
            return <Cards key={""} item={items} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
