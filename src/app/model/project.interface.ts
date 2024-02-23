import {Task} from "./task.interface";
import {Picture} from "./picture.interface";

export interface Project {
  id: number;
  date: string;
  description: string;
  title: string;
  link: string;
  draft: boolean;
  picture_url?: string;
  tasks: Task[];
  pictures: Picture[]
}
