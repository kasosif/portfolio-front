import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ScrollSpyService } from '../components/scroll-spy/scroll-spy.service';
import appConfig from '../app_config.json';
import {MainService} from "../services/main.service";
import {ProfileInfo} from "../model/profileInfo.interface";
import {AboutInfo} from "../model/aboutInfo.interface";
import {Skill} from "../model/skill.interface";
import {ExperienceInfo} from "../model/experienceInfo.interface";
import {Project} from "../model/project.interface";
import {Testimonial} from "../model/testimonial.interface";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public currentSection: any;
  public themeConfig: any;
  fullProfile: any;
  profileInfo: ProfileInfo;
  aboutInfo: AboutInfo;
  experienceInfo: ExperienceInfo;
  projects: Project[];
  testimonials: Testimonial[];
  constructor(public scrollSpy: ScrollSpyService, private activatedRoute: ActivatedRoute, private mainService: MainService) {
    this.themeConfig = appConfig.theme_config;

  }

  ngOnInit(): void {
    this.mainService.getProfile().subscribe(res => {
      this.mapResultToModels(res);
    })
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    this.scrollSpy.nextCount(sectionId);
  }

  mapResultToModels(res: any): void {
    this.fullProfile = res.result;
    this.profileInfo = {
      first_name: this.fullProfile.first_name,
      last_name: this.fullProfile.last_name,
      job_description: this.fullProfile.job_description,
      picture_url: this.fullProfile.picture_url,
      email: this.fullProfile.email,
      social_accounts: this.fullProfile.social_accounts
    }
    this.aboutInfo = {
      description: this.fullProfile.about,
      picture_url: this.fullProfile.picture_url,
      allSkills: this.fullProfile.skills,
      skills: this.fullProfile.skills.filter(x => x.icon_only == false)
    }
    this.experienceInfo = {
      experiences: this.fullProfile.experiences,
      educations: this.fullProfile.educations
    }
    this.projects = this.fullProfile.projects;
    this.testimonials = this.fullProfile.testimonies;
  }

}
