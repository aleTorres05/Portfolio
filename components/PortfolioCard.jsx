export default function PortfolioCard() {
  return (
    <>
      <div className="flex flex-col w-[100%] h-[100%] mt-2 self-center shadow-xl/30 rounded-2xl bg-[#4A4A4A] p-2 lg:my-5 ">
        <div className="w-full h-full bg-amber-300">
          <img
            className="object-cover"
            src="https://images.t3n.de/news/wp-content/uploads/2017/10/github-universe-preview.png?class=hero"
            alt=""
          />
        </div>
        <div>
          <h1>Title</h1>
        </div>
      </div>
    </>
  );
}
