import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainerworkoutpage',
  templateUrl: './trainerworkoutpage.page.html',
  styleUrls: ['./trainerworkoutpage.page.scss'],
})
export class TrainerworkoutpagePage implements OnInit {
  workouts = [
    {
      name: 'Push-ups',
      description: 'A bodyweight exercise targeting the chest and triceps.',
      type: 'Strength Training',
    },
    {
      name: 'Squats',
      description: 'A lower body exercise targeting the legs and glutes.',
      type: 'Strength Training',
    },
    {
      name: 'Running',
      description: 'Cardiovascular exercise for improving endurance.',
      type: 'Cardiovascular Exercise',
    },
    {
      name: 'Stretching',
      description: 'Flexibility and mobility exercises to improve flexibility.',
      type: 'Flexibility and Mobility',
    },
    {
      name: 'Planks',
      description: 'Core exercise to strengthen the abdominal muscles.',
      type: 'Core Work',
    },
   
  ];

  constructor() {}
  ngOnInit(): void {
    
  }
}

