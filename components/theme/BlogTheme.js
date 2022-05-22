import Link from "next/link";

// Heading
export const Heading = ({ children, ...props }) => {
  console.log(props);
  return (
    <h1 className="text-xl font-bold bg-black rounded-lg  p-3 ">
      {children}
    </h1>
  );
};

