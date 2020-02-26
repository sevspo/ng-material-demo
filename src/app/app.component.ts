import { Component, AfterViewInit } from "@angular/core";
import { User } from "./user";

@Component({
   selector: "app-root",
   templateUrl: "./app.component.html",
   styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
   title = "material-demo";
   users: User[];

   ngAfterViewInit() {
      this.linkExternalStyleSheet("assets/custom-material.css");
   }

   linkExternalStyleSheet(externalStyleSheetUrl: string) {
      const overrideStyleSheet: any = document.getElementById("extStyleLink");
      if (overrideStyleSheet) {
         overrideStyleSheet.href = externalStyleSheetUrl;
      } else {
         const link = document.createElement("link");
         link.id = "extStyleLink";
         link.rel = "stylesheet";
         link.type = "text/css";
         link.media = "screen";
         link.href = externalStyleSheetUrl;
         document.getElementsByTagName("head")[0].appendChild(link);
      }
   }
}
