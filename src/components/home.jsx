import { memo } from 'react'
import AboutUs from './aboutUs'
import Delivery from './delivery'
import Hero from './hero'
import Popular from './popular'
import Special from './special'

const Home = memo(() => (
	<div className='home-container'>
		<Hero />
		<Popular />
		<Delivery />
		<AboutUs />
		<Special />
	</div>
))

export default Home
