import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrl: './mychart.component.css',
})
export class MychartComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.RenderChart();
  }
  RenderChart() {
    const myChart = new Chart('piechart', {
      type: 'line',
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
    const myChart1 = new Chart('barchart', {
      type: 'bar',
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
            data: [550, 167, 250, 600, 50, 75],
            backgroundColor: [
              'rgba( 5,  99, 132, 0.2)',
              'rgba(5, 162, 235, 0.2)',
              'rgba( 5,206, 86, 0.2)',
              'rgba( 5,192, 192, 0.2)',
              'rgba(5, 102, 255, 0.2)',
              'rgba(5, 159, 64, 0.2)',
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
