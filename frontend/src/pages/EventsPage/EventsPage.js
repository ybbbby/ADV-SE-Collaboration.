import React from 'react'
import { Typography, Container, Box, Grid } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core/styles'
import useRouter from 'use-react-router'
import EventCard from '../../components/EventCard/EventCard'
import LoginModal from '../../components/LoginModal/LoginModal'

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'inline',
    padding: theme.spacing(2),
  },
  pagination: {
    float: 'right',
    padding: '5px 0',
  },
}))

export default function EventsNearby(props) {
  const classes = useStyles()
  const router = useRouter()
  const { category } = router.match.params
  const user = localStorage.getItem('userEmail')
  const eventList = [
    { config: { host: 'mg4115@columbia.edu' } },
    { config: { host: '' } },
    { config: { host: '' } },
    { config: { host: 'mg4115@columbia.edu' } },
    { config: { host: 'mg4115@columbia.edu' } },
    { config: { host: '' } },
    { config: { host: '' } },
    { config: { host: '' } },
    { config: { host: '' } },
    { config: { host: 'test' } },
    { config: { host: '' } },
    { config: { host: '' } },
  ]
  const [page, setPage] = React.useState(1)
  const [loginOpen, setLoginOpen] = React.useState(false)
  const handleChange = (event, value) => {
    setPage(value)
  }

  return (
    <div>
      <Typography variant="h6" component="h5" className={classes.title}>
        Events: {category}
      </Typography>
      <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        className={classes.pagination}
      />
      <Container>
        <Box my={2}>
          <Grid container spacing={3}>
            {eventList.map((x, key) => {
              return (
                <Grid item xs={6} key={key}>
                  <EventCard
                    config={x.config}
                    user={user}
                    openLogin={setLoginOpen}
                  />
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Container>
      <LoginModal handleClose={() => setLoginOpen(false)} open={loginOpen} />
    </div>
  )
}