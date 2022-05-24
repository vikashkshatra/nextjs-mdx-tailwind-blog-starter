import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import path from "path";
import { CustomLink, H2, Heading, LI, Note, P, } from "../../components/theme/BlogTheme";
import LayoutOther from "../../components/LayoutOther";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";


// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  h1: Heading,
  h2:H2,

  blockquote:Note,
  li:LI,
  p:P,

  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  //// TestComponent: dynamic(() => import("../../components/TestComponent")),
  Head,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <LayoutOther>
      <header>
        <nav className="">
          {/* nav component */}
        </nav>
      </header>
      <div className="post-header mb-20">
        <h1 className="mb-8 text-4xl font-bold text-blue-800 capitalize ">{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description text-lg  text-slate-600 italic font-semibold">
            {frontMatter.description}
          </p>
        )}
      </div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>
    </LayoutOther>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));


  return {
    paths,
    fallback: false,
  };
};
