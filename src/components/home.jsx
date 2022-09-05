import { memo } from 'react'
import AboutUs from './aboutUs'
import Delivery from './delivery'
import Hero from './hero'
import Popular from './popular'
import Special from './special'
import Subscribe from './subscribe'
import Testimonial from './testimonial'

const Home = memo(() => (
	<div className='home-container'>
		<Hero />
		<Popular />
		<Delivery />
		<AboutUs />
		<Special />
		<Testimonial />
		<Subscribe />
	</div>
))

export default Home
