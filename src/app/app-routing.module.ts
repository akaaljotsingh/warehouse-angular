import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
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

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'warehouse',
    component: WarehouseComponent
  },
  {
    path: 'create-warehouse',
    component: CreateWarehouseComponent
  },
  {
    path: 'relationship',
    component: RelationshipComponent
  },
  {
    path: 'create-relationship',
    component: CreateRelationshipComponent
  },
  {
    path: 'inbound',
    component: InboundComponent
  },
  {
    path: 'create-inbound',
    component: CreateInboundComponent
  },
  {
    path: 'outbound',
    component: OutboundComponent
  },
  {
    path: 'create-outbound',
    component: CreateOutboundComponent
  },
  {
    path: 'stock',
    component: StockComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
