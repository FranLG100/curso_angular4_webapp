import { Injectable } from '@angular/core';
import { Http, Response, Headers, HttpModule, RequestOptions } from '@angular/http';
//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators/';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';

@Injectable()
export class ProductoService{
	public url:string;

	constructor(
			public _http:Http
	){
		this.url=GLOBAL.url;
	}

	getProductos(){
		return 'Texto de pruebas';
	}
}