import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import Title from './Title'
import Shoppingapp from './shoppingapp'
const bedibuyCountries = [
  'Almanya',
  'Fransa',
  'Belçika',
  'Hollanda',
  'İsveç',
  'Lüksemburg',
  'Finlandiya',
  'Büyük Britanya',
  'Norveç',
  'Avusturya',
  'İspanya',
  'Danimarka',
  'İzlanda',
]
const Neleryapiyoruz = () => {
  return (
    <section
      id='neleryapiyoruz'
      style={{
        paddingTop: 150,
        paddingBottom: 150,
        backgroundColor: '#F0F0F0',
      }}
    >
      <Container>
        <Title title='Neler Yapıyoruz' />
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6}>
            <img
              src='/assets/bedibuy_logo.png'
              alt='my image'
              style={{ width: '60%', height: 'auto' }}
            />
            <Typography style={{ fontSize: 19, lineHeight: 2 }}>
              Almanyanın önde gelen e-ticaret firmalarından biridir.
              <br />
              Almaya merkezli şirket diğer avrupa ülkelerine de online parekende
              satış konusunda hizmet vermektedir bunlar:
            </Typography>
            {bedibuyCountries.map((item) => {
              return (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 20,
                  }}
                >
                  <div
                    style={{
                      width: 15,
                      height: 15,
                      borderRadius: 10,
                      backgroundColor: '#29D089',
                      marginRight: 20,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <CheckIcon
                      style={{ width: 10, height: 10, color: '#fff' }}
                    />
                  </div>
                  <Typography
                    key={item}
                    style={{ fontSize: 19, lineHeight: 2 }}
                  >
                    {item}
                  </Typography>
                </div>
              )
            })}
            <Typography style={{ fontSize: 19, lineHeight: 2, marginTop: 20 }}>
              şirketimiz tarafından bu e ticaret sistemin tüm teknik altyapısı,
              ürün girişi, müşteri ilişkileri konularında desteği
              sağlanmaktadır.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src='/assets/icommercetime_logo.png'
              alt='my image'
              style={{ width: '60%', height: 'auto' }}
            />
            <Typography style={{ fontSize: 19, lineHeight: 2, marginTop: 20 }}>
              Müşteriye e-ticaret sistemi sağlama, e-ticaret sisteminin domain
              hosting ve bakım hizmetleri yürütme, ürün giriş ve açıklamalarını
              gerçekleştirme gibi konularda icommercetime, e-ticaret alanındaki
              firmalara hedeflerini gerçekleştirmeleri noktasında gerekli
              desteği sağlar, teknik aksaklıklara çözüm bulur ve rekabet
              güçlerini arttırmayı hedefler.
              <br />
              Şu ana kadar onlarca Avrupa müşterisine e-ticaret sistemi
              hazırlanmış ve teslim edilmiştir. Müşterilerin tüm ihtiyaçları
              gerçekleştirilip hizmetleri yürütülmektedir.
            </Typography>
            <Shoppingapp
              style={{
                width: '90%',
                height: 'auto',
                marginTop: 40,
                padding: 20,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Neleryapiyoruz
