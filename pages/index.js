import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import HomePage from "./HomePage";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {background} from "../tsfiles/background";

export default function Index({ posts }) {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  // console.log(posts);
  return (
    <>
    <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
	    	  options={background}
	  />
      <HomePage data= {posts}/>
    </>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
