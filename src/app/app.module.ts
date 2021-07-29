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
import { RoutesComponent } from './components/routes/routes.component';
import { PollutionComponent } from './components/routes/pollution/pollution.component';
import { FishComponent } from './components/routes/fish/fish.component';
import { ReefsComponent } from './components/routes/reefs/reefs.component';
import { RouterModule } from '@angular/router';
// import {MatIconModule} from '@angular/material/icon';

const routes = [
  {path: '', component: IndexComponent},
  {path: 'pollution', component: PollutionComponent},
  {path: 'fish', component: FishComponent},
  {path: 'reefs', component: ReefsComponent},
]

@NgModule({
  declarations: [
    // MatIconModule,
    AppComponent,
    IndexComponent,
    NavbarComponent,
    HeaderComponent,
    IntroComponent,
    InfoSectionComponent,
    FactsSectionComponent,
    FooterComponent,
    RoutesComponent,
    PollutionComponent,
    FishComponent,
    ReefsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
