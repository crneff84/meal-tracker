import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  template:`
    <div class="entryForm">
      <span class="headers"><h2>New Meal</h2></span>
      <div>
        <label>Enter Meal Name:</label>
        <input #newName placeholder="Meal Name">
      </div>
      <div>
        <label>Enter Meal Details:</label>
        <input #newDetails placeholder="Meal Details">
      </div>
      <div>
        <label>Enter Meal Calorie Count:</label>
        <input type="number" #newCalories placeholder="Meal Calorie Count">
        <button class="btn btn-success" (click)="
          addClicked(newName.value, newDetails.value, newCalories.value);
          newName.value='';
          newDetails.value='';
          newCalories.value='';
        ">Add</button>
      </div>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
