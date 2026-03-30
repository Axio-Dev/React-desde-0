import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FirstsStepsApp'
import { MyAwesomeApp } from './MyAwesomeApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <FirstStepsApp/> */}
    <MyAwesomeApp/>
  </StrictMode>,
)
