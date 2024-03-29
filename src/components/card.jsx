import { memo } from 'react'
import SVGCart from './svgCart'
import SVGStar from './svgStar'

const Card = memo(({ title, description, likes, rating, img, alt = 'image' }) => (
	<div className='card-container'>
		<div className='card-image-wrapper'>
			<span className='card-image-rating'>
				{rating}
				<SVGStar className='card-rating-star' />
			</span>
			<img src={img} alt={alt} />
		</div>
		<div className='card-title-wrapper'>
			<span>{title}</span>
			<span>{likes}</span>
		</div>
		<div className='card-cta-wrapper'>
			{description && <span className='card-description'>{description}</span>}
			{!description && (
				<div>
					<span className='card-cta cp active'>Hot</span>
					<span className='card-cta cp disabled'>Cold</span>
				</div>
			)}
			<SVGCart className='card-cart cp' />
		</div>
	</div>
))

export default Card
