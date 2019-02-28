import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialsService } from '../materials.service';
import { IMaterials } from '../materials';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  public materials = [];
  public formError: string;
  public reply: string;
  public newMaterial: IMaterials = {
    id: 0,
    name: "",
    density: null
  };

  constructor(private _materialsService: MaterialsService) { }

  ngOnInit() {
    this.showMaterials();
  }

  showMaterials() {
    this._materialsService.getMaterials().subscribe(data => this.materials = data);
  }

  onClickAddMaterial() {
    if(this.newMaterial.name == "" || this.newMaterial.density == null){
      this.formError = "Please enter Material name And Density";
      return false;
    }
    if(isNaN(this.newMaterial.density)){
      this.formError = "Density must me number";
      return false;
    }
    return this._materialsService.addMaterials(this.newMaterial)
    .subscribe(data => {
      this.materials.length = 0;
      this.newMaterial.name = "";
      this.formError = "";
      this.newMaterial.density = null;
      if(data.message == "repeat"){
        this.formError = "Material name Already Exist";
      }
      this.showMaterials();
    });
  }

  onDeleteMaterial(id: number){
    return this._materialsService.deleteMaterials(id).subscribe(data => { this.showMaterials(); });
  }

}
