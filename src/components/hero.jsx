import { memo } from 'react'
import icon_cart from '../img/icons/icons_cart.svg'

const Hero = memo(() => (
	<div className='hero-container'>
		<img src={icon_cart} alt='cart icon' />
	</div>
))

export default Hero
