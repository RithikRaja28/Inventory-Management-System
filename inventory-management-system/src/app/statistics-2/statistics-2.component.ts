import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-statistics-2',
  templateUrl: './statistics-2.component.html',
  styleUrl: './statistics-2.component.css'
})
export class Statistics2Component implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.RenderChart1();
  }
  RenderChart1() {
    const myChart2 = new Chart("barchart", {
      type: 'pie',
      data: {
        labels: [
          'Mac Book Pro',
          'Apple Vision Pro',
          'Meta Ocules Quest',
          'Samsung S22',
          'Logistics',
          'Iphone 11',
        ],
        datasets: [
          {
            label: '# of products',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
