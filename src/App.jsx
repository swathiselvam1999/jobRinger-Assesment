import CardCarousel from "./components/CardCarousel"
import Download from "./components/Download"
import FeaturedEmployers from "./components/FeaturedEmployers"
import FeaturedJobs from "./components/FeaturedJobs"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import OfferBanner from "./components/OfferBanner"
import Search from "./components/Search"

function App() {
 
  return (
    <div className="font-roboto">
      <Navbar/>
      <OfferBanner/>
      <Search/>
      <FeaturedJobs/>
      <FeaturedEmployers/>
      <Download/>
      <Footer/>
      {/* <CardCarousel/> */}
    </div>
  )
}

export default App
