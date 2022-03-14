import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, LayoutComponent],
  imports: [
    CommonModule, // default core library
    RouterModule,
  ],
  exports: [LayoutComponent],
})
export class ComponentsModule {}
