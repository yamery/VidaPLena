import { Component, Input, OnInit } from '@angular/core';
import { curso } from 'src/app/models/curso';

@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
  styleUrls: ['./listar-curso.component.sass']
})
export class ListarCursoComponent implements OnInit {

  @Input() Curso!:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.Curso)
  }

}
