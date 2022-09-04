import { memo } from 'react'
import person1 from '../img/testimonial_person_1.webp'
import person2 from '../img/testimonial_person_2.webp'
import person3 from '../img/testimonial_person_3.webp'

const persons = [
	{
		name: 'Naura',
		comment: 'I really love the cappuccino, the coffee was very smooth',
		img: person1,
		alt: 'person image'
	},
	{
		name: 'John',
		comment: 'this coffee shop is very convenient',
		img: person2,
		alt: 'person image'
	},
	{
		name: 'Azura',
		comment: 'the coffee menu here is very much',
		img: person3,
		alt: 'person image'
	}
]

const Testimonial = memo(() => (
	<div className='testimonial-container'>
		<div className='testimoinal-bg'></div>
		<div className='testimonial-content'>
			<div className='testimonial-text-wrapper'>
				<h2>What they say about us</h2>
				<p>We always provide the best service and always maintain the quality of coffee</p>
			</div>
			<div className='testimonial-persons-bullets-wrapper'>
				<div className='testimonial-persons-wrapper'>
					{persons.map((p) => (
						<div key={p.name}>
							<img src={p.img} alt={p.alt} />
							<div className='testimonial-comment-wrapper'>
								<div className='testimonial-commentator'>{p.name}</div>
								<p className='testimonial-comment'>{p.comment}</p>
							</div>
						</div>
					))}
				</div>
				<div className='testimonial-bullets'>
					<span className='active'></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	</div>
))

export default Testimonial
