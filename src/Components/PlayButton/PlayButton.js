import './PlayButton.scss'
import { BsPlayCircle } from 'react-icons/bs';

function playButton() {
  return (
      <button className='play-button'><BsPlayCircle style={{ width: 60, height: 60, }}/></button>
)};

export default playButton;