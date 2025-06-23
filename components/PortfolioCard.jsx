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
      title: "Fairefac Backend",
      discription:
        "user interface for the FaiRefac system, designed specifically to manage car repair quotes and related processes efficiently. The project emphasizes a modern, responsive, and intuitive user experience, providing features that empower users to handle repair quotes dynamically.",
      tech_tools: ["#NodeJs", "#JavaScript", "#MongoDB"],
    },
  ];

  return (
    <>
      <div className=" w-[100%] h-fit">
        <h2 className="text-center text-lg md:text-4xl md:mb-3 lg:text-5xl font-extrabold">
          Portfolio
        </h2>
        {projectList.map((project) => {
          return (
            <>
              <div
                key={project.title}
                className="flex flex-col mt-2 self-center shadow-xl/30 rounded-2xl bg-[#4A4A4A] "
              >
                <div className="border-b-2 rounded-t-2xl ">
                  <img
                    className="object-cover rounded-t-2xl w-[100%]"
                    src="https://images.t3n.de/news/wp-content/uploads/2017/10/github-universe-preview.png?class=hero"
                    alt=""
                  />
                </div>
                <div className="p-2 flex flex-col">
                  <h1 className="font-bold md:font-extrabold md:text-2xl">
                    Fairefac Web
                  </h1>
                  <p className="text-xs font-extralight text-justify md:font-light md:text-md">
                    user interface for the FaiRefac system, designed
                    specifically to manage car repair quotes and related
                    processes efficiently. The project emphasizes a modern,
                    responsive, and intuitive user experience, providing
                    features that empower users to handle repair quotes
                    dynamically.
                  </p>
                  <div className="flex flex-row h-fit justify-center space-x-2 mt-3 md:justify-start md:space-x-4">
                    <div className="bg-[#FFA0A0] p-1 rounded-md font-extrabold text-[10px] md:text-[12px] md:p-1.5">
                      <p># ReactJs</p>
                    </div>
                    <div className="bg-[#88D7F6] p-1 rounded-md font-extrabold text-[10px] md:text-[12px] md:p-1.5">
                      <p># JavaScript</p>
                    </div>
                    <div className="bg-[#fff540] p-1 rounded-md font-extrabold text-[10px] md:text-[12px] md:p-1.5">
                      <p># HTML</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
