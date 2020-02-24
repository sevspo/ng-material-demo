import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TempformComponent } from "./tempform/tempform.component";
import { ReactformComponent } from "./reactform/reactform.component";
import { MattempformComponent } from "./mattempform/mattempform.component";
import { MatreactformComponent } from "./matreactform/matreactform.component";
import { NoformComponent } from "./noform/noform.component";

const routes: Routes = [
  {
    path: "template",
    component: TempformComponent
  },
  {
    path: "react",
    component: ReactformComponent
  },
  {
    path: "mattemplate",
    component: MattempformComponent
  },
  {
    path: "matreact",
    component: MatreactformComponent
  },
  {
    path: "noform",
    component: NoformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
