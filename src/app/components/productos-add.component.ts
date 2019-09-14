import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
	selector:'productos-add',
	templateUrl:'../views/productos-add.html',
	providers: [ProductoService]
})

export class ProductosAddComponent{
	public titulo: string;
	public producto: Producto;

	constructor(
		private _productoService:ProductoService,
		private _route:ActivatedRoute,
		private _router:Router
		){
		this.titulo='Crear un nuevo producto';
		this.producto=new Producto(0,'','',0,'');
	}

	ngOnInit(){
		console.log('producto-add se ha cargado bien');
	}

	onSubmit(){
		console.log(this.producto);
		this._productoService.addProducto(this.producto).subscribe(
			response=>{
				if(response.code==200){
					this._router.navigate(['/home']);
				}else{
					console.log('Buena');
				}
			},
			error=>{
				console.log(<any>error);
			}
		);
	}
}