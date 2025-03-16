import { useEffect, useRef } from "react";

export default function Skills() {
  const skillsData = {
    title: "My  Skills",
    rows: [
      [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "TYPESCRIPT",
        "REACT",
        "NEXT JS",
        "NODE JS",
        "EXPRESS",
        "REST API",
        "GRAPHQL",
        "TRPC",
      ],
      ["TAILWIND CSS", "SHADCN", "FRAMER MOTION"],
      [
        "OAUTH",
        "SQL",
        "FIREBASE",
        "MONGODB",
        "SMART CONTRACTS",
      ],
      ["DB MODELING", "AI Integration", "Razorpay PAYMENTS"],
      ["GIT", "GITHUB", "VERCEL", "RENDER"],
    ],
  };

  return (
    <div id="skills" className="relative w-full py-16 sm:py-32 scr px-8 overflow-hidden flex items-center">
    
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="flex items-center mb-8 gap-3 sm:gap-6">
          <h1 className="text-4xl font-medium">My Skills</h1>
          <div className="w-full max-w-32 sm:max-w-52 h-[1px] bg-foreground/50 "></div>
        </div>

        {/* Skills rows */}
        <div className="space-y-3 sm:space-y-6">
          {skillsData.rows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="flex flex-wrap justify-center gap-3 md:gap-4"
            >
              {row.map((skill, skillIndex) => (
                <div
                  key={`skill-${rowIndex}-${skillIndex}`}
                  className="text-zinc-300 border border-foreground/20 rounded-md px-3 py-2 text-xs md:text-sm xl:text-base font-medium
                  shadow-[0_0_10px_rgba(77,155,255,0.2)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(77,155,255,0.4)]"
                >
                  {skill[0] + skill.slice(1).toLowerCase()}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
