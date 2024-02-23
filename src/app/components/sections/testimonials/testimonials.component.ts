import {Component, Input, OnInit} from '@angular/core';
import {Testimonial} from "../../../model/testimonial.interface";

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  @Input() themeType: string;
  @Input() testimonials: Testimonial[];

  constructor() { }

  ngOnInit(): void {
  }

}
