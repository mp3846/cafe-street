import { memo } from 'react'
import { Routes, Route } from 'react-router-dom'
import Delivery from './delivery'
import Home from './home'
import OurProduct from './ourProduct'

const AppRoutes = memo(() => (
	<main className='container'>
		<Routes>
			<Route path='/outProduct' element={<OurProduct />} />
			<Route path='/delivery' element={<Delivery />} />
			<Route path='/' element={<Home />} />
		</Routes>
	</main>
))

export default AppRoutes
