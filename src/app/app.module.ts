import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { CreateWarehouseComponent } from './components/warehouse/create-warehouse.component';
import { RelationshipComponent } from './components/relationship/relationship.component';
import { CreateRelationshipComponent } from './components/relationship/create-relationship.component';
import { InboundComponent } from './components/inventory/inbound.component';
import { CreateInboundComponent } from './components/inventory/create-inbound.component';
import { OutboundComponent } from './components/inventory/outbound.component';
import { CreateOutboundComponent } from './components/inventory/create-outbound.component';
import { StockComponent } from './components/inventory/stock.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ReportsComponent } from './components/reports/reports.component';
import { WarehouseAdmin } from './components/nav/warehouse-admin.component';
import { WarehouseOpt } from './components/nav/warehouse-opt.component';
import { CustomerAdmin } from './components/nav/customer-admin.component';
import { CustomerOpt } from './components/nav/customer-opt.component';


import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  
} from '@angular/material';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavComponent,
    WarehouseComponent,
    CreateWarehouseComponent,
    RelationshipComponent,
    CreateRelationshipComponent,
    InboundComponent,
    CreateInboundComponent,
    OutboundComponent,
    CreateOutboundComponent,
    StockComponent,
    SettingsComponent,
    ReportsComponent,
    WarehouseAdmin,
    WarehouseOpt,
    CustomerAdmin,
    CustomerOpt

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // FontAwesomeModule,
    BrowserAnimationsModule,

    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
