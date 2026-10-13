import Navbar from '@/components/navbar/Navbar'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import TeamCta from './components/TeamCta'
import Footer from '@/components/footer/Footer'
import PageMeta from '@/components/PageMeta'

const Index = () => {
  return (
    <>
      <PageMeta title={{ mn: 'Холбоо барих', en: 'Contact' }} />
      <Navbar />
      <ContactForm />
      <ContactInfo />
      <TeamCta />
      <Footer />
    </>
  )
}

export default Index
