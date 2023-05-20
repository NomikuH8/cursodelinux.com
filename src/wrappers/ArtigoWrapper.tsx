import styled from "@emotion/styled"
import { Outlet } from "react-router"

export default function ArtigoWrapper() {
  return (
    <Article>
      <Outlet />
    </Article>
  )
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  align-items: center;
  text-align: justify;

  section {
    max-width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    max-width: 600px;
  }
`
