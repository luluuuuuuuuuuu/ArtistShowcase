import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import UpcomingConcerts from '../Components/UpcomingConcerts'
import TourMap from '../Components/TourMap'


export default function HomePage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <UpcomingConcerts /> 
            <TourMap />         
        </div>
    )
}

