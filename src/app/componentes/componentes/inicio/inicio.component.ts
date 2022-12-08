import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/Service/Notas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  notasList: any []=[];

  constructor( private Bandassvc:NotasService){

  }

  ngOnInit(): void {
    this.muestraNotas();
  }

  muestraNotas()
  {
    this.Bandassvc.getAll().subscribe((result:any)=>{
      this.notasList=result;
    console.log("result")})
  }
  eliminarNota(IDNota:number)
    {
        this.Bandassvc.deleteNota(IDNota).subscribe((datos:any)=>{
          this.muestraNotas();
        })
    }
}
