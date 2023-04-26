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
    <div className="socials-head">
          <p className="socials-title">Where you can find me</p>
        </div>
    </div>

    <div className="container">
      <div className="socials-wrapper">
        <div className="socials-body">
          <div className="socials-email">
            <p className="socials-subtitle">Email Me</p>
            <p className="font-[600] mt-2">mark@starfund.app</p>
            <p className="socials-descr mt-2 text-left">Mark Inger<br/>Front-End Developer</p>
            <p className="socials-descr">Almaty, Kazakhstan</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Socials
