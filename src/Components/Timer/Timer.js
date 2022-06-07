import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Modal from '../Modal/Modal';
import PlayButton from '../PlayButton/PlayButton';
import PauseButton from '../PauseButton/PauseButton';
import SettingsButton from '../SettingsButton/SettingsButton';
import './Timer.scss';

function Timer() {
  return (
    <main style={{ width: 300, height: 300 }}>
        <h1 className='title'>Pomodoro</h1>
        <CircularProgressbar value={60} text={`${60}%`} />
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