import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AcercaComponent } from './acerca/acerca.component';
import { HistoriaComponent } from './historia/historia.component';
import { NegociosComponent } from './negocios/negocios.component';
import { LugaresComponent } from './lugares/lugares.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { RouterModule, Route} from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';

const rutas:Route[] = [
  {path: 'index', component:IndexComponent},
  {path: 'acerca', component:AcercaComponent},
  {path: 'historia', component:HistoriaComponent},
  {path: 'lugares', component:LugaresComponent},
  {path: 'negocios', component:NegociosComponent},
  {path: 'ubicacion', component:UbicacionComponent},
  {path: '**', redirectTo: 'index', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AcercaComponent,
    HistoriaComponent,
    NegociosComponent,
    LugaresComponent,
    UbicacionComponent,
    IndexComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
