import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
        providedIn: 'root',
})

export class NotasService
{
    url="http://localhost/Ejercicio41122/";

    private URLNoticias = 'assets/data/Noticias.json';


    constructor(private http:HttpClient){}
    getAll():Observable<any>{

        return this.http.get(this.URLNoticias);
    }
    getAllBandas(){
        return this.http.get(`${this.url}getall.php`);
        //return this.http.get(this.URLBandas);
    }
    delete(IDBanda:number)
    {
        return this.http.get(`${this.url}delete.php?IDBanda=${IDBanda}`);
    }
    post(Banda:string)
    {
        return this.http.post(`${this.url}post.php`,JSON.stringify(Banda));
    }
    
}

export class BandasService
{
    url="http://localhost/Ejercicio41122/";
    private URLBandas = 'assets/data/Bandas.json';
    
    constructor(private http:HttpClient){}
    getAllBandas(){
        return this.http.get(`${this.url}getall.php`);
        //return this.http.get(this.URLBandas);
    }
}