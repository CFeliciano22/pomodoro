import './App.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Modal from './Components/Modal/Modal';

function App() {
  return (
    <main className="App" style={{ width: 200, height: 200 }}>
        <CircularProgressbar value={60} text={`${60}%`} />
        {/* <Modal /> */}
    </main>
  );
}


export default App;
