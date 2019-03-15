import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//Services
import { TrabajadoresService } from '../../../services/trabajadores.service';
import { Trabajador } from '../../../../../../backend/models/trabajadoresModel'
import { MatTableDataSource, MatSort, MatPaginator, } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
//rxjs
import { merge, Observable, of as observableOf, BehaviorSubject, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as Rx from 'rxjs/Rx';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  constructor(private trabajadoresService: TrabajadoresService, private router: Router, private route: ActivatedRoute) {}
  trabajadores: Trabajador[];
  listData: MatTableDataSource<any>;
  displayedColumns = ['rut', 'nombres', 'apellidoPaterno', 'apellidoMaterno', 'empresaLaboralId', 'fechaNacimiento', 'estado'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  dataSource = new TrabajadorDataSource(this.trabajadoresService);

  ngOnInit() {
    this.trabajadoresService.getTrabajador().subscribe(
      list => {
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        let array = list ['listaTrabajadores'].map(item => {
          let trabajadores = this.trabajadoresService.getTrabajador();
          return {   
            _id: item._id,
            rut: item.rut,
            nombres: item.nombres,
            dv: item.dv,
            apellidoPaterno: item.apellidoPaterno,
            apellidoMaterno: item.apellidoMaterno,
            empresaLaboralId: item.empresaLaboralId,
            fechaNacimiento: item.fechaNacimiento,
            estado: item.estado
          };
        });

        console.log('Arreglo trabajadores: ', array);
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(elemento => {
            return elemento != 'actions' && data[elemento].toString().toLowerCase().indexOf(filter) != -1;
          });
        };
      });  
  }

  updateTrabajador(id) 
  {
    this.router.navigate([`/update/${id}`])
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
}

export class TrabajadorDataSource extends DataSource<any> {

  constructor(private trabajadoresService: TrabajadoresService) {
    super()
  }

  connect(): Observable<Trabajador[]> {
    return this.trabajadoresService.getTrabajador();
  }

  disconnect() {
  }
}


