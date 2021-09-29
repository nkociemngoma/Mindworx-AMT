import './App.css';
import FixedApp from './FixedApp';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<Router>
			<FixedApp/>
		</Router>
	);
}

export default App;
