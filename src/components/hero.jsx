import { memo } from 'react'
import hero_bg from '../img/hero_bg.webp'
import Navbar from './navbar'

const Hero = memo(() => (
	<div className='hero-container'>
		<img className='hero-bg-img' src={hero_bg} alt='coffee sand background' />
		<Navbar />
	</div>
))

export default Hero
