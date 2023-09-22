import Home from '../components/index'
import Feature from '../components/feature'
import Prototyping from '../components/prototyping'
import Partners from '../components/partners'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/pricing'
import Contact from '../components/Contact'

const home = () => {
    return(
        <>
         <Home />
         <Feature />
         <Prototyping />
         <Partners />
         <Testimonials />
         <Pricing />
         <Contact />
        </>
    )
}

export default home;