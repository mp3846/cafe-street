import { memo } from 'react'
import Card from './card'
import vanillaLatte from '../img/vanilla_latte.webp'
import espresso from '../img/espresso.webp'
import hazelnutLatte from '../img/hazelnut_latte.webp'

const products = [
	{ title: 'Vanilla Latte', likes: '21 K', rating: 4.8, img: vanillaLatte, alt: 'vanilla_latte' },
	{ title: 'Espresso', likes: '18 K', rating: 4.8, img: espresso, alt: 'espresso' },
	{
		title: 'Hazelnut Latte',
		likes: '23 K',
		rating: 4.8,
		img: hazelnutLatte,
		alt: 'hazelnut latte'
	}
]

const Popular = memo(() => (
	<div className='popular-container'>
		<h2 className='popular-title'>
			Popular <span>Now</span>
		</h2>
		<div className='popular-wrapper'>
			<div className='popular-cards-wrapper'>
				{products.map((c) => (
					<Card
						key={c.title}
						rating={c.rating}
						img={c.img}
						title={c.title}
						likes={c.likes}
					/>
				))}
			</div>
			<div className='popular-bg'></div>
		</div>
	</div>
))

export default Popular
