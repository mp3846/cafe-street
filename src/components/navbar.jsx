import { memo } from 'react'
import cafe_street_logo from '../img/icons/cafe_street-logo.svg'
import icon_cart from '../img/icons/icons_cart.svg'

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
		<img className='navbar-cart cp' src={icon_cart} alt='cart icon' />
	</div>
))

export default Navbar
