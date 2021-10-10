import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { curso } from 'src/app/models/curso';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  cursos:curso[]=[];
  constructor(private _CursoServices: CursoService) { }

  ngOnInit(): void {
    this._CursoServices.getCurso().subscribe(resp=>{
      this.cursos=resp.items;      
    },error=>{
      console.log(error)
    })
    
  }


}
