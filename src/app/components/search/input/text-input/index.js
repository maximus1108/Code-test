import React from 'react';

//include styles
import './text-input.less';

//render text input box
const TextInput = ({
  onChange, //event handler passed down from Search, used to update property on the class containing current input
  onKeyPress //event handler passed down from Search, will fire a fetch to service with current input if return is pressed
}) => (
  <input
    placeholder="Enter text here.."
    type="text"
    onChange={onChange}
    onKeyPress={onKeyPress}
  />
)

export default TextInput;
