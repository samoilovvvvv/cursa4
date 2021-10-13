import React from 'react'
import {Button} from "@mui/material";

const StartButton = ({onClick = () => {}}) => {
  return (
    <Button
      style={{
        width: 200,
        height: 200,
        position: 'absolute',
        left: '44%',
        top: '40vh',
        borderRadius: '100%',
        border: '10px solid #ffffff',
        color: '#ffffff',
        backgroundColor: '#42a5f5'
      }}
      onClick={() => onClick(false)}
    >
      Start
    </Button>
  )
}

export default StartButton