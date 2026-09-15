import AppRoute from "./appRoute"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoute/>
      </BrowserRouter>
    </>
  )
}

export default App
