import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import UpcomingConcerts from '../Components/UpcomingConcerts'

export default function HomePage() {
    return (
        <div>
            <Navbar band="Arctic Monkeys"/>
            <Hero />
            <UpcomingConcerts />          
        </div>
    )
}

