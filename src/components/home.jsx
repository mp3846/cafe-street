import { memo } from 'react'
import Hero from './hero'
import Popular from './popular'

const Home = memo(() => (
	<div className='home-container'>
		<Hero />
		<Popular />
	</div>
))

export default Home
