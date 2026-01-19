import MainLogo from "./MainLogo"
import NavBar from "./NavBar"

const MainHeader = () => {

  return (
    <header>
        <div className="container flex">
            <MainLogo />
            <NavBar />
        </div>
    </header>
  )
}

export default MainHeader