import {Skill} from "./skill.interface";

export interface AboutInfo {
  picture_url?: string;
  description: string;
  allSkills: Skill[];
  skills: Skill[];
}
