
import Cards from "../components/homepage/Cards";


import ToolsCarousel from "../components/homepage/ToolsCarousel";

export default function HomePage({ data }) {
  console.log(data);
  return (
    <div>
      {/* navbar */}

      <nav className="bg-transparent text-4xl lg:text-5xl rounded-xl p-5 text-white drop-shadow-2xl ">
        <span className="text-rose-500 font-extrabold">l</span>OREM
        <span className="text-rose-500 font-extrabold"> I</span>PSUM
      </nav>

      {/* MOTO */}

      <div className="moto-container text-8xl font-bold my-5">
        <nav className="bg-transparent rounded-xl py-20 p-5 text-white drop-shadow-2xl ">
          <span className="text-rose-500 font-extrabold ">L</span>et's
          <h1 className="text-rose-500 font-extrabold ">build</h1>
          <span className="text-rose-500 font-extrabold  ">S</span>tuffs
        </nav>
      </div>
      {/* TOOLS */}
      <ToolsCarousel/>

      {/* CARDS */}
      <div className="card-container grid">
        {data.map(({ data, content, filePath }) => (
          <Cards data={data} content={content} filePath={filePath} />
        ))}
      </div>
    </div>
  );
}
