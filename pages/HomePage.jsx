
import Cards from "../components/homepage/Cards";


import ToolsCarousel from "../components/homepage/ToolsCarousel";

export default function HomePage({ data }) {
  console.log(data);
  return (
    <div>
      {/* navbar */}

      <nav className="bg-transparent text-2xl lg:text-5xl font-bold rounded-xl px-5 text-white  ">
        {/* <span className="text-slate-500 font-extrabold">L</span><span className="text-slate-600">IPSUM</span>
        <span className="text-slate-500 font-extrabold"> I</span><span className="text-slate-600">OREM</span> */}
        {/* <h1 className="text-slate-400 animate-pulse">vikash kshatra</h1> */}
      </nav>

      {/* MOTO */}

      <div className="moto-container text-8xl font-bold my-60 drop-shadow-sm">
        <nav className="bg-transparent rounded-xl py-20 p-5 text-white drop-shadow-2xl ">
          <span className="text-slate-500 font-extrabold ">S</span><span className="text-slate-600">ome</span>
          <h1 className="text-slate-800 font-extrabold text-7xl">Random</h1>
          <span className="text-slate-500 font-extrabold  ">S</span><span className="text-slate-600">tuff's</span>
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
