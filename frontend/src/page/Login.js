import {
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Link,
  Grid,
  Typography,
  Avatar,
  Box,
  Container,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login'

function Login() {
  const navigate = useNavigate()
  return (
    <Container maxWidth={'xs'}>
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1 }}>
          <LoginIcon></LoginIcon>
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <TextField
          margin="normal"
          label="Email Address"
          required
          fullWidth
          name="email"
          autoComplete="email"
        ></TextField>
        <TextField
          margin="normal"
          label="Password"
          required
          fullWidth
          name="password"
          autoComplete="current-password"
        ></TextField>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary"></Checkbox>}
          label="Remember me"
        ></FormControlLabel>
        <Button
          sx={{ mb: 2, mt: 2 }}
          type="submit"
          fullWidth
          variant="contained"
        >
          Sign in
        </Button>
        <Grid container>
          <Grid item xs>
            <Link>Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link onClick={()=>{
                navigate('/signup')
              }}>Sign Up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Login
