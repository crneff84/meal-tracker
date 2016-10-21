import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class = "container">
    <div class = "jumbotron">
      <h1>Meal Tracking System</h1>
    </div>
    <div class = "row">
      <div class="col-md-5">
        <h2>Meals</h2>
        <meal-list
          [childMealList]="masterMealList"
        ></meal-list>
      </div>
      <div class="col-md-2">
      </div>
      <div class="col-md-5">
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Fries", "Crinkle-cut", 500),
    new Meal("Cheeseburger", "With Extra Cheese", 750),
    new Meal("Smoothie", "Only Fruit", 250)
  ];


}
