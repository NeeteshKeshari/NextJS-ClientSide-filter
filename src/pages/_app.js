import '../styles/globals.css'
import Header from '../components/templates/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-light text-body'>
		<Header />
		<Component {...pageProps} />
    </div>
  )
}

export default MyApp
