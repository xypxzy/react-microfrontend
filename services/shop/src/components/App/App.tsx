import { shopRoutes } from '@packages/shared'
import { Link, Outlet } from 'react-router-dom'
import styles from './App.module.scss'

export const App = () => {
	return (
		<div className={styles.container}>
			SHOP MODULE
			<Link to={shopRoutes.main}>Main</Link>
			<Link to={shopRoutes.second}>Shop</Link>
			<Outlet />
		</div>
	)
}
