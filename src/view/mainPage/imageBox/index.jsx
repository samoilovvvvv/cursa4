import React from 'react'

import {
  Box,
  Button,
  Grid,
  Input,
  Typography
} from '@mui/material'

import InfoBox from '../infoBox'

const ImageBox = ({
  fileName = '',
  selectedFile = '',
  data = {},
  uploadClickHandler = () => {}
}) => {
  
  return (
    <Grid
      container
      item
      style={{
        width: '60%',
        padding: 30,
        backgroundColor: '#42a5f5',
        borderRadius: 4
      }}
    >
      <Grid
        item
        style={{
          width: selectedFile ? '70%' : '100%'
        }}
      >
        <Grid
          container
          justifyContent={'space-around'}
          style={{
            padding: 10,
            backgroundColor: '#ffffff',
            borderRadius: 4
          }}
        >
          <Typography
            style={{
              fontSize: 20,
              marginRight: 25
            }}
          >
            {
              fileName ? fileName : 'Please click to upload image'
            }
          </Typography>
          <label htmlFor={'contained-button-file'}>
            <Input
              accept={'images/*'}
              id={'contained-button-file'}
              multiple
              type={'file'}
              style={{
                display: 'none'
              }}
              onChange={uploadClickHandler}
            />
            <Button variant="contained" component="span">
              Upload image
            </Button>
          </label>
        </Grid>
        <Box
          style={{
            width: '100%',
            marginTop: 20,
            padding: 20,
            borderRadius: 4,
            backgroundColor: '#ffffff'
          }}
        >
          {
            selectedFile && (
              <img
                width={'100%'}
                src={selectedFile}
                alt={'Car images'}
              />
            )
          }
        </Box>
      </Grid>
      {
        selectedFile && (
          <Grid
            item
            style={{
              width: '30%'
            }}
          >
            <InfoBox
              {...data}
            />
          </Grid>
        )
      }
    </Grid>
  )
}

export default ImageBox