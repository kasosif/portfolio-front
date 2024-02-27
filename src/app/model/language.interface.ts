import {Picture} from "./picture.interface";

export interface Language {
  id: number,
  code: string;
  name: string;
  picture_url?: string;
  pictures: Picture[]
}
