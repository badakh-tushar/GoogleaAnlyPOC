import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: 'home', component:HomeComponent},

    {path: 'st', loadChildren: () => import('./students/student.routes').then((mod)=> mod.StudentRoutes)}
];

