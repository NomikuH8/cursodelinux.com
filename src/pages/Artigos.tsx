import styled from "@emotion/styled"
import { Link } from "react-router-dom"

const artigos = [
  {
    link: "como-instalar-endeavour-os",
    image:
      "https://endeavouros.com/wp-content/uploads/2019/08/EndeavourOS-logo.png",
    heading: "Como instalar EndeavourOS 2023",
  },
  {
    link: "como-instalar-aplicativos-no-arch-linux",
    image:
      "https://archlinux.org/static/logos/archlinux-logo-dark-90dpi.ebdee92a15b3.png",
    heading: "Como instalar aplicativos no Arch Linux com pacman",
  },
  {
    link: "comandos-importantes-linux",
    image:
      "https://cdn.freebiesupply.com/logos/large/2x/linux-tux-1-logo-png-transparent.png",
    heading: "Comandos importantes do Linux",
  },
]

export default function Artigos() {
  return (
    <>
      <h1>Artigos</h1>
      {artigos.map((val) => (
        <>
          <Card key={val.link}>
            <Link to={val.link}>
              {val.image && <img src={val.image} alt="imagem da noticia" />}
              <div>
                <h2>{val.heading}</h2>
              </div>
            </Link>
          </Card>
          <br />
        </>
      ))}
    </>
  )
}

const Card = styled.div`
  box-shadow: 0 3px 10px #cccccc;
  padding: 1%;
  max-width: 1100px;

  a {
    display: flex;
    gap: 2%;
    align-items: center;
    color: #282828;
    text-decoration: none;
    transition: 200ms;
  }

  a:hover {
    color: #000000;
    transition: 200ms;
  }

  a > img {
    width: auto;
    height: 70px;
  }
`
