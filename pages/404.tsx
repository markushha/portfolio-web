import Meta from "@/app/utils/Meta";

import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Meta title="Not Found :(" />
      <div className="container">
        <div className="h-[100vh] items-center flex flex-col justify-center m-auto w-[60%]">
          <p className="text-3xl font-[500] text-center mb-4">
            404 - Not Found
          </p>
          <p className="text-3xl font-[500] text-center">
            It looks like you{"'"}re looking for something that do not exist...
            May be it will one day? Or is this that you were trying to find?
          </p>
          <Link href="/">
            <button className="flex items-center justify-center mt-4 w-36 h-10 bg-[#1e1e1e] hover:bg-[#8e8e8e] transition-all rounded-xl text-white font-semibold">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
