const datos = [
  {
    causalidad: 'Bajar Auditoria,  Log de errores, Silent Debug, configuracion por solicitud del cliente o de NCR',
    tipoSR: 'CHGC',
    codigoReparacion: '34',
    categoria: '1B',
    mayor: '50',
    menor: '1O',
    codigoEntorno: '19KI',
    description: ''
  },
  {
    causalidad: 'Cliente solicita Autenticar dispensador x Cambio Software',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '50',
    menor: 'CW',
    codigoEntorno: '19KC',
    description: ''
  },
  {
    causalidad: 'Cliente solicita Copia llave de chapa',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '36',
    menor: 'V8',
    codigoEntorno: '19KC',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cable dispensador suelto',
    tipoSR: 'CHGC',
    codigoReparacion: '02',
    categoria: '1B',
    mayor: 'ND',
    menor: 'J7',
    codigoEntorno: '19NS',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Dinero en mal estado (tomar fotos) o generando atascos',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K7',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Fajilla de billetes obstruia sensor',
    tipoSR: 'CHGC',
    codigoReparacion: '03',
    categoria: '1B',
    mayor: 'ND',
    menor: 'BL',
    codigoEntorno: '19K7',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Falla de Aplicativo con reinstalacion',
    tipoSR: 'CHGC',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    codigoEntorno: '19KP',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Gaveta sin dinero',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K5',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Gavetas BNA llenas de dinero obstruyendo sensor',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '2C',
    menor: 'GR',
    codigoEntorno: '19KE',
    description: ''
  },
  {
    causalidad: 'Error Operativo - TDV mal engachada gaveta',
    tipoSR: 'CHGC',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - TDV Mala manipulacion dispensador',
    tipoSR: 'CHGC',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'ND',
    menor: 'XX',
    codigoEntorno: '19NS',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Error Operativo - TDV manipulacion escrow',
    tipoSR: 'CHGC',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '2C',
    menor: 'F5',
    codigoEntorno: '19NS',
    description: ''
  },
  {
    causalidad: 'Error Operativo- Gaveta dañada por manipulacion  generando fallas',
    tipoSR: 'CHGC',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19N2',
    description: ''
  },
  {
    causalidad: 'Error Usuario final - Efectivo depositado en Multifuncional de Mala calidad',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '2C',
    menor: 'TJ',
    codigoEntorno: '19KO',
    description: ''
  },
  {
    causalidad: 'Incumplimiento y/o TDV no llevo llaves del site',
    tipoSR: 'CHGC',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    codigoEntorno: '19KL',
    description: ''
  },
  {
    causalidad: 'Mal diagnostico de Monitoreo (BELLTECH - DAVIVIENDA), modulo diferente - servivio incorrecto SLM',
    tipoSR: 'CHGC',
    codigoReparacion: '54',
    categoria: '1B',
    mayor: 'XX',
    menor: 'XX',
    codigoEntorno: '19NR',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Problema Aire Acondicionado en afectacion al ATM con cambio de partes ATM',
    tipoSR: 'CHGC',
    codigoReparacion: '11',
    categoria: '1B',
    mayor: 'XX',
    menor: 'XX',
    codigoEntorno: '19KT',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Problema Software Cliente',
    tipoSR: 'CHGC',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    codigoEntorno: '19KP',
    description: ''
  },
  {
    causalidad: 'Reinstalacion Software SIN Falla del ATM',
    tipoSR: 'CHGC',
    codigoReparacion: '30',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    codigoEntorno: '19KP',
    description: ''
  },
  {
    causalidad: 'Restriccion de Site - No acceso al ATM para NCR SLM',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    codigoEntorno: '19KL',
    description: ''
  },
  {
    causalidad: 'Restriccion de Site - NO se pudo abrir cofre TDV y/o Oficina',
    tipoSR: 'CHGC',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    codigoEntorno: '19KL',
    description: ''
  },
  {
    causalidad: 'Vandalismo Mayor',
    tipoSR: 'CHGC',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'XX',
    menor: 'XX',
    codigoEntorno: '19NP',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Vandalismo Mayor Con cambio de partes',
    tipoSR: 'CHGC',
    codigoReparacion: '11',
    categoria: '1B',
    mayor: 'XX',
    menor: 'XX',
    codigoEntorno: '19NP',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Aprovisionamiento de Papel exitoso',
    tipoSR: 'CHGF',
    codigoReparacion: '05',
    categoria: '1B',
    mayor: '7C',
    menor: 'S5',
    codigoEntorno: '19KM',
    description: ''
  },
  {
    causalidad: 'Aprovisionamiento de Papel fallido no hay papel en site',
    tipoSR: 'CHGF',
    codigoReparacion: '14',
    categoria: '1B',
    mayor: '7C',
    menor: 'S5',
    codigoEntorno: '19KM',
    description: ''
  },
  {
    causalidad: 'Aprovisionamiento de Papel Mal cargado',
    tipoSR: 'CHGF',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '7C',
    menor: 'S5',
    codigoEntorno: '19KG',
    description: ''
  },
  {
    causalidad: 'Cliente solicita Ingreso Llaves de Encripcion',
    tipoSR: 'CHGF',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    codigoEntorno: '19KA',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Aprovisionamiento de Papel POR Mal cargado',
    tipoSR: 'CHGF',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '7C',
    menor: 'S5',
    codigoEntorno: '19KB',
    description: ''
  },
  {
    causalidad: 'Error Operativo - ATM Apagado por reparacion Boveda - Site - PM programado',
    tipoSR: 'CHGF',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    codigoEntorno: '19KP',
    description: ''
  },
  {
    causalidad: 'Error Operativo - ATM en Supervisor',
    tipoSR: 'CHGF',
    codigoReparacion: '57',
    categoria: '1B',
    mayor: '36',
    menor: 'LH',
    codigoEntorno: '19KP',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cable Potencia desconectado',
    tipoSR: 'CHGF',
    codigoReparacion: '02',
    categoria: '1B',
    mayor: '36',
    menor: 'ZU',
    codigoEntorno: '19K4',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Dispositivo interno desconectado',
    tipoSR: 'CHGF',
    codigoReparacion: '02',
    categoria: '1B',
    mayor: 'CH',
    menor: 'J7',
    codigoEntorno: '19KB',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Fascia abierta',
    tipoSR: 'CHGF',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    codigoEntorno: '19KV',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Fascia dejada sin asegurar',
    tipoSR: 'CHGF',
    codigoReparacion: '02',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    codigoEntorno: '19KV',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Inactividad ATM O Sin fallas  NFF',
    tipoSR: 'CHGF',
    codigoReparacion: '53',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    codigoEntorno: '19KR',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Mal enrutado el cable comunicaciones o suelto',
    tipoSR: 'CHGF',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'PN',
    menor: 'D4',
    codigoEntorno: '19K9',
    description: ''
  },
  {
    causalidad: 'Error Operativo - No hay ATM en sitio',
    tipoSR: 'CHGF',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    codigoEntorno: '19NR',
    description: ''
  },
  {
    causalidad: 'Error Operativo - TDV deja segundo recibo de contadores',
    tipoSR: 'CHGF',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '7C',
    menor: 'XX',
    codigoEntorno: '19NS',
    description: ''
  },
  {
    causalidad: 'Error Operativo - TDV no borra contadores',
    tipoSR: 'CHGF',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    codigoEntorno: '19N8',
    description: ''
  },
  {
    causalidad: 'Mal diagnostico de Monitoreo,(BELLTECH), modulo diferente - servivio incorrecto FLM',
    tipoSR: 'CHGF',
    codigoReparacion: '54',
    categoria: '1B',
    mayor: 'XX',
    menor: 'XX',
    codigoEntorno: '19NR',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Problema Aire Acondicionado en afectacion al ATM',
    tipoSR: 'CHGF',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '36',
    menor: 'ZQ',
    codigoEntorno: '19KT',
    description: ''
  },
  {
    causalidad: 'Problema comunicaciones o equipos comunicaciones  apagados o reset equipos',
    tipoSR: 'CHGF',
    codigoReparacion: '57',
    categoria: '1B',
    mayor: 'PN',
    menor: 'D4',
    codigoEntorno: '19KQ',
    description: ''
  },
  {
    causalidad: 'Problema electrico - Equipos comunicaciones',
    tipoSR: 'CHGF',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'PN',
    menor: 'LA',
    codigoEntorno: '19KQ',
    description: ''
  },
  {
    causalidad: 'Problema electrico - No hay Fluido electrico',
    tipoSR: 'CHGF',
    codigoReparacion: '47',
    categoria: '1B',
    mayor: 'CH',
    menor: 'LA',
    codigoEntorno: '19K4',
    description: ''
  },
  {
    causalidad: 'Problema electrico - Voltajes altos',
    tipoSR: 'CHGF',
    codigoReparacion: '47',
    categoria: '1B',
    mayor: 'CH',
    menor: 'LA',
    codigoEntorno: '19K4',
    description: ''
  },
  {
    causalidad: 'Problema electrico -Problema UPS',
    tipoSR: 'CHGF',
    codigoReparacion: '47',
    categoria: '1B',
    mayor: 'PN',
    menor: 'D9',
    codigoEntorno: '19K4',
    description: ''
  },
  {
    causalidad: 'Realizar Test Cash',
    tipoSR: 'CHGF',
    codigoReparacion: '03',
    categoria: '1B',
    mayor: 'ND',
    menor: 'QC',
    codigoEntorno: '19K7',
    description: ''
  },
  {
    causalidad: 'Reseteo ATM con Aplicativo Cliente',
    tipoSR: 'CHGF',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    codigoEntorno: '19KP',
    description: ''
  },
  {
    causalidad: 'Restriccion de Site - No acceso al ATM para NCR FLM',
    tipoSR: 'CHGF',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    codigoEntorno: '19KL',
    description: ''
  },
  {
    causalidad: 'Restriccion de Site - No hay clave de alarma Site',
    tipoSR: 'CHGF',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    codigoEntorno: '19KL',
    description: ''
  },
  {
    causalidad: 'Vandalismo Menor',
    tipoSR: 'CHGF',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'XX',
    menor: 'XX',
    codigoEntorno: '19NP',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Acompañamiento - Apertura  y no llega proveedor  o no tiene acceso',
    tipoSR: 'CHGF / TTPY',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '36',
    menor: 'LH',
    codigoEntorno: '19K8',
    description: ''
  },
  {
    causalidad: 'Acompañamiento - Apertura Aire Acondicionado',
    tipoSR: 'CHGF / TTPY',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    codigoEntorno: '19K8',
    description: ''
  },
  {
    causalidad: 'Acompañamiento - Apertura Alarmas',
    tipoSR: 'CHGF / TTPY',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'PN',
    menor: 'V1',
    codigoEntorno: '19K8',
    description: ''
  },
  {
    causalidad: 'Acompañamiento - Apertura Aseo',
    tipoSR: 'CHGF / TTPY',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    codigoEntorno: '19K8',
    description: ''
  },
  {
    causalidad: 'Acompañamiento - Apertura Cerradura',
    tipoSR: 'CHGF / TTPY',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'PN',
    menor: 'VD',
    codigoEntorno: '19K8',
    description: ''
  },
  {
    causalidad: 'Acompañamiento - Apertura Comunicaciones',
    tipoSR: 'CHGF / TTPY',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'PN',
    menor: 'D4',
    codigoEntorno: '19K8',
    description: ''
  },
  {
    causalidad: 'Acompañamiento - Apertura DVR',
    tipoSR: 'CHGF / TTPY',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'PN',
    menor: 'V3',
    codigoEntorno: '19K8',
    description: ''
  },
  {
    causalidad: 'Acompañamiento - Apertura Electrico',
    tipoSR: 'CHGF / TTPY',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'PN',
    menor: 'D9',
    codigoEntorno: '19K8',
    description: ''
  },
  {
    causalidad: 'Acompañamiento - Apertura Otros',
    tipoSR: 'CHGF / TTPY',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    codigoEntorno: '19K8',
    description: ''
  },
  {
    causalidad: 'Acompañamiento Configuracion PIN VISA (Llaves Encripcion)',
    tipoSR: 'CHGF / TTPY',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ED',
    menor: 'SI',
    codigoEntorno: '19KA',
    description: ''
  },
  {
    causalidad: 'PROYECTO Cliente solicita Desmonte dispensador x Remodelacion',
    tipoSR: 'DEIN',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    codigoEntorno: 'N/A',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'Bajar Log de errores por solicitud del cliente o de NCR y el SSCO no tiene fallas',
    tipoSR: 'ECO',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '50',
    menor: 'X2',
    codigoEntorno: '19K8',
    description: ''
  },
  {
    causalidad: 'Retiro atasco en impresora',
    tipoSR: 'FLM',
    codigoReparacion: '03',
    categoria: '1B',
    mayor: 'S5',
    menor: 'XX',
    codigoEntorno: 'N/A',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Retiro atasco en lectora',
    tipoSR: 'FLM',
    codigoReparacion: '03',
    categoria: '1B',
    mayor: 'CR',
    menor: 'XX',
    codigoEntorno: 'N/A',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Cliente solicita Ingreso Llaves de Encripcion PROYECTO BANCOLOMBIA',
    tipoSR: 'FLM4',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    codigoEntorno: 'N/A',
    description: ''
  },
  {
    causalidad: 'PROYECTO Cliente solicita Encender ATM despues de Remodelacion',
    tipoSR: 'INST',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    codigoEntorno: 'N/A',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Cliente solicita Instalacion Protector teclado',
    tipoSR: 'INST',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    codigoEntorno: 'N/A',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Cliente solicita Reinstalar ATM que estaba en Bodega',
    tipoSR: 'INST',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    codigoEntorno: 'N/A',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Instalacion de Gavetas',
    tipoSR: 'INST',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    codigoEntorno: 'N/A',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Instalacion de Partes nuevas por actualizacion o venta',
    tipoSR: 'INST',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    codigoEntorno: 'N/A',
    description: 'SR de proyectos'
  }
];