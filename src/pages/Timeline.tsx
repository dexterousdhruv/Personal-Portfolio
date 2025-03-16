import useMediaQuery from "@/hooks/use-media-query";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Briefcase, GraduationCap, Play } from "lucide-react";
import { TiArrowSortedUp } from "react-icons/ti";


const Timeline = () => {
  const isAboveLargeScreens = useMediaQuery(`(min-width: 1024px)`)
  const experiences = [
    {
      role: "MERN Stack Developer",
      company: "Nadcab Labs, Prayagraj",
      description: `Developed a secure multi-signature wallet feature using Wagmi and RainbowKit, providing users with enhanced control and protection over their digital assets. Wrote over 20+ RESTful APIs using Node.js & Express.js, involving complex data queries using Mongoose.js and ensuring efficient data retrieval resulting in quicker response times.`,
      duration: "Jan 2025 - Present",
    },
    {
      role: "Front-End Developer Intern",
      company: "Sprite Era IT Solutions, Remote",
      description: `As a front-end intern I developed an analytics dashboard for doctors, providing key metrics regarding patient appointments, total footfall and ratings for doctors' feedback. Created a robust admin dashboard, streamlining administrative tasks and improving operational efficiency by enabling patient report generation, clinic and appointment management.`,
      duration: "Sept 2024 - Nov 2024",
    },
    // {
    //   role: "",
    //   company: "",
    //   description: '',
    //   duration: ""
    // }
  ];

  return (
    <div id="timeline" className="pt-32 pb-1 px-8 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto animate-fade-in">
        <div className="flex items-center mb-8 gap-6">
          <h1 className="text-4xl font-medium">Experience</h1>
          <div className="w-full max-w-52 h-[1px] bg-foreground/50 "></div>
        </div>
        <p className="text-foreground/70 mb-10 max-w-2xl">
          {/* I offer a range of design and development services to help bring your
          vision to life. */}
        </p>
        <section className=" py-16">
          <div className="container mx-auto max-w-5xl p-0 ">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute lg:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-foreground/10"></div>

              {experiences.map((el, i) => {
                if (i % 2 === 0) {
                  return (
                    <div key={i} className="relative mb-16 lg:mb-24">
                      <div className="flex items-center justify-center">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                          {/* Left content */}
                          <div className={cn("lg:w-1/2 lg:text-right max-lg:pl-10 lg:pr-10 order-2 lg:order-1   ",
                            isAboveLargeScreens ? "animate-slide-in-right" : "animate-slide-in-left"
                          )}>
                            <div className="relative border border-foreground/10 p-6 rounded-lg shadow-xl inline-block">
                              <div className="absolute -rotate-90 top-2 -left-[18px] lg:rotate-90 lg:left-[calc(100%_-_10px)] ">
                                <TiArrowSortedUp size={28} className=" text-foreground/20" />
                              </div>
                              <div className="absolute top-5 -right-[33px] h- bg-foreground/10 w-[32px] "></div>
                              <h3 className="text-white text-xl font-semibold mb-1">
                                {el.role}
                              </h3>
                              <p className="text-gray-400 mb-3">{el.company}</p>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {el.description}
                              </p>

                              <p className="text-gray-400 text-sm mt-4 lg:hidden">
                                {el.duration}
                              </p>
                            </div>
                          </div>

                          {/* Timeline icon */}
                          <div className="absolute left-0 lg:left-1/2 transform -translate-x-1/2 flex items-center justify-center order-1 md:order-2 ">
                            <div className="bg-gray-800 rounded-full p-3 z-10">
                              <Briefcase className="h-6 w-6 text-white" />
                            </div>
                          </div>

                          {/* Right content (date) */}
                          <div className="hidden lg:block lg:w-1/2 lg:pl-12 text-center lg:text-left order-3 ">
                            <h3 className=" h-12 flex items-center text-white text-xl font-medium">
                              {el.duration}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={i} className="relative mb-16 lg:mb-24">
                      <div className="flex items-center justify-center ">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                          {/* Left content (date) */}
                          <div className="hidden lg:block lg:w-1/2 lg:text-right lg:pr-12 order-2 lg:order-1">
                            <h3 className="text-white text-xl font-medium h-12 flex items-center justify-end">
                              {el.duration}
                            </h3>
                          </div>

                          {/* Timeline icon */}
                          <div className="absolute left-0 lg:left-1/2 transform -translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                            <div className="bg-gray-800 rounded-full p-3 z-10">
                              <Briefcase className="h-6 w-6 text-white" />
                            </div>
                          </div>

                          {/* Right content */}
                          <div className="lg:w-1/2 pl-10 order-3 animate-slide-in-left">
                            <div className="relative p-6 rounded-lg shadow-xl inline-block border border-foreground/10">
                              <div className="absolute -rotate-90  top-2 -left-[18px]">
                                <TiArrowSortedUp size={28} className=" text-foreground/20" />
                              </div>
                              <h3 className="text-white text-xl font-semibold mb-1">
                                {el.role}
                              </h3>
                              <p className="text-gray-400 mb-3">{el.company}</p>
                              <p className="text-gray-300 text-sm leading-relaxed">{el.description}</p>
                              <p className="text-gray-400 text-sm mt-4 lg:hidden">
                                {el.duration}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Timeline;
