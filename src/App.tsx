import { BrowserRouter, Route, Routes } from "react-router-dom"

import ArtigoEndeavour from "./pages/artigos/ArtigoEndeavour"
import ArtigoWrapper from "./wrappers/ArtigoWrapper"
import MainWrapper from "./wrappers/MainWrapper"
import Artigos from "./pages/Artigos"
import About from "./pages/About"
import Home from "./pages/Home"
import ArtigoAplicativos from "./pages/artigos/ArtigoAplicativos"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainWrapper />}>
            <Route index element={<Home />} />
            <Route path="artigos" element={<Artigos />} />
            <Route path="sobre" element={<About />} />

            <Route path="artigos" element={<ArtigoWrapper />}>
              <Route
                path="como-instalar-endeavour-os"
                element={<ArtigoEndeavour />}
              />
              <Route
                path="como-instalar-aplicativos-no-arch-linux"
                element={<ArtigoAplicativos />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
