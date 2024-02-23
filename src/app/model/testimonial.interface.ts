import {Picture} from "./picture.interface";

export interface Testimonial {
  id: number,
  testimony: string;
  testimony_name: string;
  testimony_job_description: string;
  testimony_country: string;
  draft: boolean,
  picture_url: string;
  pictures: Picture[]
}
