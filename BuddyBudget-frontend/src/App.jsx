import { RouterProvider } from 'react-router-dom'
import './App.css'
import RouterConfig from './router/Router'

function App() {


  return (
    <RouterProvider router={RouterConfig} />
  )
}

export default App
