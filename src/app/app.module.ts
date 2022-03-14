import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// declaration ise angular uygulamasında kullanılan yapıların tanımı için kullanılır.
@NgModule({
  declarations: [
    // declaration kısmına sadece sayfa componentlerini declare ediyoruz.
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent, // ana root module tanıttığımız componentler
  ],
  imports: [
    // 3rd parti modüller veya kendi modüllerimiz olabilir.
    BrowserModule, // Browserda uygulamanın çalışması için gerekli bir modül
    AppRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent], // uygulamanın çalıştığı component
})
export class AppModule {} // uygulamanın root modülü
