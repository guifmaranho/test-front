import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BoardsComponent } from './boards/boards.component';
import { BoardsDetailComponent } from './boards-detail/boards-detail.component';
import { BoardsCreateComponent } from './boards-create/boards-create.component';
import { BoardsEditComponent } from './boards-edit/boards-edit.component';


const boardsRoutes: Routes = [
    {
      path: '',
      component: BoardsComponent,
      data: { title: 'Boards List' }
    },
    {
      path: 'boards-details/:id',
      component: BoardsDetailComponent,
      data: { title: 'Boards Details' }
    },
    {
      path: 'boards-create',
      component: BoardsCreateComponent,
      data: { title: 'Create Boards' }
    },
    {
      path: 'boards-edit/:id',
      component: BoardsEditComponent,
      data: { title: 'Edit Boards' }
    }
    // { path: '',
    //   redirectTo: '/boards',
    //   pathMatch: 'full'
    // }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(boardsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class BoardsRoutingModule {
}
