import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { ChakraProvider, theme } from '@chakra-ui/react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/login/Login'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<App />} />
        </Routes>
      </BrowserRouter>
      
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
