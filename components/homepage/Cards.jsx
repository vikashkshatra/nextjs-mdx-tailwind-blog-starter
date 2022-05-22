import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Cards({ data, content,filePath }) {
  console.log(filePath)
  // console.log(data);

  const goTo = (query) => {
    console.log(query);
  };

  return (
    <div className="card-wrapper  ">
      <div className="text-bold bg-transparent rounded-xl text-white p-10 ">
        <Image src={data.image} width={300} height={300} />
        {/* <h1>{data.image}</h1> */}
        <div className="overview cursor-pointer">
          <h1 className="font-bold text-slate-300 text-3xl">{data.title}</h1>
          <p className="text-sm text-slate-400 font-bold ">{data.description}</p>

            <Link key={filePath}
              as={`/posts/${filePath.replace(/\.mdx?$/, "")}`}
              href={`/posts/[slug]`}
            >
              <a className="text-purple-400 underline ">Behind the scene</a>
            </Link>
          
        </div>
      </div>
    </div>
  );
}
