import './App.css'
import { Routes, Route } from 'react-router-dom'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<App />} />
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
