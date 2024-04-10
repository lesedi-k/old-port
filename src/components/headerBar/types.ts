import { FunctionComponent } from "react"

type HeaderProps = {
  Items: string[];
  onClick: (name: string) => void;
}

export type HeaderComponent = FunctionComponent<HeaderProps>
