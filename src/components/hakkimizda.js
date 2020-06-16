import React from 'react'
import { Container, Typography } from '@material-ui/core'
import Title from './Title'
const Hakkimizda = () => {
  return (
    <section
      id='hakkimizda'
      style={{
        paddingTop: 200,
        paddingBottom: 150,
        backgroundColor: '#F0F0F0',
      }}
    >
      <Container>
        <Title title='Hakkımızda' />
        <Typography style={{ fontSize: 19, lineHeight: 2 }}>
          Şirketimiz başta Almanya olmak üzere birçok avrupa ülkesinde ticari
          girişimlerde bulunan bir firmadır. Nerces özellikle e-ticaret
          sistemlerinin yapımı, yönetimi, idaresi ve geliştirilmesi konusunda
          yabancı firmalara destek olmaktadır. 313 holding bünyesindeki
          bedibuy.com ve icommercetime.com sitelerinin tüm teknik hizmetlerini
          sağlamaktadır. Temel hedefi müşteri memnuniyeti olan firmamız;
          kaliteli işler yapan, insani değerlere saygılı ve yüksek performansla
          çalışan bir şirkettir. Vizyonumuz her geçen gün kendini geliştiren,
          analizleri etkili yapabilen, çalışanlarına ve müşterilerine gerekli
          destekleri sağlayarak önde gelmiş e-ticaret firmaları arasında ilk
          sıralarda yer almaktır.
        </Typography>
      </Container>
    </section>
  )
}

export default Hakkimizda
