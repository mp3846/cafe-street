import { memo } from 'react'
import hero_bg from '../img/hero_bg.webp'
import Navbar from './navbar'

const Hero = memo(() => (
	<div className='hero-container'>
		<img className='hero-bg-img' src={hero_bg} alt='coffee sand background' />
		<Navbar />
		<div className='hero-tags ht-product-name'>
			<span>Cappuccino</span>
		</div>
		<div className='hero-tags ht-rating'>
			<span>4.8<span></span></span>
		</div>
		<div className='hero-tags ht-ordered-times'>
			<span>18K</span>
		</div>
	</div>
))

export default Hero
