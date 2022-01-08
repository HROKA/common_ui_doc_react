import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './screens'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route
				path='*'
				element={
					<main style={{ padding: '1rem', backgroundColor: 'red' }}>
						<p>There's nothing here!</p>
					</main>
				}
			/>
		</Routes>
	)
}

export default App
