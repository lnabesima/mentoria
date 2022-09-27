import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Alert, { AlertStatus } from './components/Alert';

function App() {  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <p>My first webpack React App</p>
          <Alert status={AlertStatus.Critical}/>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
