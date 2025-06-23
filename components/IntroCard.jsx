export default function IntroCard() {
  return (
    <>
      <div className="flex flex-row w-[100%] h-[100%] mt-2 self-center shadow-xl/30 rounded-2xl bg-[#4A4A4A] p-2 lg:my-5 ">
        <div className="flex flex-col w-[50%] p-2 h-[100%] justify-center">
          <img
            className="h-[90%] w-[100%] rounded-3xl shadow-xl/40"
            src="ProfilePic.png"
            alt=""
          />
        </div>
        <div className="flex flex-col w-[50%] h- space-y-2 justify-center  lg:ms-5">
          <h4 className="font-extralight text-xs md:text-lg lg:text-2xl">
            A Full Stack Developer:
          </h4>
          <h1 className="font-extrabold text-xs md:text-lg lg:text-2xl">
            Alejandro Torres Sanchez{" "}
          </h1>
          <h4 className="font-extralight text-xs md:text-lg lg:text-2xl">
            I am a Full Stack Developer based of Mexico City
          </h4>
        </div>
      </div>
    </>
  );
}
