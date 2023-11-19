import { adminRoutes, shopRoutes } from '@packages/shared'
import { Link, Outlet } from 'react-router-dom'
import styles from './App.module.scss'

export const App = () => {
	return (
		<div className={styles.container}>
			<Link to={adminRoutes.about}>
				<button>To Admin page</button>
			</Link>
			<br />
			<Link to={shopRoutes.main}>
				<button>To Shop page</button>
			</Link>
			<Outlet />
		</div>
	)
}
