import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(private listService: ListService) {
    // this.listAnimals();
  }
  animals: Animal[] = [];
  animalDetails = '';

  listAnimals(): void {
    this.listService.getAll().subscribe((animals) => {
      this.animals = animals;
    });
  }

  showAge(animal: Animal) {
    this.animalDetails = `O ${animal.name} possui ${animal.age} anos de idade!`;
  }

  deleteAnimal(animal: Animal) {
    this.animals = this.listService.remove(this.animals, animal);
  }
}
