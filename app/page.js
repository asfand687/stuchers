import FAQ from '@/components/FAQ'
import FacesOfStuchers from '@/components/FacesOfStuchers'
import Footer from '@/components/Footer'
import FormSection from '@/components/FormSection'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import { GlobalProvider } from '@/context/GlobalState'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <GlobalProvider>
        <Navbar/>
        <Hero/>
        <FormSection/>
        <FacesOfStuchers/>
        <FAQ/>
        <Footer/>
      </GlobalProvider>
    </main>
  )
}
