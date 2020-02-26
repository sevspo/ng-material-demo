import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TempformComponent } from "./tempform/tempform.component";
import { ReactformComponent } from "./reactform/reactform.component";
import { MattempformComponent } from "./mattempform/mattempform.component";
import { MatreactformComponent } from "./matreactform/matreactform.component";
import { NoformComponent } from "./noform/noform.component";
import { MatInputModule } from "@angular/material/input";

@NgModule({
   declarations: [
      AppComponent,
      TempformComponent,
      ReactformComponent,
      MattempformComponent,
      MatreactformComponent,
      NoformComponent
   ],
   imports: [FormsModule, MatInputModule, BrowserModule, AppRoutingModule, BrowserAnimationsModule],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {}
