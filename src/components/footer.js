import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core'
import NercesLogo from './nercesLogo2'
const Iletisim = () => {
  return (
    <footer
      id='footer'
      style={{
        paddingTop: 70,
        paddingBottom: 70,
        backgroundColor: '#F0F0F0',
      }}
    >
      <Container>
        <Grid container spacing={5} alignItems='center'>
          <Grid item xs={12}>
            <div
              style={{
                display: 'flex',
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <NercesLogo />
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Iletisim
