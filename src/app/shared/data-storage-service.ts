import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {
  }

  storeRecipes() {
    return this.http.put('https://recipes-8d2a7.firebaseio.com//recipes.json', this.recipeService.getRecipes());
  };
}



