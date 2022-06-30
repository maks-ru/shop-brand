import React from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'

export interface LayoutProps {
	children: React.ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main className='container m-auto mt-4 px-4'>{children}</main>
			<Footer/>
		</>
	)
}

export default Layout
