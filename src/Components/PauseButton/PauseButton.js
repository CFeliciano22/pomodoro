import './PauseButton.scss'
import { BsPauseCircle } from 'react-icons/bs';

function PauseButton() {
  return (
      <button className='pause-button'><BsPauseCircle style={{ width: 60, height: 60 }}/></button>
)};

export default PauseButton;