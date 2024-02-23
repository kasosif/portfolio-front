import {Component, Input, OnInit} from '@angular/core';
import {ProfileInfo} from "../../../model/profileInfo.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MainService} from "../../../services/main.service";
import {ContactRequest} from "../../../model/contactRequest.interface";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() info: ProfileInfo;
  contactForm: FormGroup;
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.initContactForm();
  }

  initContactForm() {
    this.contactForm = new FormGroup(
      {
        fullName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        subject: new FormControl('', Validators.required),
        message: new FormControl('', [Validators.required,Validators.minLength(5)])
      }
    );
  }
  onSubmitContactForm() {
    if (this.contactForm.valid) {
      let contactRequest: ContactRequest = {
        email: this.contactForm.value.email,
        full_name: this.contactForm.value.fullName,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message,
      }
      this.mainService.sendContactRequest(contactRequest).subscribe(res => {
        alert(res.message);
      })
    }
  }

}
