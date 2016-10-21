import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-list',
  template: `
    <div id="filterList">
      <label>View Meals Based On Calorie Count</label>
      <select (change)="onChange($event.target.value)" class="selectpicker">
        <option value="all" selected="selected">Show All Meals</option>
        <option value="lowCalories">Meals Containing Less Than 500 Calories</option>
        <option value="highCalories">Meals Containing 500 Calories Or More</option>
      </select>
    </div>
    <div class="mealEntry" *ngFor="let currentMeal of childMealList | calorie:selectedCalorieCount">
      <meal-display [meal]="currentMeal"></meal-display>
      <button class="btn btn-success" (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public selectedCalorieCount: string = "all";
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
  onChange(optionFromMenu) {
    this.selectedCalorieCount = optionFromMenu;
  }
}
