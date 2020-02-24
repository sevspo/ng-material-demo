import { Component, OnInit } from "@angular/core";

@Component({
   selector: "app-noform",
   templateUrl: "./noform.component.html",
   styleUrls: ["./noform.component.scss"]
})
export class NoformComponent implements OnInit {
   user = {
      name: "severin",
      email: "",
      age: 38,
      friends: [
         { id: 1, name: "Tobi" },
         { id: 2, name: "Fausto" }
      ]
   };

   constructor() {}

   ngOnInit(): void {}

   onLog() {
      console.log(this.user);
   }

   onSubmit() {
      console.log(this.user);
   }
}
