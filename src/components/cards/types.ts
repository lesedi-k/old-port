import { FunctionComponent } from "react"

export type CardProps = {
  Name: string,
  img: string,
  Description: string,
  link: string,
  gitHub: string,
}

export type CardComponent = FunctionComponent<CardProps>
