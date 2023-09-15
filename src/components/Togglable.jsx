import { useState, forwardRef, useImperativeHandle } from "react";
import PropTypes from 'prop-types';

const Togglable = forwardRef(({ label, children }, ref) => {
  const [visible, setVisible] = useState(false);

  const showWhenVisible = visible ? { display: '' } : { display: 'none' };
  const showWhenHidden = visible ? { display: 'none' } : { display: '' };

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility: () => {setVisible(!visible)},
    }
  })

  return (
    <div>
      <button style={showWhenHidden} onClick={() => {setVisible(!visible)}}>{label}</button>
      <div style={showWhenVisible}>
        {children}
        <button onClick={() => {setVisible(!visible)}}>close</button>
      </div>
    </div>
  )
})

Togglable.propTypes = {
  label: PropTypes.string.isRequired
};

export default Togglable;