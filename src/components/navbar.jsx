import { memo } from 'react'
import cafe_street_logo from '../img/icons/cafe_street_logo.svg'
import SVGCart from './svgCart'

const Navbar = memo(() => (
	<div className='navbar-container'>
		<div className='navbar-logo cp'>
			<img src={cafe_street_logo} alt='cafe street logo' />
		</div>
		<div className='navbar-items'>
			<span className='navbar-item active'>About us</span>
			<span className='navbar-item'>Our Product</span>
			<span className='navbar-item'>Delivery</span>
		</div>
		<div className='navbar-search'>
			<input placeholder='Cappuccino' />
		</div>
		<SVGCart className='navbar-cart' strokeColor='#000' withBadge />
	</div>
))

export default Navbar
