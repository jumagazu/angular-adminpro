import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, Color } from 'chart.js';
CanvasGradient 

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title : string = 'Sin Titulo'; 
  @Input('labels') doughnutChartLabels : string[] = ['Company', 'Stores', 'Mall Orders'];
  @Input('datasets') dataSetsDoughnut : any = [
    { data: [350, 450, 100],
      backgroundColor: ['#6857E6', '#009FEE', '#F02059']
    },
  ];

  ngOnInit(): void {

    this.doughnutChartData.datasets = this.dataSetsDoughnut;
    this.doughnutChartData.labels = this.doughnutChartLabels;
    
  }


  // Doughnut
  /*public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];*/

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100],
        backgroundColor: ['#6857E6', '#009FEE', '#F02059']
      },
    ],
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }
}
