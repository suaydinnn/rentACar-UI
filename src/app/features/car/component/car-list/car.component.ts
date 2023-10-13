import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Car } from 'src/app/shared/models/car';
import { CarsAbstractService } from '../../services/abstract/cars-abstract.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  textFilter:string;
 


  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private carAbstractService:CarsAbstractService
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      if (params['id']) {
        this.getCarByBrandId(params['id']);
      } else {
        this.getAllCars();
      }});
  }

  getAllCars() {
    this.carAbstractService.getCarList().subscribe((res) => {
      this.cars = res;
    });
  }

  btnClick() {
    this.router.navigate(['serap']);
  }

  getCarByBrandId(brandId: number) {
    this.carAbstractService.getCarByBrandId(brandId).subscribe((res) => {
      this.cars = res;
    });
  }
}