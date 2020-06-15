import React from 'react'
import clsx from 'clsx'
import { Hidden, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NercesLogo from '../components/nercesLogo'
import LinkMat from '../Link'

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
    backgroundColor: theme.palette.primary.main,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    height: 90,
    justifyContent: 'center',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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

export default function Header() {
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
    <>
      <AppBar
        style={{
          height: 90,
          display: 'flex',
          justifyContent: 'center',
          padding: 0,
        }}
        elevation={0}
        position='fixed'
        className={classes.appBar}
      >
        <Container>
          <Toolbar disableGutters variant='dense'>
            <Hidden mdUp>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                style={{ position: 'absolute', left: 20 }}
              >
                <MenuIcon />
              </IconButton>
              <div
                style={{
                  display: 'flex',

                  flexGrow: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <NercesLogo />
              </div>
            </Hidden>

            <Hidden smDown>
              <NercesLogo />
              <div
                style={{
                  flexGrow: 1,
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <LinkMat
                  href='#hakkimizda'
                  style={{ marginRight: 15, fontSize: 18 }}
                >
                  Hakkımızda
                </LinkMat>
                <LinkMat
                  href='#departmanlarimiz'
                  style={{ marginRight: 15, fontSize: 18 }}
                >
                  Departmanlarımız
                </LinkMat>
                <LinkMat
                  href='#neleryapiyoruz'
                  style={{ marginRight: 15, fontSize: 18 }}
                >
                  Neler Yapıyoruz
                </LinkMat>
                <LinkMat
                  href='#iletisim'
                  style={{ fontSize: 18, marginRight: 15 }}
                >
                  İletişim
                </LinkMat>
                <div
                  style={{
                    backgroundColor: '#277BBA',
                    borderRadius: 30,
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  <Typography style={{ fontSize: 20, fontWeight: 500 }}>
                    +90 312 425 23 32
                  </Typography>
                </div>
              </div>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        className={classes.drawer}
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon style={{ color: 'white' }} />
          </IconButton>
        </div>

        <LinkMat
          href='#hakkimizda'
          style={{
            marginLeft: 20,
            marginTop: 20,
            marginBottom: 20,
            fontSize: 20,
            color: 'white',
          }}
        >
          Hakkımızda
        </LinkMat>
        <LinkMat
          href='#departmanlarimiz'
          style={{
            marginLeft: 20,
            fontSize: 20,
            marginBottom: 20,
            color: 'white',
          }}
        >
          Departmanlarımız
        </LinkMat>
        <LinkMat
          href='#neleryapiyoruz'
          style={{
            marginLeft: 20,
            fontSize: 20,
            marginBottom: 20,
            color: 'white',
          }}
        >
          Neler Yapıyoruz
        </LinkMat>
        <LinkMat
          href='#iletisim'
          style={{
            marginLeft: 20,
            fontSize: 20,
            marginBottom: 20,
            color: 'white',
          }}
        >
          İletişim
        </LinkMat>
      </Drawer>
    </>
  )
}
