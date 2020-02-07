import { ChildComponent } from './Child/Child.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
    

    const routes: Routes = [
        {
            path: '',
            component: HomeComponent,
        },
        {
          path: 'child',
          component: ChildComponent,
      },
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }