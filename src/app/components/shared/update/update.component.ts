import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TrabajadoresService } from '../../../services/trabajadores.service';
import { Trabajadores } from '../../../../../../backend/models/trabajadoresModel';
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
import { DatosFamiliares } from '../../interface/datosFamiliares';
import { DatosFamiliaresService } from '../../../services/datos-familiares.service'; 
import { Usuario } from '../../interface/usuario';
import { UsuarioService } from '../../../services/usuario.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UpdateComponent implements OnInit {
   
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

  // parentescos = [
  //   { key: 1, value: 'Conyuge' },
  //   { key: 2, value: 'Hijo' },
  // ]

  // anexos = [
  //   {key: 0, value: '1'},
  //   {key: 1, value: '2'},
  //   {key: 2, value: '3'}
  // ];

  // rsh = [
  //   {key: 0, value: 'En Proceso'},
  //   {key: 1, value: 'Hasta 40%'},
  //   {key: 2, value: '41% a 50%'},
  //   {key: 3, value: '51% a 60%'},
  //   {key: 4, value: '61% a 70%'},
  //   {key: 5, value: '71% a 80%'},
  //   {key: 6, value: '81% a 90%'},
  //   {key: 7, value: '91% a 100%'}
  // ];
  
  // subsidioActual = [
  //   {key: 0,  value: 'Sin Subsidio'},
  //   {key: 1,  value: 'D.S. 10 Habitabilidad Rural'},
  //   {key: 2,  value: 'D.S. 49 Sectores Vulnerables'},
  //   {key: 3,  value: 'D.S. 120 Leasing Habitacional'},
  //   {key: 4,  value: 'D.S. 19 Sectores Vulnerables'},
  //   {key: 5,  value: 'D.S. 19 Sectores Medios'},
  //   {key: 6,  value: 'D.S. 1 Sectores Emergentes (titulo I, tramo 1)'},
  //   {key: 7,  value: 'D.S. 1 Sectores Emergentes (titulo I, tramo 2)'},
  //   {key: 8,  value: 'D.S. 1 Sectores Medios (titulo II)'},
  //   {key: 9,  value: 'D.S. 116 Sectores Vulnerables'},
  //   {key: 10, value:'D.S. 116 Sectores Medios'},
  //   {key: 11, value:'Otro'}
  // ];
 
  // atc = [
  //   {key: 0, value: 'SI'},
  //   {key: 1, value: 'NO'}
  // ];
 
  // discapacidad = [
  //   {key: 0, value: 'SI'},
  //   {key: 1, value: 'NO'}
  // ];

  // estadoCivil = [
  //   {key: 0, value: 'Soltero'},
  //   {key: 1, value: 'Casado'},
  //   {key: 2, value: 'Viudo'},
  //   {key: 3, value: 'Soltero Conviviente'},
  //   {key: 4, value: 'Separado'},
  //   {key: 5, value: 'Divorciado'},
  //   {key: 6, value: 'Divorciado Conviviente'}
    
  // ];

  tipoContrato: any[] = [
    {key: 0, value: 'Sin Dato'},
    {key: 1, value: 'Honorarios'},
    {key: 2, value: 'PartTime'},
    {key: 3, value: 'Obra o Faena'},
    {key: 4, value: 'Plazo Fijo'},
    {key: 5, value: 'Plazo Indefinido'}
  ];

  form: FormGroup;
  trabajadorForm: FormGroup;
  id: string='';
  usuarios: Usuario[];
  regiones: Region[];
  comunas: Comuna[];
  empresasConvenio: EmpresaConvenio[];
  empresasLaboral: EmpresaLaboral[];
  datodiagnostico: DatosDiagnostico[];
  datoahorro: DatosAhorro[];
  datofamiliar: DatosFamiliares[];
  trabajadores: Trabajadores[];

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private trabajadoresService: TrabajadoresService,
              private regionService: RegionService, private comunaService: ComunaService, private empresaConvenioService: EmpresaConvenioService,
              private empresaLaboralService: EmpresaLaboralService, private datosDiagnosticoService: DatosDiagnosticoService,
              private datosFamiliaresService: DatosFamiliaresService, private datosAhorroService: DatosAhorroService,
              private usuarioService: UsuarioService) {}

  ngOnInit() {   
   
    this.form = this.formBuilder.group({
      credentials: this.formBuilder.array([]),
    });


  this.getTrabajador(this.route.snapshot.params['id']);
  this.trabajadorForm = this.formBuilder.group({
    'rut': [null, Validators.required],
    'dv': '',
    'nombres': [null, Validators.required],
    'apellidoPaterno': [null, Validators.required],
    'apellidoMaterno': [null, Validators.required],
    'estado': [null, Validators.required],
    'direccion': [null, Validators.required],
    'piso': [null, Validators.required],
    'region': [null, Validators.required],
    'comuna': [null, Validators.required],  
    'telefonoMovil': [null, Validators.required],
    'telefonoFijo': [null, Validators.required],
    'telefonoOtro': [null, Validators.required],
    'email': [null, Validators.required],

    'rutConvenio' : [null, Validators.required],
    'razonSocialConvenio' : [null, Validators.required],
    'servicioSocial' : [null, Validators.required],
    'rutLaboral' : [null, Validators.required],
    'razonSocialLaboral' : [null, Validators.required],
    'anexoId' : [null, Validators.required],
    'fechaLaborales' : [null, Validators.required],   
  
    'usuario' : [null, Validators.required],
    'backoffice' : [null, Validators.required],

    'rsh': [null, Validators.required],
    'comunaRsh': [null, Validators.required],
    'subsidioActual': [null, Validators.required],
    'subsidioPostular': [null, Validators.required],
    'dicom': [null, Validators.required],
    'atc': [null, Validators.required],
    'discapacidad': [null, Validators.required],
    'estadoCivil': [null, Validators.required],
    'renta': [null, Validators.required],
    'tipoContrato': [null, Validators.required],


    'numeroCuenta': [null, Validators.required],
    'banco': [null, Validators.required],
    'monto': [null, Validators.required],

    'estadoBono': [null, Validators.required],
    'estadoAhorro': [null, Validators.required],
    'estadoPostulacion': [null, Validators.required],
    'estadoSubsidio': [null, Validators.required],
    'estadoVivienda': [null, Validators.required],
    'estadoCredito': [null, Validators.required],
    'estadoEscrituracion': [null, Validators.required],
    'estadoPropietario': [null, Validators.required],

    'nombreProceso': [null, Validators.required],
    'estadoProceso': [null, Validators.required],
    'fechaInicio': [null, Validators.required],
    'fechaFin': [null, Validators.required],

    // 'parentesco': [null, Validators.required],
    // 'fechaNacimiento': [null, Validators.required],

    'sistracId': [null, Validators.required],
    'FechaEstado': [null, Validators.required],   
    'fechaAtencion': [null, Validators.required],
    'estadoAtencion': [null, Validators.required],

  });

  this.getAllRegion();
  this.getAllComuna();
  this.getUsuario();
  this.getDatosAhorro();
  this.getDatosFamiliares();

}

getTrabajador(id){
    this.trabajadoresService.getTrabajadorById(id).subscribe(
      data => {
        console.log('Trabajadores: ', data);  
          this.empresaConvenioService.getEmpresaConvenioBy(data.empresaConvenioId).subscribe( empresaConvenio => {
          console.log('Empresa de convenio: ', empresaConvenio);
          this.empresaLaboralService.getEmpresaLaboralBy(data.empresaLaboralId).subscribe( empresaLaboral => {
          console.log('Empresa laboral: ', empresaLaboral);
          this.datosDiagnosticoService.getDatosDiagnosticoBy(data.datosDiagnosticoId).subscribe( datosdelDiagnostico => {
          console.log('Datos de Diagnostico: ', datosdelDiagnostico);
          
                          
          this.id = data.id;
          this.trabajadorForm.patchValue({
            rut: data.rut,
            dv: data.dv,
            nombres: data.nombres,
            apellidoPaterno: data.apellidoPaterno,
            apellidoMaterno: data.apellidoMaterno,
            estado: data.estado,
            direccion: data.direccion,
            piso: data.piso,
            region: data.region,
            comuna: data.comuna,        
            telefonoMovil: data.telefonoMovil,
            telefonoFijo: data.telefonoFijo,
            telefonoOtro: data.telefonoOtro,
            email: data.email,
       
            rutConvenio: data.empresaConvenioId,
            razonSocialConvenio: data.razonSocialConvenio,
            servicioSocial: data.servicioSocial,
            rutLaboral: data.empresaLaboralId,
            fechaLaborales: data.fechaLaborales,
                      
            usuario: data.usuario,
            backoffice: data.backoffice,
            
            rsh: data.datosDiagnosticoId[0]['rsh'],
            comunaRsh: data.comunaRsh,
            subsidioActual: data.subsidioActual,
            subsidioPostular: data.subsidioPostular,
            dicom: data.datosDiagnosticoId,
            atc: data.datosDiagnosticoId[0]['atc'],
            discapacidad: data.discapacidad,
            estadocivil: data.estadoCivil,
            renta: data.datosDiagnosticoId,
            tipoContrato: data.datosDiagnosticoId[0]['tipoContrato'],
  
            banco: data.ahorros[0]['banco'],
            numeroCuenta: data.ahorros[0]['numeroCuenta'],
            monto: data.ahorros[0]['monto'],


  
            // nombreProceso: data.etapas[0]['nombre'],
            // estadoProceso: data.etapas[0]['estado'],
            // fechaInicio: data.etapas[0]['fechaInicio'],
            // fechaFin: data.etapas[0]['fechaFinal'],
  
            parentesco: data.familiares[0]['parentesco'],
            fechaNacimiento: data.familiares[0]['fechaNacimiento'],

            sistracId: data.atenciones[0]['sistracId'],
  
            fechaAtencion: data.etapas[0]['fechaInicio'],
            estadoAtencion: data.atenciones[0]['estado']
          
          });
         });
        });
       });
     })
}

addCreds() {
  const creds = this.form.controls.credentials as FormArray;
  creds.push(this.formBuilder.group({

    //'parentesco': '',
    'fechaNacimiento': '',
 
  
  }));
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
      });
  }
  
  getComunas(codigo) {
    this.comunaService
      .getComunas(codigo)
      .subscribe((data: Comuna[]) => {
        this.comunas = data;
      })
  }

  getUsuario(){
  this.usuarioService
  .getUsuario()
  .subscribe((data: Usuario[]) => {
    this.usuarios = data;
  })
}

  getDatosAhorro() {
    this.datosAhorroService
      .GetDatosAhorro()
      .subscribe((data: DatosAhorro[]) => {
        this.datoahorro = data;
        console.log('DatosAhorro:', this.datoahorro)
      })
  }

  getDatosFamiliares() {
    this.datosFamiliaresService
    .GetDatosFamiliares()
    .subscribe((data: DatosFamiliares[]) => {
      this.datofamiliar = data;
      console.log('DatosFamiliar:', this.datofamiliar)
    })
  }
   
  onFormSubmit(form: NgForm) {
    this.trabajadoresService.updateTrabajador(this.id, form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/update', id]);
      }, (err) => {
        console.log(err);
      }
    );
  }
}
 
 
