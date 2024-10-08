import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {ContentListComponent} from "./app/content-list/content-list.component";
import {ContentListItemComponent} from "./app/content-list-item/content-list-item.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";


const routes: Routes =[{path:'', redirectTo: '/cars', pathMatch: 'full'}, //default route
  { path: 'cars', component: ContentListComponent },
  { path: 'students/:id', component: ContentListItemComponent },
  {path:'modify-car', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}];

bootstrapApplication(AppComponent,{
  providers: [provideRouter(routes)]
})
  .catch((err) => console.error(err));
