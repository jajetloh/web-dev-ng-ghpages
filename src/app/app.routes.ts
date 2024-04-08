import { Routes } from '@angular/router'
import { HomeComponent } from "./home/home.component"
import { TutorialComponent } from "./tutorial/tutorial.component"

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'tutorial',
    component: TutorialComponent,
  }
]
