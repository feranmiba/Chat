import { useState } from "react"
import React from 'react'
import { sendMessage, isTyping } from "react-chat-engine"
import { SendOutlined, PictureOutlined } from "@ant-design/icons"
function Message({ ...props }) {


  console.log(props.props.creds)
  const [value, setValue] = useState('')
  // const [chatId, creds] = props;


  const handleSubmit = (e) => {
    e.preventDefault();

    const text = value.trim()

    if (text.length > 0 ) {
      sendMessage(props.props.creds, props.chatId, { text });
    }

    setValue(' ')
  }

  const handleChange  = (e) => {
    setValue(e.target.value)

    isTyping(props, props.chatId)
  }

  const handleUpload = (e) => {
    sendMessage(props.props.creds, props.chatId, { files: e.target.files, text: ''})
  }

  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <input 
      className='message-input'
      placeholder='Send a message...'
      value={value}
      onChange={handleChange}
     />

     <label htmlFor="upload-button">
      <span className="image-button">
        <PictureOutlined className="picture-icon"/>
      </span>
     </label>
     <input 
     type="file"
     multiple={false}
     id="upload-button"
     style={{ display: 'none'}}
     onChange={handleUpload}
     />
     <button type="submit" className="send-button">
      <SendOutlined className="send-icon"/>
     </button>
    </form>
  )
}

export default Message