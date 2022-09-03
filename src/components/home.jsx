import { memo } from 'react'
import AboutUs from './aboutUs'
import Delivery from './delivery'
import Hero from './hero'
import Popular from './popular'

const Home = memo(() => (
	<div className='home-container'>
		<Hero />
		<Popular />
		<Delivery />
		<AboutUs />
	</div>
))

export default Home
