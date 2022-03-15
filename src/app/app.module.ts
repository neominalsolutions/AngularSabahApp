import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ProductComponent } from './pages/product/product.component';
import { CommonModule } from '@angular/common';
import { PipeComponent } from './pages/pipe/pipe.component';
import { MyCurrencyPipe } from './pipes/my-currency.pipe';

// declaration ise angular uygulamasında kullanılan yapıların tanımı için kullanılır.
// pipelarda declartions kısmına tanımlanır
@NgModule({
  declarations: [
    // declaration kısmına sadece sayfa componentlerini declare ediyoruz.
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    ProductComponent,
    PipeComponent,
    MyCurrencyPipe, // ana root module tanıttığımız componentler
  ],
  imports: [
    // 3rd parti modüller veya kendi modüllerimiz olabilir.
    BrowserModule, // Browserda uygulamanın çalışması için gerekli bir modül
    AppRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent], // uygulamanın çalıştığı component
})
export class AppModule {} // uygulamanın root modülü
