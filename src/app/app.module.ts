import {BrowserModule}                      from '@angular/platform-browser';
import {NgModule}                           from '@angular/core';
import {AppComponent}                       from './app.component';
import {GeolocationService}                 from './geolocation.service';
import {DataService}                        from './data.service';
import {BrowserAnimationsModule}            from '@angular/platform-browser/animations';
import {MatButtonModule,MatIconModule,
        MatInputModule,MatSelectModule,
        MatSliderModule,MatToolbarModule,
        MatCardModule,MatSlideToggleModule,
        MatSnackBarModule}                  from '@angular/material';
import 'hammerjs';
import {ListComponent}                      from './list/list.component';
import {CoffeeComponent}                    from './coffee/coffee.component';
import {Routes,RouterModule}                from '@angular/router';
import {FormsModule}                        from '@angular/forms';
import {HttpModule}                         from "@angular/http";
import {ServiceWorkerModule}                from '@angular/service-worker'
import {environment}                        from '../environments/environment';



const routes : Routes = [
  {path: '' , component: ListComponent},
  {path: 'coffee' , component: CoffeeComponent},
  {path: 'coffee/:id' , component: CoffeeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CoffeeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatSlideToggleModule
  ],
  providers: [GeolocationService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
