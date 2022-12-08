import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/Service/Notas.service';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-agrega-nota',
  templateUrl: './agrega-nota.component.html',
  styleUrls: ['./agrega-nota.component.css']
})
export class AgregaNotaComponent implements OnInit {
  Nota=null;

  NotaForm =  new FormGroup({
    Titulo: new FormControl(''),
    Autor: new FormControl(''),
    Nota: new FormControl(''),
  });
  constructor( private Bandassvc:NotasService){

  }

  ngOnInit(): void {
  }
  AltaNota(): void
  {
    console.log(this.NotaForm.value);
    this.Bandassvc.postNota(this.NotaForm.value).subscribe(()=>{
      this.NotaForm.reset("");
    })

  }
}
