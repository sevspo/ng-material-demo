import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { HttpService } from "../http.service";

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
    aliases: ["sevi", "seve", "sevu"]
  };

  constructor(private http: HttpService) {}

  ngOnInit(): void {}

  onSubmit(f) {
    console.log(f.value);
  }
}
