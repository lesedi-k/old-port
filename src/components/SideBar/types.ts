import { FunctionComponent } from "react"

type JobInfo = {
  Employer: string[];
  Job: string;
  img: string; 
}

type SideProps = {
  Items: JobInfo[];
  onClick: (name: number) => void;
  selected: number;
}

export type SideComponent = FunctionComponent<SideProps>
