import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class acopanha
{

    constructor(private httpcliente: HttpClient) {}

    getMatchs(): Observable<any>{
        return this.httpcliente.get('https://acompanha-restapi.rj.r.appspot.com/grupos/buscarGrupos')
    }


}