import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
	selector:'productos-list',
	templateUrl:'../views/productos-list.html',
	providers: [ProductoService]
})

export class ProductosListComponent{
	public titulo:string;
	//public productos:Producto[];

	constructor(
		private _route:ActivatedRoute,
		private _router:Router,
		private _productosService:ProductoService
	){
		this.titulo = 'Listado de Productos';
	}

	ngOnInit(){
		console.log('productos-list.component.ts cargado')
	
		this._productosService.getProductos().subscribe(
				result=>{},
				error=>{}
			);
	}
}