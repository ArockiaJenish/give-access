import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { HomeComponent } from './home.component';
import { PriceComponent } from './price/price.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    component: HomeComponent, path: "home",
    children: [
      { component: FeatureComponent, path: "features" },
      { component: PriceComponent, path: "price" },
      { component: ViewComponent, path: "view" }
    ]
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
