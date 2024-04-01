import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  )
}

export default Home
