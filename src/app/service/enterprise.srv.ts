import { HttpClient } from '@angular/common/http';
import { JAVEATS } from './config';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class EnterpriseService {
    constructor(private http: HttpClient){
    }
}
