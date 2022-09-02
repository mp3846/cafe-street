import { memo } from 'react'
import hero_bg from '../img/hero_bg.webp'
import Navbar from './navbar'
import SVGCart from './svgCart'
import SVGStar from './svgStar'

const Hero = memo(() => (
	<div className='hero-container'>
		<img className='hero-bg-img' src={hero_bg} alt='coffee sand background' />
		<Navbar />
		<div className='hero-wrapper'>
			<div className='hero-content-wrapper'>
				<h1 className='hero-slogan'>
					Enjoy your <span>coffee</span> before your activity
				</h1>
				<p>
					Boost your productivity and build your mood with a glass of coffee in the
					morning
				</p>
				<div className='hero-cta-wrapper'>
					<div className='hero-cta hc-order cp'>
						Order now
						<SVGCart className='hero-cta-cart' width='25' height='25' />
					</div>
					<span className='hero-cta hc-more cp'>More menu</span>
				</div>
			</div>
			<div className='hero-image-wrapper'>
				<div className='hero-tags ht-product-name'>
					<span>Cappuccino</span>
				</div>
				<div className='hero-tags ht-rating'>
					<span>
						4.8
						<SVGStar className='hero-rating-star' />
					</span>
				</div>
				<div className='hero-tags ht-likes'>
					<span>18K</span>
				</div>
			</div>
		</div>
	</div>
))

export default Hero
