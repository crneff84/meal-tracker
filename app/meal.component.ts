import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  template: `
  <div>
    <label>{{ meal.name }}</label>
    <p>Meal Details: {{ meal.details }}</p>
    <p>Calorie Count: {{ meal.calories }}</p>
  </div>
  `
})

export class MealComponent {
  @Input() meal: Meal;
}
