import Navbar from '@/components/navbar/Navbar'
import ArticleContent from './components/ArticleContent'
import OtherArticles from './components/OtherArticles'
import Footer from '@/components/footer/Footer'
import PageMeta from '@/components/PageMeta'

const Index = () => {
  return (
    <>
      <PageMeta title={{ mn: 'Архитектур', en: 'Architecture' }} />
      <Navbar />
      <ArticleContent />
      <OtherArticles />
      <Footer />
    </>
  )
}

export default Index
