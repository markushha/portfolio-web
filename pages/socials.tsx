import Navbar from "@/app/components/Navbar"
import Meta from "@/app/utils/Meta"

interface Props {}

function Socials(props: Props) {
  const {} = props

  return (
    <>
    <div className="container">
      <Navbar />
      <Meta title="Socials Me" />
    </div>

    <div className="container">
      <div className="socials-wrapper">
        <div className="developing">
          <h1 className="socials-title">I{"'"}m still developing this page...<br/>Come here later!</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Socials
