import React from 'react';
import { FaTimes } from 'react-icons/fa';

function Dialog(props) {

  if (!props.value) return null;
  return (
    <dialog open={props.value}>
      <div className="image-container">
        <img src={ 'https://plus.unsplash.com/premium_photo-1661486971635-b79537d79d97?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=' +
    'M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
      </div>
      <span className="close-icon" onClick={props.onClose}>
          <FaTimes />
        </span>
    </dialog>
  )
}

export default Dialog
