export default function StackCard() {
  return (
    <div className="h-[100%] text-center text-lg md:text-4xl lg:text-5xl font-extrabold">
      <h2>Tech Stack</h2>
      <div className="bg-[#4A4A4A] w-screen mt-2 md:mt-3 lg:mt-4 h-[70%] md:h-[85%] lg:h-[100%] shadow-xl/30 ">
        <ul className="flex flex-row h-[100%] w-screen md:w-[80%] justify-around p-2 items-center md:justify-self-center ">
          <li>
            <img
              className="h-[100%] md:h-[70px] lg:h-[90px]"
              src="javascript.svg"
              alt=""
            />
          </li>
          <li>
            <img
              className="h-[100%] md:h-[70px] lg:h-[90px]"
              src="html.svg"
              alt=""
            />
          </li>
          <li>
            <img
              className="h-[100%] md:h-[70px] lg:h-[90px]"
              src="css.svg"
              alt=""
            />
          </li>
          <li>
            <img
              className="h-[100%] md:h-[70px] lg:h-[90px]"
              src="react.svg"
              alt=""
            />
          </li>
          <li>
            <img
              className="h-[100%] md:h-[70px] lg:h-[90px]"
              src="python.svg"
              alt=""
            />
          </li>
          <li>
            <img
              className="h-[100%] md:h-[70px] lg:h-[90px]"
              src="django.svg"
              alt=""
            />
          </li>
          <li>
            <img
              className="h-[100%] md:h-[70px] lg:h-[90px]"
              src="mongodb.svg"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
