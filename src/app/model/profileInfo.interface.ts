import {SocialAccount} from "./socialAccount.interface";

export interface ProfileInfo {
  picture_url: string;
  first_name: string;
  last_name: string;
  job_description: string;
  email: string;
  social_accounts: SocialAccount[];
}
