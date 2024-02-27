import {Language} from "./language.interface";

export interface Resume {
  id: number,
  name: string;
  public: boolean;
  public_url: string;
  language: Language;
}
