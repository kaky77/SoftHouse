import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './component/header/header.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { ServicesComponent } from './component/services/services.component';
import { ConceptionComponent } from './component/services/conception/conception.component';
import { OffremploiComponent } from './component/services/offremploi/offremploi.component';
import { QuisommesnousComponent } from './component/quisommesnous/quisommesnous.component';
import { SoftHouseComponent } from './component/quisommesnous/soft-house/soft-house.component';
import { RealisationComponent } from './component/quisommesnous/realisation/realisation.component';
import { PartenaireComponent } from './component/quisommesnous/partenaire/partenaire.component';
import { NousjoindreComponent } from './component/nousjoindre/nousjoindre.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule }from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from 'src/service/auth-guard.service';
import { FormationComponent } from './component/services/formation/formation.component';
import { ListconceptionComponent } from './component/services/listconception/listconception.component';
import { AuthService } from 'src/service/auth.service';
import { ListService } from 'src/service/list.service';
import { FormationService } from 'src/service/formation.service';
import { ListformationComponent } from './component/services/listformation/listformation.component';
import { ListEmploisComponent } from './component/services/list-emplois/list-emplois.component';
import { JobService } from 'src/service/job.service';
import { HammerModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

const Approutes:Routes=[
  {path:'Auth/signup',component : SignupComponent},
  {path:'Auth/signin',component:SigninComponent},
  {path:'Services/list',component:ListconceptionComponent},
  {path:'Services/listformation',component:ListformationComponent},
  {path:'Services/listEmplois',component:ListEmploisComponent},
  {path:'Accueil',canActivate: [AuthGuardService],component:AccueilComponent},
  {path:'Services',canActivate: [AuthGuardService],component:ServicesComponent},
  {path:'Quisommesnous',canActivate: [AuthGuardService],component:QuisommesnousComponent},
  {path:'Nousjoindre',canActivate: [AuthGuardService],component:NousjoindreComponent},
  {path:'Services/Conception',canActivate: [AuthGuardService],component:ConceptionComponent},
  {path:'Services/formation',canActivate: [AuthGuardService],component:FormationComponent},
  {path:'Services/Offremploi',canActivate: [AuthGuardService],component:OffremploiComponent},
  {path:'Quisommesnous/Partenaires',canActivate: [AuthGuardService],component:PartenaireComponent},
  {path:'Quisommesnous/Realisation',canActivate: [AuthGuardService],component:RealisationComponent},
  {path:'Quisommesnous/SoftHouse',canActivate: [AuthGuardService],component:SoftHouseComponent},
  { path: ' ', redirectTo: 'Accueil', pathMatch: 'full' },
  { path: '**', redirectTo: 'Accueil' }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    AccueilComponent,
    ServicesComponent,
    ConceptionComponent,
    OffremploiComponent,
    QuisommesnousComponent,
    SoftHouseComponent,
    RealisationComponent,
    PartenaireComponent,
    NousjoindreComponent,
    ListconceptionComponent,
    FormationComponent,
    ListformationComponent,
    ListEmploisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(Approutes),
    MatSliderModule,
    MatSortModule ,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HammerModule,
    CarouselModule
    
  ],
  providers: [ AuthGuardService,
               AuthService,
               ListService,
               JobService,
               FormationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
