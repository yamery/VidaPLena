import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.sass']
})
export class CrearCursoComponent implements OnInit {
  cursoForm:FormGroup;

  constructor(private fb: FormBuilder, private _cursoService:CursoService, private toastr:ToastrService) { 


    this.cursoForm=this.fb.group({
      nombreCurso:['',Validators.required],
      descripcion:['',Validators.required],
      nombrePresentador:['',Validators.required],
      categoria:['',Validators.required],
      acercaMentor:['',Validators.required]
    })
  }

  categorias: Array<any>=[
    {nombre:"Matematicas",value:"Matematicas"},
    {nombre:"Lenguajes",value:"Lenguajes"},
    {nombre:"Musica",value:"Musica"},
    {nombre:"Ciencias",value:"Ciencias"},
    {nombre:"Literatura",value:"Literatura"},
    {nombre:"Manualidades",value:"Manualidades"},
  ];

  ngOnInit(): void {
  }

  agregarCurso(){
    var newCurso:curso={
      id:"",
      course_name: this.cursoForm.get('nombreCurso')?.value,
      name: this.cursoForm.get('descripcion')?.value,
      categories: this.cursoForm.get('nombrePresentador')?.value,
      description: this.cursoForm.get('categoria')?.value,
      tutor_description: this.cursoForm.get('acercaMentor')?.value,

    }

    this._cursoService.createCurso(newCurso).subscribe(resp=>{
      console.log(resp)
    },error=>{
      console.log(error);
    })
    this.toastr.success("Sec reo con exito el curso"+ newCurso.course_name,"Todo Corecto")
    this.cursoForm.reset();
  }
}
