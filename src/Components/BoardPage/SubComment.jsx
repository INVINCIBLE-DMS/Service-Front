import { Icon } from "@iconify/react"
import { styled } from "styled-components"
import { theme } from "../../styles/theme"

export const SubComment = ({ title, content }) => {
  return <Component>
    <Icon icon="formkit:reply" rotate="180deg" color={theme.color.strongPink} width="20px" />
    <Data>
      <h1>{title}</h1>
      <h2>{content}</h2>
    </Data>
  </Component>
}

const Component = styled.div`
  gap: 10px;
  display: flex;
  width: 100%;
`

const Data = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: -6px;
  & > h1 {
    font-weight: 300;
    font-size: 20px;
  }
  & > h2 {
    font-size: 15px;
    line-height: 25px;
  }
`