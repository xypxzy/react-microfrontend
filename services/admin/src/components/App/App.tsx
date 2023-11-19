import { Outlet } from 'react-router-dom'
import styles from './App.module.scss'

export const App = () => {
	return (
		<div className={styles.container}>
			ADMIN MODULE
			<Outlet />
		</div>
	)
}
