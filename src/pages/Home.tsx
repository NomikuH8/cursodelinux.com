import styled from "@emotion/styled"

import propaganda1 from "../assets/propagandas/propaganda1.png"
import propaganda2 from "../assets/propagandas/propaganda2.png"

const news = [
  {
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-oLPLjT8GMG0%2FWjKrRPTm2CI%2FAAAAAAAADRA%2FevQEjsmF_nMtCJp5xaAKWJqHsjYOxL0bgCLcBGAs%2Fs1600%2FLinux_Mint_logo_without_wordmark.svg.png",
    heading: "Linux Mint 21.1 Vera",
    content:
      "É lançada a nova versão de uma das distribuições mais amadas do mundo Linux.",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/800px-Rust_programming_language_black_logo.svg.png",
    heading: "Linus Torvalds faz inclusão polêmica",
    content:
      "A linguagem Rust foi adicionada ao kernel Linux na versão 6, dividindo opiniões dos internautas.",
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/471735621946314752/imENUbEK_400x400.png",
    heading: "Richard Stallman anuncia FSF 2",
    content:
      "Após ser expulso da sua própria empresa por declarações polêmicas, Stallman decide fundar a segunda edição da Free Software Foundation.",
  },
  {
    image: "https://kamarada.github.io/files/2020/10/pine64-logo.png",
    heading: "Tailor Swift troca de Iphone para Pinephone e choca fãs",
    content:
      '"Eu prefer meu Pinephone pois he is completamente open-source", declara a cantora.',
  },
  {
    image:
      "https://yt3.googleusercontent.com/ytc/AGIKgqOjnzCbs5kiIwXIZTHqrd5i72pFsYOLqCHopfcX=s176-c-k-c0x00ffffff-no-rj-mo",
    heading:
      "Felipe Deschamps choca a internet após falhar uma instalação de Arch Linux",
    content:
      '"Eu acho uma distro tão massinha, mas dessa vez não é para mim, voltarei ao Ubuntu", disse o mestre dos magos brasileiro.',
  },
  {
    image:
      "https://d1fdloi71mui9q.cloudfront.net/yk0LPSvJSmS85KDRxvs4_82911479255841883dbf1df877fce7f5",
    heading:
      "Diolinux fica com medo de perder seu blog após o surgimento de cursodelinux.com",
    content:
      '"Ih rapaz, agora tremi na base com esse site", diz para sua Alexa (estávamos ouvindo também).',
  },
]

export default function Home() {
  return (
    <HomeDiv>
      <NoticiaDiv>
        <h1>Notícias</h1>
        {news.map((val) => (
          <>
            <Card key={val.heading}>
              {val.image && <img src={val.image} alt="imagem da noticia" />}
              <div>
                <h3>{val.heading}</h3>
                <p>{val.content}</p>
              </div>
            </Card>
            <br />
          </>
        ))}
      </NoticiaDiv>
      <PropagandaDiv>
        <h1>Propagandas</h1>

        <img src={propaganda1} alt="" />
        <img src={propaganda2} alt="" />
      </PropagandaDiv>
    </HomeDiv>
  )
}

const HomeDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1%;
`

const NoticiaDiv = styled.div`
  width: 69%;
`

const PropagandaDiv = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  img {
    max-width: 100%;
  }
`

const Card = styled.div`
  box-shadow: 0 3px 10px #cccccc;
  display: flex;
  padding: 1%;
  gap: 2%;
  align-items: center;
  max-width: 1100px;

  img {
    width: auto;
    height: 70px;
  }
`
