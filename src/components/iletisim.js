import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core'
import Title from './Title'
const Iletisim = () => {
  return (
    <section
      id='iletisim'
      style={{
        paddingTop: 150,
        paddingBottom: 150,
        backgroundColor: '#FAFAFA',
      }}
    >
      <Container>
        <Title title='İletişim' />
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <div
              style={{
                display: 'flex',
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                align='center'
                style={{ fontSize: 24, fontWeight: 700 }}
              >
                Telefon: +90 312 425 23 32
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div
              style={{
                display: 'flex',
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                align='center'
                style={{ fontSize: 24, fontWeight: 700 }}
              >
                E-Posta: info@nercesdisticaret.com
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div
              style={{
                display: 'flex',
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                align='center'
                style={{ fontSize: 24, fontWeight: 700 }}
              >
                Adres : Mustafa Kemal Mahallesi, No:274 Mahall Ankara, F Blok
                No:3
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Iletisim
