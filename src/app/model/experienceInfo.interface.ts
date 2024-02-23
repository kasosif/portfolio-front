import {Education} from "./education.interface";
import {Experience} from "./experience.interface";

export interface ExperienceInfo {
  educations: Education[],
  experiences: Experience[];
}
