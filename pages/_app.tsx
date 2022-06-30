import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '../components'
import { Provider } from 'react-redux'
import { store } from './../store/store';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Shop Brand</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta charSet='utf-8' />
			</Head>
			<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			</Provider>
		</>
	)
}

export default MyApp
