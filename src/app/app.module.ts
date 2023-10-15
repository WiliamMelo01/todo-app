import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CreateInputComponent } from './create-input/create-input.component';

import { NgIconsModule } from '@ng-icons/core';
import { heroPlusSolid, heroTrashSolid } from '@ng-icons/heroicons/solid';
import { TasksItemComponent } from './tasks-item/tasks-item.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateInputComponent,
    TasksListComponent,
    TasksItemComponent
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ heroPlusSolid, heroTrashSolid }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
