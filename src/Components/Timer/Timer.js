import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Modal from '../Modal/Modal';
import PlayButton from '../PlayButton/PlayButton';
import PauseButton from '../PauseButton/PauseButton';
import SettingsButton from '../SettingsButton/SettingsButton';
import './Timer.scss';


const red = '#f54e4e';
const green = '#4aec8c';

function Timer() {
  return (
    <main style={{ width: 300, height: 300 }}>
        <h1 className='title'>Pomodoro</h1>
        <CircularProgressbar value={60} text={`${60}%`} styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'round',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: red,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })} />
        {/* <Modal /> */}
        <div className='pp__buttons'>
        <PlayButton />
        <PauseButton/>
        </div>
        <div className='settings__button'>
        <SettingsButton/>
        </div>
    </main>
  );
}


export default Timer;