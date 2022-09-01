import { memo } from 'react'
import Hero from './hero'

const Home = memo(() => (
	<div className='home-container'>
		<Hero />
		
	</div>
))

export default Home
