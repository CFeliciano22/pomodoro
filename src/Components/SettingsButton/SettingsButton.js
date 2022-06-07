import './SettingsButton.scss'
import { FiSettings } from 'react-icons/fi';
import  Modal  from '../Modal/Modal';

function SettingsButton() {
  return (
      <>
      <button><FiSettings/></button>
      <Modal/>
      </>
)};

export default SettingsButton;