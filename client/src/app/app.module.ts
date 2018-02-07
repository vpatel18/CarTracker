import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleService } from './vehicle-service/vehicle.service';
import {HttpModule} from '@angular/http';
import { VehicleDataComponent } from './vehicle-data/vehicle-data.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { SortingPipe } from './pipes/sorting.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { VehicleMapComponent } from './vehicle-map/vehicle-map.component';
import { MappingPipe } from './pipes/mapping.pipe';
import { AgmCoreModule } from '@agm/core';
import { VehicleSignalComponent } from './vehicle-signal/vehicle-signal.component';
import { VehicleAlertComponent } from './vehicle-alert/vehicle-alert.component';
import { AlertPipe } from './pipes/alert.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignalPipe } from './pipes/signal.pipe';
import { ChartsModule } from 'ng2-charts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: 'vehicle-data', component: VehicleDataComponent},
 // {path: '', redirectTo: '/vehicle', pathMatch: 'full'}
  {path: 'vehicle', component: VehicleDetailsComponent},
  {path: 'vehicle-map', component: VehicleMapComponent},
  {path: 'vehicle-signal', component: VehicleSignalComponent},
  {path: 'vehicle-alert', component: VehicleAlertComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    VehicleDetailsComponent,
    VehicleDataComponent,
    FilterPipe,
    SortingPipe,
    VehicleMapComponent,
    MappingPipe,
    VehicleSignalComponent,
    VehicleAlertComponent,
    AlertPipe,
    SignalPipe,


  ],
  imports: [
    BrowserModule,
    OrderModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNKwDRIAKqqf5Mvvi1LnjpuEZbrAEsDbA'
    }),
    NgbModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
   ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
