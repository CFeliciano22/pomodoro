import './App.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function App() {
  return (
    <main className="App" style={{ width: 200, height: 200 }}>
        <CircularProgressbar value={60} text={`${60}%`} />
        
    </main>
  );
}


export default App;
