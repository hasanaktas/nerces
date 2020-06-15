import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core'
import Title from './Title'

const departmants = [
  {
    title: 'Grafik Tasarım',
    url: '/assets/website-design.png',
  },
  {
    title: 'Müşteri Hizmetleri ve Çağrı Merkezi',
    url: '/assets/technical-support.png',
  },
  {
    title: 'Dış Ticaret ve Satın Alma',
    url: '/assets/export.png',
  },
  {
    title: 'Yazılım',
    url: '/assets/provider.png',
  },
  {
    title: 'Projeler',
    url: '/assets/process.png',
  },
  {
    title: 'Sosyal Medya ve Reklamcılık',
    url: '/assets/social-media-marketing.png',
  },
]

const Departmanlarimiz = () => {
  return (
    <section
      id='departmanlarimiz'
      style={{
        paddingTop: 150,
        paddingBottom: 150,
        backgroundColor: '#FAFAFA',
      }}
    >
      <Container>
        <Title title='Departmanlarımız' />
        <Grid container spacing={10}>
          {departmants.map((department) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <div
                  style={{
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      boxShadow: '20px 20px 99px rgba(41, 41, 41, 0.06)',
                      height: 200,
                      width: 200,
                      borderRadius: 30,
                      backgroundColor: '#fff',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src={department.url}
                      style={{ width: '40%', height: 'auto' }}
                    />
                  </div>
                  <Typography
                    align='center'
                    style={{ fontSize: 20, fontWeight: 500, marginTop: 20 }}
                  >
                    {department.title}
                  </Typography>
                </div>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </section>
  )
}

export default Departmanlarimiz
