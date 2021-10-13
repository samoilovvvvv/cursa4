import React from 'react'

import { Grid, Typography} from '@mui/material'

const InfoBox = ({
  model = '',
  make = '',
  generation = '',
  color = '',
}) => {
  const noData = !model && !make && !generation && !color
  
  return (
    <Grid
      container
      item
      flexDirection={'column'}
      style={{
        marginLeft: 15,
        padding: 16,
        backgroundColor: '#ffffff',
        borderRadius: 4
      }}
    >
      {
        noData
        ? (
            <Typography
              style={{
                alignSelf: 'center'
              }}
            >
              No data
            </Typography>
          )
        : (
            <>
              <Typography
                style={{
                  alignSelf: 'center'
                }}
              >
                Data:
              </Typography>
              <div>Model: {model}</div>
              <div>Make: {make}</div>
              <div>Generation: {generation}</div>
              <div>Color: {color}</div>
            </>
          )
      }
      
    </Grid>
  )
}

export default InfoBox