import { FunctionComponent } from "react"

export type CardProps = {
  Employer: string[]
  Job: string,
  Description: string,
  img: string,
  link: string,
}

export type CardComponent = FunctionComponent<CardProps>
