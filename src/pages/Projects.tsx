import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Check, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projectData = [
  {
    title: "Expensify",

    description: `ExpensiFy is a full-stack Expense Tracker and Budget Management System where users can register, log in, and manage their expenses and budgets. It allows users to categorize expenses, set budget limits, and generate reports in Ms-Excel. Username: admin@dev.in  Password: admin123`,
    image: "./expensify.webp",
    tools: [
      "React-TS",
      "Express-TS",
      "Supabase",
      "PostgresSQL",
      "Shadcn UI",
      "Tanstack Query",
      "React-Hook-Form",
    ],
    liveUrl: "https://expensi-fy-3urt.vercel.app/",
    githubUrl: "https://github.com/dexterousdhruv/Expensify",
  },
  {
    title: "Tech Crux",

    description: `TechCrux is a full-stack project designed to deliver a seamless and dynamic blogging experience. Built with React and Redux Toolkit on the frontend, and powered by Node.js, Express, and MongoDB on the backend, it provides robust blog management functionality and a clean user interface. Username: admin@dev.in  Password: admin123`,
    image: "./tech-crux.webp",
    tools: ["React.js", "Express.js", "Firebase", "MongoDB", "Flowbite"],
    liveUrl: "https://tech-crux-blog-app.pages.dev/",
    githubUrl: "https://github.com/dexterousdhruv/Tech-Crux-Blog-app",
  },
  {
    title: "Users Base",

    description: `A basic web application implementing the CRUD functionality that allows you to register a new user, edit user details, view user data and delete users on the fly. It also supports robust backend  pagination, filtering  on the basis of gender, activity and newest to oldest or vice-versa.`,
    image: "./users-base.webp",
    tools: ["React.js", "Express.js", "Chakra UI", "MongoDB", "Axios"],
    liveUrl: "https://users-base-icu8.vercel.app",
    githubUrl: "https://github.com/dexterousdhruv/UsersBase",
  },
  {
    title: "Lets Meal",

    description: `This is a food ordering UI web application built using React, React Redux, Redux Toolkit and Tailwind. The purpose of this application was to learn effortless state management of complex state data using Redux Toolkit. `,
    image: "./lets-meal.webp",
    tools: ["React.js", "Redux Toolkit", "Tailwind CSS"],
    liveUrl: "https://lets-meal.netlify.app/",
    githubUrl: "https://github.com/dexterousdhruv/Lets-Meal-RTK",
  },
];

const Projects = () => {
  // Create pairs of projects for carousel items
  const projectPairs = [];
  for (let i = 0; i < projectData.length; i += 2) {
    projectPairs.push(projectData.slice(i, i + 2));
  }

  return (
    <div
      id="projects"
      className="py-16 sm:py-32 px-8 min-h-screen flex flex-col items-center"
    >
      <div className="w-full max-w-5xl mx-auto animate-fade-in">
        <div className="flex items-center mb-8 gap-6">
          <h1 className="text-4xl font-medium">Projects</h1>
          <div className="w-full max-w-52 h-[1px] bg-foreground/50 "></div>
        </div>
        <p className="text-foreground/70 mb-8 max-w-2xl">
          A showcase of my recent work, personal projects, and collaborations.
        </p>

        <Carousel className="w-full mt-10">
          <CarouselContent>
            {projectPairs.map((pair, index) => (
              <CarouselItem key={index}>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {pair.map((project: any, projectIndex: number) => (
                    <ProjectCard key={projectIndex} project={project} />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-4">
            <CarouselPrevious className="static translate-y-0 ml-auto" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tools: string[];
    image: string;
    liveUrl: string;
    githubUrl: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden rounded-xl border-0 bg-[#1c2430] text-white shadow-md ">
      <CardContent className="p-0">
        <div className="p-6 space-y-4 ">
          <h2 className="text-2xl font-bold">{project.title}</h2>

          {/* <ul className="space-y-2 pt-1">
            {project.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                <Check className="min-w-4 h-4 text-teal-400 mt-0.5" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul> */}

          <div className="text-gray-300 text-sm leading-relaxed min-h-">
            {project.description}
          </div>

          <div className="flex gap-1.5 flex-wrap pb-2">
            {project.tools.map((name: string, i) => (
              <Badge
                key={i}
                variant="outline"
                className="text-xs font-light shadow-[0_0_10px_rgba(77,155,255,0.2)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(77,155,255,0.4)]"
              >
                {name}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              asChild
              variant="outline"
              className="bg-white text-black hover:bg-gray-200 font-medium rounded-full px-4 py-1 h-8 text-xs"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Live Site <ArrowUpRight className="h-3 w-3" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white text-black hover:bg-gray-200 font-medium rounded-full px-4 py-1 h-8 text-xs"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Github <ArrowUpRight className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt- relative rounded-t-lg overflow-hidden mx-5 mb-0 borde group-hover:mb-3 duration-200  border-gray-700 ">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full  scale-[115%] hover:scale-100 duration-300 hover:pb-4 translate-y-11 hover:translate-y-0 "
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
