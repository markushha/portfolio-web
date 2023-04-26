import Navbar from "@/app/components/Navbar"

const NotFound = () => {
  return (
    <>
    <div className="container">
      <Navbar />
    </div>
    <div className="container">
      <div className="h-[100vh] items-center flex flex-col justify-center m-auto">
        <p className="text-3xl font-[500] text-center mb-4">404 - Not Found</p>
        <p className="text-3xl font-[500] text-center mb-[80px]">
          It looks like you{"'"}re looking for something that do not exist... May be it will one day? Or is this that you were trying to find?d
          </p>
      </div>
    </div>
    </>
  )
}

export default NotFound