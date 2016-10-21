import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe ({
  name: "total",
  pure: false
})
export class TotalPipe implements PipeTransform {
  transform(input: Meal[]){
    var totalCalories = 0;
    for(var i=0; i < input.length; i++) {
      totalCalories += input[i].calories;
    }
    return totalCalories;
  }
}
