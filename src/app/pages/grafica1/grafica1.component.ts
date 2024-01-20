import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  
  public salesLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  public datasetsSales: any =
  [
    { 
    data: [200, 100, 500],
    backgroundColor: ['#6857E6', '#009FEE', '#F02059']
    }
  ]

  public comprasLabels: string[] = [
    'Pan',
    'Refrescos',
    'Tacos',
  ];

  public datasetsCompras: any =
  [
    { 
    data: [300, 400, 400],
    backgroundColor: ['#6857E6', '#009FEE', '#F02059']
    }
  ]

}
