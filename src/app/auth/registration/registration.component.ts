import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PartnerRegistration } from '../../models/partner-registration';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationModel = new PartnerRegistration();
  partnerImage: File = null;

  partnerTypes: any[];
  errorMessage = null;
  @ViewChild('regForm') regForm: ElementRef;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toaster: ToastrService
    ) { }

  ngOnInit(): void {
    this.authService.getPartnerTypes().subscribe(resp => {
      this.partnerTypes = resp;
    });
  }

  submit() {
    this.regForm.nativeElement.scrollTop = 0;

    this.authService.registrate(this.registrationModel, this.partnerImage).subscribe(resp => {
      if (resp.status === false) {
        this.errorMessage = resp.message;
        return;
      }

      this.toaster.success('You have registered your account successfully.');
      this.router.navigate(['/auth/login']);

    });
  }

  partnerImageInputChanged(event) {
    this.partnerImage = event.target.files[0];
  }

}
