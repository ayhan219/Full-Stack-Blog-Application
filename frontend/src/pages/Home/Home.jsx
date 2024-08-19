
import "./Home.css"
import Header from "../../components/Header/Header"
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin"
const Home = ({isLogin}) => {
  return (
    <div>
        {!isLogin?<Header /> : <HeaderLogin />}
        
    </div>
  )
}

export default Home