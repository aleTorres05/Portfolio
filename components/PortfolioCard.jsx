"use client";

import { useEffect, useState } from "react";

function getRandomPastelColor() {
  const h = Math.floor(Math.random() * 361); // 0-360
  const s = Math.floor(Math.random() * 31) + 20; // 20-50%
  const l = Math.floor(Math.random() * 21) + 70; // 70-90%
  return `hsl(${h}, ${s}%, ${l}%)`;
}

export default function PortfolioCard() {
  const projectList = [
    {
      bg_img:
        "https://images.t3n.de/news/wp-content/uploads/2017/10/github-universe-preview.png?class=her",
      title: "Fairefac Web",
      discription:
        "user interface for the FaiRefac system, designed specifically to manage car repair quotes and related processes efficiently. The project emphasizes a modern, responsive, and intuitive user experience, providing features that empower users to handle repair quotes dynamically.",
      tech_tools: ["#ReactJS", "#JavaScript", "#HTML"],
    },
    {
      bg_img:
        "https://images.t3n.de/news/wp-content/uploads/2017/10/github-universe-preview.png?class=her",
      title: "Fairefac Backend",
      discription:
        "user interface for the FaiRefac system, designed specifically to manage car repair quotes and related processes efficiently. The project emphasizes a modern, responsive, and intuitive user experience, providing features that empower users to handle repair quotes dynamically.",
      tech_tools: ["#NodeJs", "#JavaScript", "#MongoDB"],
    },
  ];

  const [colors, setColors] = useState({});

  useEffect(() => {
    const newColors = {};
    projectList.forEach((project) => {
      newColors[project.title] = project.tech_tools.map(() =>
        getRandomPastelColor()
      );
    });
    setColors(newColors);
  }, []);

  return (
    <>
      <div className=" w-[100%] h-fit">
        <h2 className="text-center text-lg md:text-4xl md:mb-3 lg:text-5xl font-extrabold">
          Portfolio
        </h2>
        {projectList.map((project) => {
          return (
            <div
              key={project.title}
              className="flex flex-col mt-2 self-center shadow-xl/30 rounded-2xl bg-[#4A4A4A] "
            >
              <div className="border-b-2 rounded-t-2xl ">
                <img
                  className="object-cover rounded-t-2xl w-[100%]"
                  src={project.bg_img}
                  alt=""
                />
              </div>
              <div className="p-2 flex flex-col">
                <h1 className="font-bold md:font-extrabold md:text-2xl">
                  {project.title}
                </h1>
                <p className="text-xs font-extralight text-justify md:font-light md:text-md">
                  {project.discription}
                </p>
                <div className="flex flex-row h-fit justify-center space-x-2 mt-3 md:justify-start md:space-x-4">
                  {project.tech_tools.map((tool, index) => {
                    const bgColor =
                      colors[project.title]?.[index] || "hsl(220, 8%, 90%)";
                    return (
                      <div
                        key={tool}
                        className={`p-2 rounded-md bg-[color:${bgColor}]`}
                      >
                        <p>{tool}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
