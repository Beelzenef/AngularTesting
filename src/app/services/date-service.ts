import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DateService {

  private daysOfTheWeeks = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

  constructor() {}

  getDate() {
    var randomDay = Math.floor(Math.random() * Math.floor(this.daysOfTheWeeks.length - 1));
    return this.daysOfTheWeeks[randomDay];
  }

  getDays() {
      return this.daysOfTheWeeks;
  }
}