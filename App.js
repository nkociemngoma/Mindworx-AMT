import './App.css';
import UserProfile from './UserProfile';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<Router>
			<UserProfile/>
		</Router>
	);
}

export default App;