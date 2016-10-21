import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-list',
  template: `
    <div *ngFor="let currentMeal of childMealList">
      <p> {{currentMeal.name}}</p>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
}
