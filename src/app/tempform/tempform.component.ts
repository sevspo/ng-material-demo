import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { HttpService } from "../http.service";
import { findReadVarNames } from "@angular/compiler/src/output/output_ast";

@Component({
   selector: "app-tempform",
   templateUrl: "./tempform.component.html",
   styleUrls: ["./tempform.component.scss"]
})
export class TempformComponent implements OnInit {
   //user: User;
   user = {
      name: "severin",
      age: 38,
      friends: [
         { id: 1, name: "Tobi" },
         { id: 2, name: "Eli" },
         { id: 3, name: "Hans" }
      ]
   };

   constructor() {}

   ngOnInit(): void {}

   onNewField() {
      let l = this.user.friends.length;
      this.user.friends.push({ id: l, name: "" });
   }

   onSubmit(f) {
      console.log(f.value);
      let friendsArr = Object.keys(f.value.friends).map(i => {
         return { id: i, name: f.value.friends[i] };
      });
      f.value.friends = friendsArr;
      console.log(f.value);
   }

   onLog() {
      console.log(this.user);
   }
}
