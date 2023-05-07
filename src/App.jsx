import { Navbar } from './components/navbar'
import { Route } from 'wouter'
import { Create } from './pages/create'
import { Config } from './pages/config'
import { Send } from './pages/send'
import { PhoneContextProvider } from './context/phoneNumbers'

function App () {
  return (
    <>
      <PhoneContextProvider>
        <Navbar />
        <Route path='/' component={Create} />
        <Route path='/configurar' component={Config} />
        <Route path='/enviar' component={Send} />
      </PhoneContextProvider>
    </>
  )
}

export default App
