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
          <Grid item xs={12} sm={6} md={4}>
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
          <Grid item xs={12} sm={6} md={4}>
            <div
              style={{
                display: 'flex',
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography style={{ fontSize: 20, fontWeight: 500 }}>
                Designed by hsnkts.com
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div
              style={{
                display: 'flex',
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography style={{ fontSize: 20, fontWeight: 500 }}>
                +90 312 425 23 32
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Iletisim
