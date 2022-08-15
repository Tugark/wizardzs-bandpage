import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import logo from '../assets/logo.png'
import './Content.scss'
import { Button, Divider, Grid, Link, Stack } from '@mui/material'
import Fab from '@mui/material/Fab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const rsvpLink = 'https://facebook.com/events/s/wizardzs-ch-special-guests-bas/432634055473921/'
const ticketLink = 'https://www.petzi.ch/en/events/49933-werkk-kulturlokal-baden-wizardzs-ch/'
const spotifyLink = 'https://open.spotify.com/artist/0GXuxhSWKEzcuJPuBJoQP1'
const appleLink = 'https://music.apple.com/us/artist/wizardzs/1495497051'
const youtubeLink = 'https://www.youtube.com/channel/UC2XcPIQOEt_0jfilG5NYR8g'
const facebookLink = 'https://fb.me/wizardzsband'
const instagramLink = 'https://www.instagram.com/wizardzsband/'

const Content = () => {
  const year = (new Date()).getFullYear()

  return (
    <Card className={'content'}>
      <CardContent>
        <Grid
          container
          direction={'column'}
          alignItems={'center'}
          textAlign={'center'}
          px={2}
        >
          <Grid item>
            <img className={'content--logo'} src={logo} alt={'Wizardzs Logo'}/>
          </Grid>
          <Grid item mt={2} mb={2}>
            <Typography variant="body1" component="div" gutterBottom>
              Enchanting the world with finest Haunted-House-Indie since 2020
            </Typography>
            <Divider/>
          </Grid>
          <Grid item>
            <Typography variant="body1" component="div" gutterBottom>
              Join us when we present our first EP during a night of haunted vocals and eerie tunes!
            </Typography>
          </Grid>
          <Grid item mb={2}>
            <Stack direction={'row'} spacing={2}>
              <Button href={rsvpLink} target={'_blank'} title={'RSVP'} variant={'contained'}
                      startIcon={<FontAwesomeIcon icon={solid('calendar')}/>}>
                RSVP
              </Button>
              <Button href={ticketLink} target={'_blank'} title={'Tickets'} variant={'contained'}
                      startIcon={<FontAwesomeIcon icon={solid('ticket')}/>}>
                Tickets
              </Button>
            </Stack>
          </Grid>
          <Grid item>
            <Typography variant="body1" component="div" gutterBottom>
              Listen to our current releases
            </Typography>
          </Grid>
          <Grid item mb={2}>
            <Stack direction={'row'} spacing={2}>
              <Fab href={spotifyLink} target={'_blank'} title={'Spotify'} color={'primary'}>
                <FontAwesomeIcon icon={brands('spotify')} size={'2x'}/>
              </Fab>
              <Fab href={youtubeLink} target={'_blank'} title={'Youtube'} color={'primary'}>
                <FontAwesomeIcon icon={brands('youtube')} size={'2x'}/>
              </Fab>
              <Fab href={appleLink} target={'_blank'} title={'Apple Music'} color={'primary'}>
                <FontAwesomeIcon icon={brands('apple')} size={'2x'}/>
              </Fab>
            </Stack>
          </Grid>
          <Grid item>
            <Typography variant="body1" component="div" gutterBottom>
              Stay connected with us through social media
            </Typography>
          </Grid>
          <Grid item mb={2}>
            <Stack direction={'row'} spacing={2}>
              <Fab href={facebookLink} target={'_blank'} title={'Facebook'} sx={{backgroundColor: '#3b5998'}}>
                <FontAwesomeIcon icon={brands('facebook-f')} size={'2x'}/>
              </Fab>
              <Fab href={youtubeLink} target={'_blank'} title={'Youtube'} sx={{backgroundColor: '#b31217'}}>
                <FontAwesomeIcon icon={brands('youtube')} size={'2x'}/>
              </Fab>
              <Fab href={instagramLink} target={'_blank'} title={'Instagram'} sx={{backgroundColor: '#517fa4'}}>
                <FontAwesomeIcon icon={brands('instagram')} size={'2x'}/>
              </Fab>
            </Stack>
          </Grid>
          <Grid item mb={2}>
            <Typography variant="body1" component="div" gutterBottom>
              Booking enquiries: <Link href={'mailto:wizardzsband@gmail.com'}
                                       color={'inherit'}>wizardzsband@gmail.com</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={'caption'} component="div" gutterBottom>
              <FontAwesomeIcon icon={solid('hat-wizard')}/>
              &nbsp;Wizardzs | {year}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Content