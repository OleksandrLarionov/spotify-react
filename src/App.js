import { Container, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar';
import MainPage from './components/MainPage';

function App() {
	return (
		<Container fluid>
			<SideBar />
			<MainPage />
		</Container>
	);
}

export default App;
