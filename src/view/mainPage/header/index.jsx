import React from 'react'
import {Grid, Typography} from '@mui/material'
import clsx from 'clsx'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
  startHeader: {
    width: '100%',
    height: '50vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42a5f5',
    transition: 'all .5s'
  },
  header: {
    height: 150,
  }
})

const Header = ({viewStartButton = true}) => {
  const classes = useStyles()
  
  return (
    <Grid
      container
      item
      className={clsx(classes.startHeader, {[classes.header]: !viewStartButton})}
    >
      <Typography
        style={{
          color: '#ffffff',
          fontSize: 57,
          textTransform: 'uppercase'
        }}
      >
        Course work
      </Typography>
    </Grid>
  )
}

export default Header