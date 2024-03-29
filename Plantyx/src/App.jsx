import Header from "./components/header/header"
import Introduction from "./components/main/introduction"
import Steps from "./components/slider/steps"
import Product from "./components/main/product"
import Review from "./components/main/reviews"
import Grids from "./components/main/grid"
import Footer from "./components/footer/footer"
import './styles/index.css'

function App() {
  return (
    <>
     <Header/>
     <Introduction/>
     <Steps/>
     <Product/>
     <Review/>
    <Grids/>
    <Footer/>
    </>
  )
}

export default App
