import Navbar from "@/app/components/Navbar"
import Meta from "@/app/utils/Meta"

interface Props {}

function Hire(props: Props) {
  const {} = props

  return (
    <>
    <div className="container">
      <Navbar />
      <Meta title="Hire Me" />
    </div>

    <div className="container"></div>
    </>
  )
}

export default Hire
