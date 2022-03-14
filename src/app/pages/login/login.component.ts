import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$'
        ),
      ],
    ],
  });

  constructor(
    private authService: AuthService,
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router // useNavigate hook benzer
  ) {}

  ngOnInit(): void {}

  // angular rxjs kütüphanesi ile http işlemlerini yapar. Bu kütüphane sayesinde veri işlemlerin manupülasyon, izleme, takip gibi işlemleri yapabiliriz.
  // Http servisler Onservable döndürüyor. Observable tipi takibe alınacak veri demek. bu Observable tipine componentlerden subscribe olarak operasyonlarımızı gerçekleştiriyoruz.

  formSubmit() {
    // modelState isvalid kontrolüne benzer
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      // console.log('data', data);

      // pipe operatör ise rxjs operatörlerini çalıştırmak bir pipeline hat açar.
      this.authService
        .signIn(data?.email, data?.password)
        .subscribe((response: any) => {
          if (!response.success) {
            alert(response?.message);
          } else {
            this.router.navigateByUrl(response.redirect);
          }
        });
    }
  }
}
