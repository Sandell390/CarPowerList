import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { ECarsData } from 'src/app/interfaces/ecars-data';
import { CardataService } from 'src/app/services/cardata.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  ObserverCar: Observable<ECarsData[]> | undefined;

  constructor(private renderer: Renderer2, private el: ElementRef, private cardataService: CardataService) {
    console.log('constructor');
    //const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
    this.ObserverCar = this.cardataService.CarOberserver;
  }
}
