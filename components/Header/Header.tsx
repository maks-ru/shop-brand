import Link from 'next/link'
import React from 'react'

const Header = () => {
	return (
		<header>
			<nav className='flex h-12 items-center px-4 justify-between shadow-md'>
				<Link href='/'>
					<a className='text-lg font-bold'>shop</a>
				</Link>
				<div>
					<Link href='/cart'>
						<a className='p-2'>Cart</a>
					</Link>
					<Link href='/login'>
						<a className='p-2'>login</a>
					</Link>
				</div>
			</nav>
		</header>
	)
}

export default Header
