import { memo } from 'react'

const Subscribe = memo(() => (
	<div className='subscribe-container'>
		<div>
			<h2>Subscribe to get 50% discount price</h2>
			<div className='subscribe-input-wrapper'>
				<input placeholder='Email address' />
				<span>order now</span>
			</div>
		</div>
	</div>
))

export default Subscribe
