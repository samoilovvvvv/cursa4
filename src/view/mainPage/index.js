import React, { useState, useEffect } from 'react'

import { Grid } from '@mui/material'
import {makeStyles} from '@mui/styles'

import Header from './header'
import ImageBox from './imageBox'
import StartButton from './startButton'
import ArchivedImage from './archivedImage'

import { ARCHIVED_IMAGE } from '../../constants/archivedImages'

const useStyles = makeStyles({

})

const MainPage = () => {
  const classes = useStyles()
  
  const [viewStartButton, setViewStartButton] = useState(true)
  const [fileName, setFileName] = useState('')
  const [selectedFile, setSelectedFile] = useState('')
  
  useEffect(() => {
    const data = ARCHIVED_IMAGE.find(item => item.id === selectedFile)
    
    if (data) setFileName(data.name)
  }, [selectedFile])
  
  const uploadClickHandler = event => {
    const file = event.target.files[0]
    const reader = new FileReader()
    const url = reader.readAsDataURL(file)
    
    reader.onloadend = () => {
      setSelectedFile(reader.result)
    }
    
    setFileName(file.name)
  }
  
  const archivedImageClickHandler = (event) => {
    const image = event.target.dataset.id
    
    setSelectedFile(image)
  }
  
  return (
    <Grid container direction={'column'}>
      <Header viewStartButton={viewStartButton}/>
      {
        viewStartButton && (
          <StartButton onClick={setViewStartButton}/>
        )
      }
      {
        !viewStartButton && (
          <Grid
            container
            justifyContent={'space-around'}
            style={{
              marginTop: 100,
            }}
          >
            <ArchivedImage onClick={archivedImageClickHandler}/>
            <ImageBox
              fileName={fileName}
              uploadClickHandler={uploadClickHandler}
              selectedFile={selectedFile}
            />
          </Grid>
        )
      }
    </Grid>
  )
}

export default MainPage