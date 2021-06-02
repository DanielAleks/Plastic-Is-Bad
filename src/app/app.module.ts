import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/index/header/header.component';
import { IntroComponent } from './components/index/intro/intro.component';
import { InfoSectionComponent } from './components/index/info-section/info-section.component';
import { FactsSectionComponent } from './components/index/facts-section/facts-section.component';
import { FooterComponent } from './components/index/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    HeaderComponent,
    IntroComponent,
    InfoSectionComponent,
    FactsSectionComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
