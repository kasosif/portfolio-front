export interface Skill {

  id: number;
  type: string;
  name: string;
  percentage: number,
  icon_only: boolean,
  picture_url?: string | null;
}
