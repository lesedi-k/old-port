import { FunctionComponent } from "react"

type JobInfo = {
  Employer: string[];
  Job: string;
  img: string; 
}

type SideProps = {
  Items: JobInfo[];
  onClick: (name: string) => void;
  onScroll: (name: string) => void;
}

export type SideComponent = FunctionComponent<SideProps>
