import { App } from '@/components/App/App'
import { LazyShop } from '@/pages'
import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const routes = [
	{
		path: '/shop',
		element: <App />,
		children: [
			{
				path: '/shop/main',
				element: (
					<Suspense fallback={'Is loading'}>
						<LazyShop />
					</Suspense>
				),
			},
			{
				path: '/shop/second',
				element: (
					<Suspense fallback={'Is loading'}>
						<div>Dastan</div>
					</Suspense>
				),
			},
		],
	},
]

export const router = createBrowserRouter(routes)
export default routes
