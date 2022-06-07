import './SettingsButton.scss'
import { FiSettings } from 'react-icons/fi';


function SettingsButton() {
   
  return (
      <>
      <button className='settings-button' ><FiSettings style={{ width: 35, height: 35 }}/></button>
     
      </>
)};

export default SettingsButton;