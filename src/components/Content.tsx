import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import logo from '../assets/logo.png'
import './Content.scss'
import { Grid, IconButton } from '@mui/material'
import Fab from '@mui/material/Fab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


const Content = () => (
  <Card className={'content'}>
    <CardContent>
      <Grid
        container
        direction={'column'}
        alignItems={'center'}
      >
        <Grid item>
          <img className={'content--logo'} src={logo} alt={'Wizardzs Logo'}/>
        </Grid>
        <Grid item>
          <Typography variant="body1" component="div" gutterBottom mt={2}>
            Enchanting the world with finest Haunted-House-Indie since 2020
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" component="div" gutterBottom>
            Stay connected with us through social media
          </Typography>
          <Fab aria-label="delete">
            <FontAwesomeIcon icon={brands('facebook-f')}/>
          </Fab>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
)

export default Content