import React from 'react'

import {Grid, Typography} from "@mui/material";

import { ARCHIVED_IMAGE } from '../../../constants/archivedImages'

const ArchivedImage = ({
  onClick = () => {}
}) => {
  return (
    <Grid
      item
      style={{
        width: '30%',
      }}
    >
      <Grid
        item
        style={{
          padding: 20,
          border: '10px solid #42a5f5'
        }}
      >
        <Typography style={{fontSize: 18, fontWeight: 'bold'}}>You can choose test image</Typography>
        <Grid
          item
          style={{
            padding: 10,
            backgroundColor: '#bfdcff'
          }}
        >
          {
            ARCHIVED_IMAGE.map(item => {
              return (
                <img
                  key={item.src}
                  src={item.src}
                  style={{
                    width: 75,
                    height: 50,
                    margin: 5,
                    cursor: 'pointer'
                  }}
                  alt={'Car image'}
                  data-id={item.id}
                  onClick={onClick}
                />
              )
            })
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ArchivedImage