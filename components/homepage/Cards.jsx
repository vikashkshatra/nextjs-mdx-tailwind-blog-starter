import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Cards({ data, content, filePath }) {
  console.log(filePath);

  const goTo = (query) => {
    console.log(query);
  };
  return (
    <div className="card-wrapper ">
      <div className="text-bold grid lg:grid-cols-3 gap-5 rounded-xl text-black m-5 h-25  bg-gradient-to-tr from-slate-800 ">
        <Image className=" lg:col-span-2 drop-shadow-2xl " src={data.image} width={300} height={300} />
        {/* <h1>{data.image}</h1> */}
        <div className="overview p-3">
          <h1 className=" drop-shadow-2xl font-bold text-slate-400 text-3xl">{data.title}</h1>
          <p className="drop-shadow-lg my-2 text-sm text-teal-500 font-bold ">
            {data.description}
          </p>

          <Link className=" cursor-auto "
            key={filePath}
            as={`/posts/${filePath.replace(/\.mdx?$/, "")}`}
            href={`/posts/[slug]`}
          >
            <a className="text-cyan-500 font-mono text-md font-bold my-5 underline  ">Behind the scene</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
