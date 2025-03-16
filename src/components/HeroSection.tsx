import { useRef } from "react";
import { Download, Github } from "lucide-react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-between overflow-hiddenpr"
    >
      <div className="flex flex-1 relative">
        {/* Left Side - Text */}
        <div className="w-full flex flex-col justify-center px-6 sm:p-16 z-10">
          <div ref={textRef} className="max-w-5xl mx-auto pt-12 sm:pt-0">
            <h1 className="text-xl font-light mb-3  leading-tight animate-slide-in-left">
              Hello, I'm
            </h1>
            <h1 className="text-[46px] font-semibold mb-6 animate-slide-in-left sm:text-[55px] md:text-6xl lg:text-7xl lg:leading-[1.1] xl:text-[80px]">
              Dhruv Verma. <br />
              {/* I craft things for the web. */}
            </h1>
            <p className="text-foreground/70 mb-10 leading-loose animate-slide-in-left delay-200 max-w-screen-sm ">
              I'm a fullstack engineer with a strong inclination towards backend
              development, meanwhile dabbling into the frontend territory too to
              create intuitive user interfaces. Let's build something
              extraordinary together.
            </p>

            <div className="animate-fade-in delay-500 flex justify-between items-center max-w-[280px]">
              {/* <WorkButton /> */}
              <a
                target="__blank"
                href="https://github.com/dexterousdhruv"
                className="flex items-center gap-2 border border-foreground/20 rounded-md px-6 py-2.5 h-fit transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-foreground/10"
              >
                Github <Github size={18} />
              </a>
              <a
                href="./Dhruv_Verma.pdf"
                download
                className="flex items-center gap-2 border border-foreground/20 rounded-md px-6 py-2.5 h-fit transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-foreground/10"
              >
                Resume <Download size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
