import { memo } from 'react'
import choose_coffee from '../img/choose_coffee.webp'
import coffee_truck from '../img/coffee-truck.webp'
import coffee_cup from '../img/coffee-cup.webp'

const items = [
	{
		title: 'choose your coffee',
		description: 'there are 20+ coffee for you',
		img: choose_coffee,
		alt: 'choose coffee'
	},
	{
		title: 'we delivery it to you',
		description: 'choose delivery service',
		img: coffee_truck,
		alt: 'coffee delivery service'
	},
	{
		title: 'enjoy your coffee',
		description: 'have a nice day',
		img: coffee_cup,
		alt: 'enjoy coffee'
	}
]

const Delivery = memo(() => (
	<div className='delivery-container'>
		<h2 className='delivery-title'>
			How to use delivery <span>service</span>
		</h2>
		<div className='delivery-items-wrapper'>
			{items.map((item) => (
				<div className='delivery-item'>
					<img src={item.img} alt={item.alt} />
					<span>{item.title}</span>
					<span>{item.description}</span>
				</div>
			))}
		</div>
	</div>
))

export default Delivery
