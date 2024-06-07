import { FaStar } from 'react-icons/fa';
function Star(props) {
  return (
    <div className={props.className ? 'stars' : 'nothing'} >
      <FaStar/>
    </div>
  )
}

export default Star