import { BrowserRouter, Route, Routes } from "react-router-dom"

import MainWrapper from "./wrappers/MainWrapper"
import Artigos from "./pages/Artigos"
import Videos from "./pages/Videos"
import About from "./pages/About"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainWrapper />}>
            <Route index element={<Home />} />
            <Route path="videos" element={<Videos />} />
            <Route path="artigos" element={<Artigos />} />
            <Route path="sobre" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App