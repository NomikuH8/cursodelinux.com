import styled from "@emotion/styled"
import { Outlet } from "react-router"
import { Link } from "react-router-dom"

export default function MainWrapper() {
  return (
    <>
      <Nav>
        <ul>
          <Link to={"/"}>
            <li>Início</li>
          </Link>
          <Link to={"/videos"}>
            <li>Vídeos</li>
          </Link>
          <Link to={"/artigos"}>
            <li>Artigos</li>
          </Link>
          <Link to={"/sobre"}>
            <li>Sobre nós</li>
          </Link>
        </ul>
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </>
  )
}

const Nav = styled.nav`
  background-color: #252525;
  /* padding: 3vh 1vw; */

  ul {
    padding: 0 1vw;
    margin: 0;
    gap: 1vw;
    list-style-type: none;
    display: flex;

    a {
      font-size: large;
      text-decoration: none;
      color: whitesmoke;
      transition: 200ms;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        height: 70px;
        width: 100px;
      }
    }

    a:hover {
      font-size: 18pt;
      transition: 200ms;
    }
  }
`

const Main = styled.main`
  margin: 1%;
`
