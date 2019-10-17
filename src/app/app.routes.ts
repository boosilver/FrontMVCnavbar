import { Routes } from '@angular/router';
import {PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { CheckpoComponent } from './checkpo/checkpo.component';
import { AcceptComponent } from './accept/accept.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const AppRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'purchaseorder', component: PurchaseOrderComponent},
    { path: 'checkpo', component: CheckpoComponent},
    { path: 'accept', component: AcceptComponent},
    { path: 'dashboard', component: DashboardComponent},

    
];
