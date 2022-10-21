import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
        providedIn: 'root',
})

export class NotasService
{
    private URLNoticias = 'assets/data/Noticias.json';
    private URLBandas = 'assets/data/Bandas.json';


    constructor(private http:HttpClient){}
    getAll(){

        return this.http.get(this.URLNoticias);
    }
    getAllBandas(){

        return this.http.get(this.URLBandas);
    }
}

export class BandasService
{
    private URLBandas = 'assets/data/Bandas.json';
    
    constructor(private http:HttpClient){}
    getAllBandas(){

        return this.http.get(this.URLBandas);
    }
}