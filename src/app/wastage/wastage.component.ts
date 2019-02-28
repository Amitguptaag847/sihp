import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { WastageService } from '../wastage.service';
import { MaterialsService } from '../materials.service';

@Component({
  selector: 'app-wastage',
  templateUrl: './wastage.component.html',
  styleUrls: ['./wastage.component.css']
})
export class WastageComponent implements OnInit {

  showOutput = false;
  materials = [];
  density: string;

  PieChart = [];

  constructor(private _wastageservice: WastageService, private _materialsService: MaterialsService) { }

  showMaterials() {
    this._materialsService.getMaterials().subscribe(data => this.materials = data);
  }

  selectMaterial(option) {
    if (option.value == "unknown") {
      this.density = "";
    } else {
      this.density = this.materials[option.value].density;
    }
  }

  onExtractFromDxf(event) {
    var fd = new FormData();
    var files = event.target[4].files;

    if (files.length == 0) {
      console.log("No file selected!");
      return;
    }

    fd.append('density', this.density);
    fd.append('dxf_file',files[0]);
    this._wastageservice.extractDxf(fd).subscribe(data => { console.log("Done"); console.log(data); });
  }

  ngOnInit() {
    this.showMaterials();
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ["Used", "Waste"],
        datasets: [{
          label: '# of Votes',
          data: [97, 7],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: false,
        title: {
          text: "Pie Chart",
          display: true
        }
      }
    });
  }

}
