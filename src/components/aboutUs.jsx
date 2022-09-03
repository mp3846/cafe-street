import { memo } from 'react'
import about_us from '../img/about_us.webp'

const AboutUs = memo(() => (
	<div className='about-us-container'>
		<div>
			<img className='about-img' src={about_us} alt='about us' />
			<div className='about-content'>
				<h2>
					About <span>us</span>
				</h2>
				<h4>We provided quality coffee, and ready to deliver.</h4>
				<p>
					We are a company that makes and distributes delicious drinks. our main product
					is made with a secret recipe and available in stores worldwide.
				</p>
				<span className='about-cta'>Get your coffee</span>
			</div>
		</div>
	</div>
))

export default AboutUs
