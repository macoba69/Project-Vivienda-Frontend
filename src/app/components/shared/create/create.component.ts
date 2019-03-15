import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { TrabajadoresService } from '../../../services/trabajadores.service';
import { Trabajadores } from '../../interface/trabajadores';
import { RegionService } from '../../../services/region.service';
import { Region } from '../../interface/region';
import { ComunaService } from '../../../services/comuna.service';
import { Comuna } from '../../interface/comuna';
import { EmpresaConvenioService } from '../../../services/empresa-convenio.service';
import { EmpresaConvenio } from '../../interface/empresaConvenio';
import { EmpresaLaboralService } from '../../../services/empresa-laboral.service';
import { EmpresaLaboral } from '../../interface/empresaLaboral';
import { DatosDiagnostico } from '../../interface/datosDiagnostico';
import { DatosDiagnosticoService } from '../../../services/datos-diagnostico.service';
import { DatosAhorro } from '../../interface/datosAhorro';
import { DatosAhorroService } from '../../../services/datos-ahorro.service';
import { Usuario } from '../../interface/usuario';
import { UsuarioService } from '../../../services/usuario.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CreateComponent implements OnInit {

   
  estados = [
    { key: 1, value: 'Activo' },
    { key: 2, value: 'Reemplazado' },
    { key: 3, value: 'Anulado' }
  ];

  estadosBono = [
    { key: 1, value: 'Pendiente' },
    { key: 2, value: 'Iniciada'  },
    { key: 3, value: 'Terminada' },
    { key: 4, value: 'No Aplica' }
  ];

  estadosAhorro = [
    { key: 1, value: 'Pendiente' },
    { key: 2, value: 'Iniciada'  },
    { key: 3, value: 'Terminada' },
    { key: 4, value: 'No Aplica' }
  ];
  
  estadosPostulacion = [
    { key: 1, value: 'Pendiente' },
    { key: 2, value: 'Iniciada'  },
    { key: 3, value: 'Terminada' },
    { key: 4, value: 'No Aplica' }
  ];

  estadosSubsidio = [
    { key: 1, value: 'Pendiente' },
    { key: 2, value: 'Iniciada'  },
    { key: 3, value: 'Terminada' },
    { key: 4, value: 'No Aplica' }
  ];

  estadosVivienda = [
    { key: 1, value: 'Pendiente' },
    { key: 2, value: 'Iniciada'  },
    { key: 3, value: 'Terminada' },
    { key: 4, value: 'No Aplica' }
  ];

  estadosCredito = [
    { key: 1, value: 'Pendiente' },
    { key: 2, value: 'Iniciada'  },
    { key: 3, value: 'Terminada' },
    { key: 4, value: 'No Aplica' }
  ];

  estadosEscrituracion = [
    { key: 1, value: 'Pendiente' },
    { key: 2, value: 'Iniciada'  },
    { key: 3, value: 'Terminada' },
    { key: 4, value: 'No Aplica' }
  ];

  estadosPropietario = [
    { key: 1, value: 'Pendiente' },
    { key: 2, value: 'Iniciada'  },
    { key: 3, value: 'Terminada' },
    { key: 4, value: 'No Aplica' }
  ];

  parentescos = [
    { key: 1, value: 'Conyuge' },
    { key: 2, value: 'Hijo' },
  ]

  anexos = [
    {key: 0, value: '1'},
    {key: 1, value: '2'},
    {key: 2, value: '3'}
  ];

  rsh = [
    {key: 0, value: 'En Proceso'},
    {key: 1, value: 'Hasta 40%'},
    {key: 2, value: '41% a 50%'},
    {key: 3, value: '51% a 60%'},
    {key: 4, value: '61% a 70%'},
    {key: 5, value: '71% a 80%'},
    {key: 6, value: '81% a 90%'},
    {key: 7, value: '91% a 100%'}
  ];
  
  subsidioActual = [
    {key: 0,  value: 'Sin Subsidio'},
    {key: 1,  value: 'D.S. 10 Habitabilidad Rural'},
    {key: 2,  value: 'D.S. 49 Sectores Vulnerables'},
    {key: 3,  value: 'D.S. 120 Leasing Habitacional'},
    {key: 4,  value: 'D.S. 19 Sectores Vulnerables'},
    {key: 5,  value: 'D.S. 19 Sectores Medios'},
    {key: 6,  value: 'D.S. 1 Sectores Emergentes (titulo I, tramo 1)'},
    {key: 7,  value: 'D.S. 1 Sectores Emergentes (titulo I, tramo 2)'},
    {key: 8,  value: 'D.S. 1 Sectores Medios (titulo II)'},
    {key: 9,  value: 'D.S. 116 Sectores Vulnerables'},
    {key: 10, value:'D.S. 116 Sectores Medios'},
    {key: 11, value:'Otro'}
  ];
 
  atc = [
    {key: 0, value: 'SI'},
    {key: 1, value: 'NO'}
  ];
 
  discapacidad = [
    {key: 0, value: 'SI'},
    {key: 1, value: 'NO'}
  ];

  estadoCivil = [
    {key: 0, value: 'Soltero'},
    {key: 1, value: 'Casado'},
    {key: 2, value: 'Viudo'},
    {key: 3, value: 'Soltero Conviviente'},
    {key: 4, value: 'Separado'},
    {key: 5, value: 'Divorciado'},
    {key: 6, value: 'Divorciado Conviviente'}
  ];

  tipoContrato = [
    {key: 0, value: 'Sin Dato'},
    {key: 1, value: 'Honorarios'},
    {key: 2, value: 'PartTime'},
    {key: 3, value: 'Obra o Faena'},
    {key: 4, value: 'Plazo Fijo'},
    {key: 5, value: 'Plazo Indefinido'}
  ];


  step = 0;
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }

  form: FormGroup;
  createForm: FormGroup;
  regiones: Region[];
  comunas: Comuna[];
  empresasConvenio: EmpresaConvenio[];
  empresasLaboral: EmpresaLaboral[];
  datosDiagnostico: DatosDiagnostico[];
  datosAhorro: DatosAhorro[];
  trabajadores: Trabajadores[];
  usuarios: Usuario[];
  isLoadingResults = false;
 

  constructor(private fb: FormBuilder, private router: Router, private trabajadoresService: TrabajadoresService,
              private regionService: RegionService, private comunaService: ComunaService, private empresaConvenioService: EmpresaConvenioService,
              private empresaLaboralService: EmpresaLaboralService, private datosDiagnosticoService: DatosDiagnosticoService,
              private datosAhorroService: DatosAhorroService, private usuarioService: UsuarioService) {}

    
  ngOnInit() {
    

    this.createForm = new FormGroup({
     
      rut: new FormControl('', Validators.required),
      nombres: new FormControl('', Validators.required),
      apellidoPaterno: new FormControl('', Validators.required),
      apellidoMaterno: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      piso: new FormControl('', Validators.required),
      region: new FormControl('', Validators.required),
      comuna: new FormControl('', Validators.required),
      telefonoMovil: new FormControl('', Validators.required),
      telefonoFijo: new FormControl('', Validators.required),
      telefonoOtro: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
  
      empresaConvenioId: new FormControl('', Validators.required),
      razonSocialConvenio: new FormControl('', Validators.required),
      servicioSocial: new FormControl('', Validators.required),
      rutLaboral: new FormControl('', Validators.required),
      empresaLaboralId: new FormControl('', Validators.required),
      anexoId: new FormControl('', Validators.required),
      fechaLaborales: new FormControl('', Validators.required),
  
      usuario: new FormControl('', Validators.required),
      backoffice: new FormControl('', Validators.required),
      
      rsh: new FormControl('', Validators.required),
      comunaRsh: new FormControl('', Validators.required),
      subsidioActual: new FormControl('', Validators.required),
      subsidiopostular: new FormControl('', Validators.required),
      dicom: new FormControl('', Validators.required),
      atc: new FormControl('', Validators.required),
      discapacidad: new FormControl('', Validators.required),
      estadocivil: new FormControl('', Validators.required),
      renta: new FormControl('', Validators.required),
      tipocontrato: new FormControl('', Validators.required),

      banco: new FormControl('', Validators.required),
      numeroCuenta: new FormControl('', Validators.required),
      monto: new FormControl('', Validators.required),

      estadoBono: new FormControl('', Validators.required),
      estadoAhorro: new FormControl('', Validators.required),
      estadoPostulacion: new FormControl('', Validators.required),
      estadoSubsidio: new FormControl('', Validators.required),
      estadoVivienda: new FormControl('', Validators.required),
      estadoCredito: new FormControl('', Validators.required),
      estadoEscrituracion: new FormControl('', Validators.required),
      estadoPropietario: new FormControl('', Validators.required),

      fechaAtencion: new FormControl('', Validators.required),
      estadoAtencion: new FormControl('', Validators.required),

    });
           
    this.getTrabajador();
    this.getAllRegion();
    this.getAllComuna();
    this.getEmpresaConvenio();
    this.getEmpresaLaboral();
    this.getDatosDiagnostico();
    this.getDatosAhorro();
    this.getUsuario(); 

  }

addCreds() {
  // const creds = this.form.controls.credentials as FormArray;
  // creds.push(this.formBuilder.group({
  //   //'parentesco': '',
  //   'fechaNacimiento': '', 
  // }));
}

 getAllRegion() {
   this.regionService
     .getRegion()
     .subscribe((data: Region[]) => {
       this.regiones = data;
     });
 }
 
 getAllComuna() {
   this.comunaService
     .getAllComuna()
     .subscribe((data: Comuna[]) => {
       this.comunas = data;
       console.log(this.comunas)
     });
 }
 
 getComunas(codigo){
   this.comunaService
   .getComunas(codigo)
   .subscribe((data: Comuna[]) => {
    this.comunas = data;
  })
 }

 getEmpresaConvenio(){
   this.empresaConvenioService
   .getEmpresaConvenio()
   .subscribe((data: EmpresaConvenio[]) => {
     this.empresasConvenio = data;
     console.log('Arreglo EmpresaConvenio: ', this.empresasConvenio);
   })
 }

 getEmpresaLaboral(){
  this.empresaLaboralService
  .getEmpresaLaboral()
  .subscribe((data: EmpresaLaboral[]) => {
    this.empresasLaboral = data;
    console.log('Arreglo EmpresaLaboral: ', this.empresasLaboral);
  })
 }

 getDatosDiagnostico(){
   this.datosDiagnosticoService
   .GetDatosDiagnostico()
   .subscribe((data: DatosDiagnostico[]) => {
     this.datosDiagnostico = data;
     console.log('Arreglo DatosDiagnostico: ', this.datosDiagnostico);
   })
 }

 getDatosAhorro(){
   this.datosAhorroService
   .GetDatosAhorro()
   .subscribe((data: DatosAhorro[]) => {
     this.datosAhorro = data;
     console.log('Arreglo DatosAhorro: ', this.datosAhorro);
   })
 }


 getTrabajador(){
   this.trabajadoresService
   .getTrabajador()
   .subscribe((data: Trabajadores[]) => {
     this.trabajadores = data;
     console.log('Arreglo Trabajadores: ', this.trabajadores);
   })
 }

 getUsuario(){
   this.usuarioService
   .getUsuario()
   .subscribe((data: Usuario[]) => {
     this.usuarios = data;
     console.log('Arreglo Usuario: ', this.usuarios);
   })
 }

  // onFormSubmit(createForm: NgForm) {
  //   console.log(this.createForm.value);
  //   this.isLoadingResults = true;
  //   this.trabajadoresService.postTrabajador(createForm)
  //     .subscribe(res => {
  //       let id = res['_id'];
  //       this.isLoadingResults = false;
  //       this.router.navigate(['/list'] ,id);
  //     }, (err) => {
  //       console.log(err);
  //       this.isLoadingResults = false;
  //     });
  // }
}
