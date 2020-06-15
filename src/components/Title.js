import React from 'react'
import { Typography } from '@material-ui/core'

const Title = (props) => {
  const { title } = props
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60,
      }}
    >
      <div style={{ position: 'absolute' }}>
        <Typography variant='h1' style={{ opacity: 0.05 }}>
          {title}
        </Typography>
      </div>
      <div>
        <Typography variant='h5'>{title}</Typography>
      </div>
    </div>
  )
}

export default Title
