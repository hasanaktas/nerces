import React from 'react'
import { Container, Typography } from '@material-ui/core'
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
      </Container>
    </section>
  )
}

export default Iletisim
