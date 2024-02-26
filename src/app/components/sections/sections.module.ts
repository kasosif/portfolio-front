import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightboxModule } from 'ngx-lightbox';
import { NgImageSliderModule } from 'ng-image-slider';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorksComponent } from './works/works.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

import { GalleryComponent } from './gallery/gallery.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "../../app.module";
import {HttpClient} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OrderByPipe} from "../../pipes/order-by.pipe";
import {MatDialogModule} from "@angular/material/dialog";
import { ResumesModalComponent } from './about/resumes-modal/resumes-modal.component';
import { RequestSentComponent } from './contact/request-sent/request-sent.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ExperienceComponent,
    WorksComponent,
    BlogComponent,
    ContactComponent,
    PricingComponent,
    TestimonialsComponent,
    GalleryComponent,
    UiModalComponent,
    OrderByPipe,
    ResumesModalComponent,
    RequestSentComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ExperienceComponent,
    WorksComponent,
    BlogComponent,
    ContactComponent,
    PricingComponent,
    TestimonialsComponent,
    NgbModule
  ],
  imports: [
    CommonModule,
    LightboxModule,
    NgImageSliderModule,
    IvyCarouselModule,
    NgbModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      extend: true,
    }),
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class SectionsModule { }
