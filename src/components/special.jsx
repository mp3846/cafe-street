import { memo } from 'react'
import cappuccino from '../img/special_cappuccino.webp'
import Card from './card'
import coffeeIceCream from '../img/special_coffee_ice_cream.webp'
import hotMilk from '../img/special_hot_milk.webp'
import moccaccino from '../img/special_moccaccino.webp'
import sandwich from '../img/special_sandwich.webp'
import waffleIceCream from '../img/special_waffle_ice_cream.webp'

const products = [
	{
		title: 'Sandwich',
		description: 'Bread with meat and vegetables',
		likes: '12 K',
		rating: 4.8,
		img: sandwich,
		alt: 'sandwich'
	},
	{
		title: 'Hot Milk',
		description: 'Hot Milk with less sugar',
		likes: '12 K',
		rating: 4.8,
		img: hotMilk,
		alt: 'hot milk'
	},
	{
		title: 'Coffee Ice Cream',
		description: 'Coffe with ice cream vanilla',
		likes: '12 K',
		rating: 4.8,
		img: coffeeIceCream,
		alt: 'coffee ice cream'
	},
	{
		title: 'Cappuccino',
		description: 'Hot Cappucino',
		likes: '12 K',
		rating: 4.8,
		img: cappuccino,
		alt: 'cappuccino'
	},
	{
		title: 'Moccaccino',
		description: 'Hot Moccacino ',
		likes: '12 K',
		rating: 4.8,
		img: moccaccino,
		alt: 'moccaccino'
	},
	{
		title: 'Waffle Ice Cream',
		description: 'Waffle with Ice cream',
		likes: '12 K',
		rating: 4.8,
		img: waffleIceCream,
		alt: 'waffle ice cream'
	}
]

const Special = memo(() => (
	<div className='special-container'>
		<h2>
			Special menu <span>for you</span>
		</h2>
		<div className='special-cards-wrapper'>
			{products.map((c) => (
				<Card
					key={c.title}
					description={c.description}
					rating={c.rating}
					img={c.img}
					title={c.title}
					likes={c.likes}
				/>
			))}
		</div>
	</div>
))

export default Special
