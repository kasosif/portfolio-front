import {Task} from "./task.interface";

export interface Experience {
  id: 2;
  start_date: string;
  end_date?: string;
  current: boolean;
  company_name: string;
  company_country: string;
  title: string;
  description: string;
  draft: boolean;
  tasks: Task[];
}
