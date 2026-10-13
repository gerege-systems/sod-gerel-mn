import AppProvidersWrapper from './components/wrappers/AppProvidersWrapper'
import LanguageProvider from './i18n/LanguageProvider'
import AppRoutes from './routes'
import '@/assets/css/style.css'

function App() {
  return (
    <LanguageProvider>
      <AppProvidersWrapper>
        <AppRoutes />
      </AppProvidersWrapper>
    </LanguageProvider>
  )
}

export default App
