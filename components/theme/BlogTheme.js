import Link from "next/link";


// Heading
export const Heading = ({ children }) => {
  const colors = ['teal','green']
  
  return (
    <h1 className='mt-10 text-4xl font-bold text-green-700 '>
      {children}
    </h1>
  );
};

export const H2 = ({ children }) => {
  return (
    <h1 className='text-3xl mt-2 text-teal-800 font-bold '>
       {children} 
    </h1>
  );
};



export function CustomLink({ as, href, ...otherProps }) {
  return (
    <>
      <Link as={as} href={href}>
        <a className="   my-5 text-blue-500" {...otherProps} />
      </Link>
    </>
  );
}
// Note :

export const P = ({ children }) => {
  return <p className="mt-2 text-xl  mb-3 text-slate-400  ">{children}</p>;
};
export const LI = ({ children }) => {
  return (
    <a className="flex gap-3 text-lg text-slate-500 font-semibold my-2 mt-5  ">
      <p>🔹</p>
      {children}
    </a>
  );
};