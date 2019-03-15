import { Component, OnInit } from '@angular/core';
import { ExcelService} from '../../../services/excel.service';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent implements OnInit {

 name = 'Prueba Informe';
  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  },
  {
    eid: 'e102',
    ename: 'ram',
    esal: 2000
  },
  {
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
  }];

  constructor(private excelService: ExcelService) { }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }

  ngOnInit() {
  }

}
