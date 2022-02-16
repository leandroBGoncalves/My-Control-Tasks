import { AuthProvider } from '../Contexts/AuthContext';
import Header from '../components/Header';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
