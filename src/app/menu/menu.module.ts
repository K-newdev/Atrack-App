import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';

import { HomeComponent } from '../home/home.component';

import { BookmarksComponent } from '../bookmarks/bookmarks.component';

import { ForumComponent } from '../forum/forum.component';

import { SurveyComponent } from '../survey/survey.component';

import { RequestComponent } from '../request/request.component';

import { InboxComponent } from '../inbox/inbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [
    MenuPage,
    HomeComponent,
    BookmarksComponent,
    ForumComponent,
    SurveyComponent,
    RequestComponent,
    InboxComponent,
  ],
})
export class MenuPageModule {}
