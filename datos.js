const datos = [
  {
    causalidad: 'Acompañamiento - Apertura  y no llega proveedor  o no tiene acceso',
    tipoSR: 'CHGF / TTPY',
    codigoEntorno: '19K8',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '36',
    menor: 'LH',
    description: ''
  },
  {
    causalidad: 'Acompañamiento - Apertura Aire Acondicionado',
    tipoSR: 'CHGF / TTPY',
    codigoEntorno: '19K8',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Acompañamiento - Apertura Alarmas',
    tipoSR: 'CHGF / TTPY',
    codigoEntorno: '19K8',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'PN',
    menor: 'V1',
    description: ''
  },
  {
    causalidad: 'Acompañamiento - Apertura Aseo',
    tipoSR: 'CHGF / TTPY',
    codigoEntorno: '19K8',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Acompañamiento - Apertura Cerradura',
    tipoSR: 'CHGF / TTPY',
    codigoEntorno: '19K8',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'PN',
    menor: 'VD',
    description: ''
  },
  {
    causalidad: 'Acompañamiento - Apertura Comunicaciones',
    tipoSR: 'CHGF / TTPY',
    codigoEntorno: '19K8',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'PN',
    menor: 'D4',
    description: ''
  },
  {
    causalidad: 'Acompañamiento - Apertura DVR',
    tipoSR: 'CHGF / TTPY',
    codigoEntorno: '19K8',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'PN',
    menor: 'V3',
    description: ''
  },
  {
    causalidad: 'Acompañamiento - Apertura Electrico',
    tipoSR: 'CHGF / TTPY',
    codigoEntorno: '19K8',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'PN',
    menor: 'D9',
    description: ''
  },
  {
    causalidad: 'Acompañamiento - Apertura Otros',
    tipoSR: 'CHGF / TTPY',
    codigoEntorno: '19K8',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Acompañamiento Configuracion PIN VISA (Llaves Encripcion)',
    tipoSR: 'CHGF / TTPY',
    codigoEntorno: '19KA',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ED',
    menor: 'SI',
    description: ''
  },
  {
    causalidad: 'Aprovisionamiento de Papel exitoso',
    tipoSR: 'CHGF',
    codigoEntorno: '19KM',
    codigoReparacion: '05',
    categoria: '1B',
    mayor: '7C',
    menor: 'S5',
    description: ''
  },
  {
    causalidad: 'Aprovisionamiento de Papel fallido no hay papel en site',
    tipoSR: 'CHGF',
    codigoEntorno: '19KM',
    codigoReparacion: '14',
    categoria: '1B',
    mayor: '7C',
    menor: 'S5',
    description: ''
  },
  {
    causalidad: 'Aprovisionamiento de Papel Mal cargado',
    tipoSR: 'CHGF',
    codigoEntorno: '19KG',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '7C',
    menor: 'S5',
    description: ''
  },
  {
    causalidad: 'Bajar Auditoria, Log de errores, Silent Debug, configuracion por solicitud del cliente o de NCR',
    tipoSR: 'CHGC',
    codigoEntorno: '19KI',
    codigoReparacion: '34',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    description: ''
  },
  {
    causalidad: 'Bajar Log de errores por solicitud del cliente o de NCR y el SSCO no tiene fallas',
    tipoSR: 'CHGC',
    codigoEntorno: '19K8',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'CH',
    menor: 'N3',
    description: ''
  },
  {
    causalidad: 'Camaras DAV',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: 'ED',
    menor: 'V3',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Camaras DAV DAÑO CAUSADO O NO NCR',
    tipoSR: 'CHGC',
    codigoEntorno: '19KP',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: 'ED',
    menor: 'V3',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Cliente solicita Autenticar dispensador x Cambio Software',
    tipoSR: 'CHGC',
    codigoEntorno: '19KP',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'YH',
    description: ''
  },
  {
    causalidad: 'Cliente solicita Copia llave de chapa',
    tipoSR: 'CHGC',
    codigoEntorno: '19KC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '36',
    menor: 'V8',
    description: ''
  },
  {
    causalidad: 'Cliente solicita Ingreso Llaves de Encripcion',
    tipoSR: 'CHGF',
    codigoEntorno: '19KA',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    description: ''
  },
  {
    causalidad: 'Cliente solicita Ingreso Llaves de Encripcion PROYECTO BANCOLOMBIA',
    tipoSR: 'FLM4',
    codigoEntorno: 'N/A',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Aprovisionamiento de Papel POR Mal cargado',
    tipoSR: 'CHGF',
    codigoEntorno: '19KB',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '7C',
    menor: 'S5',
    description: ''
  },
  {
    causalidad: 'Error Operativo - ATM Apagado por reparacion Boveda - Site - PM programado',
    tipoSR: 'CHGF',
    codigoEntorno: '19KP',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Error Operativo - ATM en Supervisor',
    tipoSR: 'CHGF',
    codigoEntorno: '19KP',
    codigoReparacion: '57',
    categoria: '1B',
    mayor: '36',
    menor: 'LH',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cable dispensador suelto',
    tipoSR: 'CHGC',
    codigoEntorno: '19NS',
    codigoReparacion: '02',
    categoria: '1B',
    mayor: 'ND',
    menor: 'J7',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cable Potencia desconectado',
    tipoSR: 'CHGF',
    codigoEntorno: '19K4',
    codigoReparacion: '02',
    categoria: '1B',
    mayor: '36',
    menor: 'ZU',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Dinero en mal estado (tomar fotos) o generando atascos',
    tipoSR: 'CHGC',
    codigoEntorno: '19K7',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Dispositivo interno desconectado',
    tipoSR: 'CHGF',
    codigoEntorno: '19KB',
    codigoReparacion: '02',
    categoria: '1B',
    mayor: 'CH',
    menor: 'J7',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Fajilla de billetes obstruia sensor',
    tipoSR: 'CHGC',
    codigoEntorno: '19K7',
    codigoReparacion: '03',
    categoria: '1B',
    mayor: 'ND',
    menor: 'BL',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Falla de Aplicativo con reinstalacion',
    tipoSR: 'CHGC',
    codigoEntorno: '19KP',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    description: ''
  },
  {
    causalidad: 'SOLICITUD DEL CLIENTE Reinstalacion Software SIN Falla del ATM',
    tipoSR: 'CHGC',
    codigoEntorno: '19KP',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Fascia abierta',
    tipoSR: 'CHGF',
    codigoEntorno: '19KV',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Fascia dejada sin asegurar',
    tipoSR: 'CHGF',
    codigoEntorno: '19KV',
    codigoReparacion: '02',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Gaveta sin dinero',
    tipoSR: 'CHGC',
    codigoEntorno: '19K5',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Gavetas BNA llenas de dinero obstruyendo sensor',
    tipoSR: 'CHGC',
    codigoEntorno: '19KE',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '2C',
    menor: 'GR',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Inactividad ATM O Sin fallas  NFF',
    tipoSR: 'CHGF',
    codigoEntorno: '19KR',
    codigoReparacion: '53',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Instalacion de Aplicativo por daño NO NCR',
    tipoSR: 'CHGC',
    codigoEntorno: '19KP',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Mal enrutado el cable comunicaciones o suelto',
    tipoSR: 'CHGF',
    codigoEntorno: '19K9',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'PN',
    menor: 'D4',
    description: ''
  },
  {
    causalidad: 'Error Operativo - No hay ATM en sitio',
    tipoSR: 'CHGF',
    codigoEntorno: '19NR',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Error Operativo - TDV deja segundo recibo de contadores',
    tipoSR: 'CHGF',
    codigoEntorno: '19NS',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '7C',
    menor: 'XX',
    description: ''
  },
  {
    causalidad: 'Error Operativo - TDV mal engachada gaveta',
    tipoSR: 'CHGC',
    codigoEntorno: '19K6',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    description: ''
  },
  {
    causalidad: 'Error Operativo - TDV Mala manipulacion dispensador',
    tipoSR: 'CHGC',
    codigoEntorno: '19NS',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'ND',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Error Operativo - TDV manipulacion escrow',
    tipoSR: 'CHGC',
    codigoEntorno: '19NS',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '2C',
    menor: 'F5',
    description: ''
  },
  {
    causalidad: 'Error Operativo - TDV no borra contadores',
    tipoSR: 'CHGF',
    codigoEntorno: '19N8',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    description: ''
  },
  {
    causalidad: 'Error Operativo- Gaveta dañada por manipulacion  generando fallas',
    tipoSR: 'CHGC',
    codigoEntorno: '19N2',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Dispensador Desautenticado',
    tipoSR: 'CHGC',
    codigoEntorno: '19KP',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    description: ''
  },
  {
    causalidad: 'Error Usuario final - Efectivo depositado en Multifuncional de Mala calidad',
    tipoSR: 'CHGC',
    codigoEntorno: '19KO',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '2C',
    menor: 'TJ',
    description: ''
  },
  {
    causalidad: 'Incumplimiento y/o TDV no llevo llaves del site',
    tipoSR: 'CHGC',
    codigoEntorno: '19KL',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Mal diagnostico de Monitoreo (BELLTECH - DAVIVIENDA), modulo diferente - servicio incorrecto SLM',
    tipoSR: 'CHGC',
    codigoEntorno: '19NR',
    codigoReparacion: '54',
    categoria: '1B',
    mayor: 'XX',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Mal diagnostico de Monitoreo,(BELLTECH), modulo diferente - servicio incorrecto FLM',
    tipoSR: 'CHGF',
    codigoEntorno: '19NR',
    codigoReparacion: '54',
    categoria: '1B',
    mayor: 'XX',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Mantenimiento Preventivo',
    tipoSR: 'PM',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: ''
  },
  {
    causalidad: 'Mantenimiento Preventivo Fallido no entulado -visita fallida',
    tipoSR: 'PM',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: ''
  },
  {
    causalidad: 'Mantenimiento Preventivo Fallido restriccion de ingreso',
    tipoSR: 'PM',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: ''
  },
  {
    causalidad: 'Mantenimiento Preventivo Unidad Critica',
    tipoSR: 'PMCU',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: ''
  },
  {
    causalidad: 'Problema Aire Acondicionado en afectacion al ATM',
    tipoSR: 'CHGF',
    codigoEntorno: '19KT',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '36',
    menor: 'ZQ',
    description: ''
  },
  {
    causalidad: 'Problema Aire Acondicionado en afectacion al ATM con cambio de partes ATM',
    tipoSR: 'CHGC',
    codigoEntorno: '19KT',
    codigoReparacion: '11',
    categoria: '1B',
    mayor: 'XX',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Problema comunicaciones o equipos comunicaciones  apagados o reset equipos',
    tipoSR: 'CHGF',
    codigoEntorno: '19KQ',
    codigoReparacion: '57',
    categoria: '1B',
    mayor: 'PN',
    menor: 'D4',
    description: ''
  },
  {
    causalidad: 'Problema electrico - Equipos comunicaciones',
    tipoSR: 'CHGF',
    codigoEntorno: '19KQ',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'PN',
    menor: 'LA',
    description: ''
  },
  {
    causalidad: 'Problema electrico - No hay Fluido electrico',
    tipoSR: 'CHGF',
    codigoEntorno: '19K4',
    codigoReparacion: '47',
    categoria: '1B',
    mayor: 'CH',
    menor: 'LA',
    description: ''
  },
  {
    causalidad: 'Problema electrico - Voltajes altos',
    tipoSR: 'CHGF',
    codigoEntorno: '19K4',
    codigoReparacion: '47',
    categoria: '1B',
    mayor: 'CH',
    menor: 'LA',
    description: ''
  },
  {
    causalidad: 'Problema electrico -Problema UPS',
    tipoSR: 'CHGF',
    codigoEntorno: '19K4',
    codigoReparacion: '47',
    categoria: '1B',
    mayor: 'PN',
    menor: 'D9',
    description: ''
  },
  {
    causalidad: 'Problema Software Cliente',
    tipoSR: 'CHGC',
    codigoEntorno: '19KP',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    description: ''
  },
  {
    causalidad: 'PROYECTO Alistamiento de equipos en bodega para reinstalcion',
    tipoSR: 'RFIT',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Cliente solicita Desmonte dispensador x Remodelacion',
    tipoSR: 'DEIN',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Cliente solicita Encender ATM despues de Remodelacion',
    tipoSR: 'INST',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Cliente solicita instalacion de nuevo aplicativo',
    tipoSR: 'RFIT',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Cliente solicita Instalacion Protector teclado',
    tipoSR: 'INST',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Cliente solicita Reinstalar ATM que estaba en Bodega',
    tipoSR: 'INST',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Cliente solicita Setear gavetas, Cambio denominacion o Configuracion nueva familia',
    tipoSR: 'RFIT',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Cliente solicita Visita para revisar equipo y poner a punto el Site para Instalacion',
    tipoSR: 'SPV',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Instalacion de Gavetas',
    tipoSR: 'INST',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Instalacion de Partes nuevas por actualizacion o venta',
    tipoSR: 'INST',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'Realizar Test Cash',
    tipoSR: 'CHGF',
    codigoEntorno: '19K7',
    codigoReparacion: '03',
    categoria: '1B',
    mayor: 'ND',
    menor: 'QC',
    description: ''
  },
  {
    causalidad: 'Reparacion o Cambio Antiskimming responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: 'CR',
    menor: '3P',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio BNA responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: '2C',
    menor: 'XX',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio cerradura Fascia responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: '36',
    menor: 'FO',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio Dispensador Modulos responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: 'ND',
    menor: 'XX',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio Dispensador Presentador responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: 'ND',
    menor: 'XX',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio FDK/Op responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: 'DT',
    menor: 'E3',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio Gabinete responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: '36',
    menor: 'XX',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio Harness responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: 'ND',
    menor: 'J7',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio Impresora responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: '7C',
    menor: 'XX',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio Lectora responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: 'CR',
    menor: 'XX',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio Monitor responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: 'DT',
    menor: 'XX',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio PCCORE responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: 'CH',
    menor: 'YH',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio Shutter responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: '2C',
    menor: 'BM',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio Teclado EPP responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: 'ED',
    menor: 'EX',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reseteo ATM con Aplicativo Cliente',
    tipoSR: 'CHGF',
    codigoEntorno: '19KP',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    description: ''
  },
  {
    causalidad: 'Restriccion de Site - No acceso al ATM para NCR FLM',
    tipoSR: 'CHGF',
    codigoEntorno: '19KL',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Restriccion de Site - No acceso al ATM para NCR SLM',
    tipoSR: 'CHGC',
    codigoEntorno: '19KL',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Restriccion de Site - No hay clave de alarma Site',
    tipoSR: 'CHGF',
    codigoEntorno: '19KL',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Restriccion de Site - NO se pudo abrir cofre TDV y/o Oficina',
    tipoSR: 'CHGC',
    codigoEntorno: '19KL',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Retiro atasco en impresora',
    tipoSR: 'FLM',
    codigoEntorno: 'N/A',
    codigoReparacion: '03',
    categoria: '1B',
    mayor: '7C',
    menor: 'XX',
    description: ''
  },
  {
    causalidad: 'Retiro atasco en lectora',
    tipoSR: 'FLM',
    codigoEntorno: 'N/A',
    codigoReparacion: '03',
    categoria: '1B',
    mayor: 'CR',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Retiro Billete atascado Modulos por falla de maquina',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: '03',
    categoria: '1B',
    mayor: 'ND',
    menor: 'QC',
    description: ''
  },
  {
    causalidad: 'Retiro Billete atascado Presentador por falla de maquina',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: '03',
    categoria: '1B',
    mayor: 'ND',
    menor: 'FD',
    description: ''
  },
  {
    causalidad: 'Validacion Zona de Alarmas',
    tipoSR: 'CHGF',
    codigoEntorno: '19K3',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'PN',
    menor: 'V1',
    description: ''
  },
  {
    causalidad: 'Vandalismo Mayor',
    tipoSR: 'CHGC',
    codigoEntorno: '19NP',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'XX',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Vandalismo Mayor Con cambio de partes',
    tipoSR: 'CHGC',
    codigoEntorno: '19NP',
    codigoReparacion: '11',
    categoria: '1B',
    mayor: 'XX',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Vandalismo Menor',
    tipoSR: 'CHGF',
    codigoEntorno: '19NP',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'XX',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Error Operativo - Inactividad SSCO',
    tipoSR: 'CHGC',
    codigoEntorno: '19KR',
    codigoReparacion: '51',
    categoria: '1R',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Error Operativo - No hay SSCO en sitio',
    tipoSR: 'CHGC',
    codigoEntorno: '19NR',
    codigoReparacion: '51',
    categoria: '1R',
    mayor: '34',
    menor: 'YH',
    description: ''
  },
  {
    causalidad: 'Error Operativo - SSCO Apagado por reparacion Boveda o Site',
    tipoSR: 'CHGC',
    codigoEntorno: '19KP',
    codigoReparacion: '51',
    categoria: '1R',
    mayor: '36',
    menor: 'YH',
    description: ''
  },
  {
    causalidad: 'Error Operativo - SSCO en Supervisor',
    tipoSR: 'CHGC',
    codigoEntorno: '19KH',
    codigoReparacion: '51',
    categoria: '1R',
    mayor: '36',
    menor: 'LH',
    description: ''
  },
  {
    causalidad: 'PROYECTO Cliente solicita Apagar SSCO por desconexion',
    tipoSR: 'DEIN',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1R',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Cliente solicita Reinstalar SSCO que estaba en Bodega',
    tipoSR: 'INST',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1R',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'Reparacion o Cambio de Balanza de seguridad responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1R',
    mayor: '82',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio de Cash Box responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1R',
    mayor: 'NR',
    menor: '4Z',
    description: ''
  },
  {
    causalidad: 'Reparacion o Cambio de Cassette Reciclador responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1R',
    mayor: 'NR',
    menor: 'Q5',
    description: ''
  },
  {
    causalidad: 'Reparacion o Cambio de Disco Duro responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1R',
    mayor: 'CH',
    menor: '2V',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio de Main Module responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1R',
    mayor: 'NR',
    menor: '5Z',
    description: ''
  },
  {
    causalidad: 'Reparacion o Cambio de Reciclador de monedas responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1R',
    mayor: '8P',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio de Scanner-balanza responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1R',
    mayor: '82',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio de Spine responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1R',
    mayor: '82',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Restriccion de Site - No acceso al SSCO',
    tipoSR: 'CHGC',
    codigoEntorno: '19KL',
    codigoReparacion: '59',
    categoria: '1R',
    mayor: '36',
    menor: 'V8',
    description: ''
  }
];

console.log(datos.length);
