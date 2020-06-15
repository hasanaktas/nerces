import React from 'react'
import clsx from 'clsx'
import { Hidden, Container, Typography, Grid } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Header from '../src/components/Header'
import SloganIcon from '../src/components/sloganIcon'
import Programming from '../src/components/programming'
import Hakkimizda from '../src/components/hakkimizda'
import Departmanlarimiz from '../src/components/departmanlarimiz'
import Neleryapiyoruz from '../src/components/neleryapiyoruz'
import Iletisim from '../src/components/iletisim'
import Footer from '../src/components/footer'
const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    width: '100vw',
    overflow: 'hidden',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

export default function PersistentDrawerLeft() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>
        <section style={{ backgroundColor: '#0F6CB2' }}>
          <Container>
            <div
              style={{
                backgroundColor: '#fff',
                padding: 40,
                transform: 'translateY(30%)',
                borderRadius: 30,
                boxShadow: '50px 50px 99px rgba(34, 34, 34, 0.06)',
              }}
            >
              <Grid container spacing={10} alignItems='center'>
                <Grid item xs={12} sm={12} md={6}>
                  <Typography variant='h3' style={{ marginBottom: 20 }}>
                    Hayallerinizi Gerçeğe Dönüştürüyoruz
                  </Typography>

                  <Typography style={{ fontSize: 23, fontWeight: 500 }}>
                    Günümüz E-Ticaret Devri. Aramıza katılmak için neden
                    bekliyorsun ?
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Programming style={{ width: '100%', height: 'auto' }} />
                </Grid>
              </Grid>
            </div>
          </Container>
        </section>
        <Hakkimizda />
        <Departmanlarimiz />
        <Neleryapiyoruz />
        <Iletisim />
        <Footer />
      </main>
    </div>
  )
}
