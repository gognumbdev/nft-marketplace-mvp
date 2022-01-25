import Layout from '../components/Layout'
import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from 'next/router';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';

const progress = new ProgressBar({
  size:4,
  color:"#F59E0B",
  className:'z-50',
  delay:100,
});

Router.events.on('routeChangeStart',progress.start);
Router.events.on('routeChangeComplete',progress.finish);
Router.events.on('routeChangeError',progress.finish);


function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
