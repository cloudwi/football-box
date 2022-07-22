import './App.css';
import MuiNavbar from './components/MuiNavbar';
import MuiCard from './components/MuiCard';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material/';

function App() {
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <MuiNavbar></MuiNavbar>
        <MuiCard></MuiCard>
      </div>
    </ThemeProvider>
  );
}

export default App;
