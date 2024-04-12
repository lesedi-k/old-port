import { FunctionComponent } from "react"

type ContactProps = {
  link: string,
  icon: string,
  label: string,
}

export type ContactComponent = FunctionComponent<ContactProps>
