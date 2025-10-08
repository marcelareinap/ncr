const datos = [
  {
    causalidad: 'Acompañamiento - Apertura y NO Llega Proveedor o NO Tiene Acceso',
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
    causalidad: 'Aprovisionamiento de Papel Exitoso',
    tipoSR: 'CHGF',
    codigoEntorno: '19KM',
    codigoReparacion: '05',
    categoria: '1B',
    mayor: '7C',
    menor: 'S5',
    description: ''
  },
  {
    causalidad: 'Aprovisionamiento de Papel Fallido NO Hay Papel en Site',
    tipoSR: 'CHGF',
    codigoEntorno: '19KM',
    codigoReparacion: '14',
    categoria: '1B',
    mayor: '7C',
    menor: 'S5',
    description: ''
  },
  {
    causalidad: 'Bajar Auditoria, Log de Errores, Silent Debug, Configuracion por Solicitud del Cliente o de NCR',
    tipoSR: 'CHGC',
    codigoEntorno: '19KI',
    codigoReparacion: '34',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
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
    causalidad: 'Cliente Solicita Autenticar Dispensador por Cambio Software',
    tipoSR: 'CHGC',
    codigoEntorno: '19KP',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'YH',
    description: ''
  },
   {
    causalidad: 'Cliente Solicita Borrado de Llaves de Encripcion PROYECTO BANCOLOMBIA',
    tipoSR: 'FLM4',
    codigoEntorno: 'N/A',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    description: ''
  },
  {
    causalidad: 'Cliente Solicita Copia Llave de Chapa',
    tipoSR: 'CHGC',
    codigoEntorno: '19KC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '36',
    menor: 'V8',
    description: ''
  },

  {
    causalidad: 'Cliente Solicita Ingreso Llaves de Encripcion',
    tipoSR: 'CHGF',
    codigoEntorno: '19KA',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Aprovisionamiento de Papel POR Mal Cargado',
    tipoSR: 'CHGF',
    codigoEntorno: '19KB',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '7C',
    menor: 'S5',
    description: ''
  },
  {
    causalidad: 'Error Operativo - ATM Apagado por Reparacion Boveda - Site - PM programado',
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
    causalidad: 'Error Operativo - Cable Dispensador Suelto',
    tipoSR: 'CHGC',
    codigoEntorno: '19NS',
    codigoReparacion: '02',
    categoria: '1B',
    mayor: 'ND',
    menor: 'J7',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cable Potencia Desconectado',
    tipoSR: 'CHGF',
    codigoEntorno: '19K4',
    codigoReparacion: '02',
    categoria: '1B',
    mayor: '36',
    menor: 'ZU',
    description: ''
  },
    {
    causalidad: 'Error Operativo - Dinero en MAL Estado (TOMAR FOTOS) o Generando Atascos',
    tipoSR: 'CHGC',
    codigoEntorno: '19K7',
    codigoReparacion: '59',
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
    causalidad: 'Error Operativo - Dispositivo Interno Desconectado',
    tipoSR: 'CHGF',
    codigoEntorno: '19KB',
    codigoReparacion: '02',
    categoria: '1B',
    mayor: 'CH',
    menor: 'J7',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Fajilla de Billetes Obstruia Sensor',
    tipoSR: 'CHGC',
    codigoEntorno: '19K7',
    codigoReparacion: '03',
    categoria: '1B',
    mayor: 'ND',
    menor: 'BL',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Falla de Aplicativo con Reinstalacion',
    tipoSR: 'CHGC',
    codigoEntorno: '19KP',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Fascia Abierta',
    tipoSR: 'CHGF',
    codigoEntorno: '19KV',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Fascia Dejada Sin Asegurar',
    tipoSR: 'CHGF',
    codigoEntorno: '19KV',
    codigoReparacion: '02',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Gaveta SIN Dinero',
    tipoSR: 'CHGC',
    codigoEntorno: '19K5',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Gavetas BNA Llenas de Dinero Obstruyendo Sensor',
    tipoSR: 'CHGC',
    codigoEntorno: '19KE',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '2C',
    menor: 'GR',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Inactividad ATM O Sin Fallas  NFF',
    tipoSR: 'CHGF',
    codigoEntorno: '19KR',
    codigoReparacion: '53',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
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
    causalidad: 'Error Operativo - Instalacion de Aplicativo por Daño NO NCR',
    tipoSR: 'CHGC',
    codigoEntorno: '19KP',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Mal Enrutado el Cable Comunicaciones o Suelto',
    tipoSR: 'CHGF',
    codigoEntorno: '19K9',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'PN',
    menor: 'D4',
    description: ''
  },
  {
    causalidad: 'Error Operativo - NO Hay ATM en Sitio',
    tipoSR: 'CHGF',
    codigoEntorno: '19NR',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
   {
    causalidad: 'Error Operativo - No Hay SSCO en Sitio',
    tipoSR: 'CHGC',
    codigoEntorno: '19NR',
    codigoReparacion: '51',
    categoria: '1R',
    mayor: '34',
    menor: 'YH',
    description: ''
  },
  {
    causalidad: 'Error Operativo - SSCO Apagado por Reparacion Boveda o Site',
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
    causalidad: 'Error Operativo - TDV Deja Segundo Recibo de Contadores',
    tipoSR: 'CHGF',
    codigoEntorno: '19NS',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '7C',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Error Operativo - TDV Mal Engachada Gaveta',
    tipoSR: 'CHGC',
    codigoEntorno: '19K6',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    description: ''
  },
  {
    causalidad: 'Error Operativo - TDV Mala Manipulacion Dispensador',
    tipoSR: 'CHGC',
    codigoEntorno: '19NS',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'ND',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Error Operativo - TDV Manipulacion Escrow',
    tipoSR: 'CHGC',
    codigoEntorno: '19NS',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '2C',
    menor: 'F5',
    description: ''
  },
  {
    causalidad: 'Error Operativo - TDV NO Borra Contadores',
    tipoSR: 'CHGF',
    codigoEntorno: '19N8',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'CH',
    menor: 'X1',
    description: ''
  },
  {
    causalidad: 'Error Operativo- Gaveta Dañada por manipulacion Generando Fallas',
    tipoSR: 'CHGC',
    codigoEntorno: '19N2',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    description: ''
  },
  {
    causalidad: 'Error Usuario Final - Efectivo Depositado en Multifuncional de Mala calidad',
    tipoSR: 'CHGC',
    codigoEntorno: '19KO',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '2C',
    menor: 'TJ',
    description: ''
  },
  {
    causalidad: 'Incumplimiento y/o TDV NO Llevo Llaves del Site',
    tipoSR: 'CHGC',
    codigoEntorno: '19KL',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Mal Diagnostico de Monitoreo (BELLTECH - DAVIVIENDA), Modulo Diferente - Servicio Incorrecto SLM',
    tipoSR: 'CHGC',
    codigoEntorno: '19NR',
    codigoReparacion: '54',
    categoria: '1B',
    mayor: 'XX',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Mal Diagnostico de Monitoreo,(BELLTECH), Modulo Diferente - Servicio Incorrecto FLM',
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
    causalidad: 'Mantenimiento Preventivo Fallido NO entulado - Visita Fallida',
    tipoSR: 'PM',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: ''
  },
  {
    causalidad: 'Mantenimiento Preventivo Fallido Restriccion de Ingreso',
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
    causalidad: 'Problema Aire Acondicionado en Afectacion al ATM',
    tipoSR: 'CHGF',
    codigoEntorno: '19KT',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '36',
    menor: 'ZQ',
    description: ''
  },
  {
    causalidad: 'Problema Aire Acondicionado en Afectacion al ATM con Cambio de Partes ATM',
    tipoSR: 'CHGC',
    codigoEntorno: '19KT',
    codigoReparacion: '11',
    categoria: '1B',
    mayor: 'XX',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Problema Comunicaciones o Equipos Comunicaciones Apagados o Reset Equipos',
    tipoSR: 'CHGF',
    codigoEntorno: '19KQ',
    codigoReparacion: '57',
    categoria: '1B',
    mayor: 'PN',
    menor: 'D4',
    description: ''
  },
  {
    causalidad: 'Problema Electrico - Equipos Comunicaciones',
    tipoSR: 'CHGF',
    codigoEntorno: '19KQ',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'PN',
    menor: 'LA',
    description: ''
  },
  {
    causalidad: 'Problema Electrico - NO Hay Fluido Electrico',
    tipoSR: 'CHGF',
    codigoEntorno: '19K4',
    codigoReparacion: '47',
    categoria: '1B',
    mayor: 'CH',
    menor: 'LA',
    description: ''
  },
  {
    causalidad: 'Problema Electrico - Voltajes Altos',
    tipoSR: 'CHGF',
    codigoEntorno: '19K4',
    codigoReparacion: '47',
    categoria: '1B',
    mayor: 'CH',
    menor: 'LA',
    description: ''
  },
  {
    causalidad: 'Problema Electrico - Problema UPS',
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
    causalidad: 'PROYECTO Alistamiento de Equipos en Bodega para Reinstalcion',
    tipoSR: 'RFIT',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
   {
    causalidad: 'PROYECTO Cliente Solicita Apagar SSCO por Desconexion',
    tipoSR: 'DEIN',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1R',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Cliente Solicita Desmonte Dispensador por Remodelacion',
    tipoSR: 'DEIN',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Cliente Solicita Encender ATM Despues de Remodelacion',
    tipoSR: 'INST',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Cliente Solicita Instalacion de Nuevo Aplicativo',
    tipoSR: 'RFIT',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Cliente Solicita Instalacion Protector Teclado',
    tipoSR: 'INST',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Cliente Solicita Reinstalar ATM que Estaba en Bodega',
    tipoSR: 'INST',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Cliente Solicita Reinstalar SSCO que Estaba en Bodega',
    tipoSR: 'INST',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1R',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Cliente Solicita Setear Gavetas, Cambio Denominacion o Configuracion Nueva Familia',
    tipoSR: 'RFIT',
    codigoEntorno: 'N/A',
    codigoReparacion: '0',
    categoria: '1B',
    mayor: '0',
    menor: '0',
    description: 'SR de proyectos'
  },
  {
    causalidad: 'PROYECTO Cliente Solicita Visita para Revisar Equipo y Poner a Punto el Site para Instalacion',
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
    causalidad: 'PROYECTO Instalacion de Partes Nuevas por Actualizacion o Venta',
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
    causalidad: 'Reparacion o Cambio Antiskimming Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: 'CR',
    menor: '3P',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio BNA Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: '2C',
    menor: 'XX',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio Cerradura Fascia Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: '36',
    menor: 'FO',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio de Balanza de Seguridad Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1R',
    mayor: '82',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio de Cash Box Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1R',
    mayor: 'NR',
    menor: '4Z',
    description: ''
  },
  {
    causalidad: 'Reparacion o Cambio de Cassette Reciclador Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1R',
    mayor: 'NR',
    menor: 'Q5',
    description: ''
  },
  {
    causalidad: 'Reparacion o Cambio de Disco Duro Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1R',
    mayor: 'CH',
    menor: '2V',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio de Main Module Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1R',
    mayor: 'NR',
    menor: '5Z',
    description: ''
  },
  {
    causalidad: 'Reparacion o Cambio de Reciclador de Monedas Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1R',
    mayor: '8P',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio de Scanner-Balanza Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1R',
    mayor: '82',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio de Spine Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1R',
    mayor: '82',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio Dispensador Modulos Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: 'ND',
    menor: 'XX',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio Dispensador Presentador Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: 'ND',
    menor: 'XX',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio FDK/Op Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: 'DT',
    menor: 'E3',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio Gabinete Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: '36',
    menor: 'XX',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio Harness Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: 'ND',
    menor: 'J7',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio Impresora Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: '7C',
    menor: 'XX',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio Lectora Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: 'CR',
    menor: 'XX',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio Monitor / Display Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: 'DT',
    menor: 'XX',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio PCCORE Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: 'CH',
    menor: 'YH',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio Shutter Responsabilidad de NCR',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: 'XX',
    categoria: '1B',
    mayor: '2C',
    menor: 'BM',
    description: 'XX-DEPENDE SI ES REPARACION O CAMBIO Y DISPOSITIVO DE FALLA'
  },
  {
    causalidad: 'Reparacion o Cambio Teclado EPP Responsabilidad de NCR',
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
    causalidad: 'Restriccion de Site - No Acceso al ATM Para NCR FLM',
    tipoSR: 'CHGF',
    codigoEntorno: '19KL',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Restriccion de Site - No Acceso al ATM Para NCR SLM',
    tipoSR: 'CHGC',
    codigoEntorno: '19KL',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
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
  },
  {
    causalidad: 'Restriccion de Site - No Hay Clave de Alarma Site',
    tipoSR: 'CHGF',
    codigoEntorno: '19KL',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Restriccion de Site - NO se Pudo Abrir Cofre TDV y/o Oficina',
    tipoSR: 'CHGC',
    codigoEntorno: '19KL',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: '36',
    menor: 'W3',
    description: ''
  },
  {
    causalidad: 'Retiro Atasco en Impresora',
    tipoSR: 'FLM',
    codigoEntorno: 'N/A',
    codigoReparacion: '03',
    categoria: '1B',
    mayor: '7C',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Retiro Atasco en lectora',
    tipoSR: 'FLM',
    codigoEntorno: 'N/A',
    codigoReparacion: '03',
    categoria: '1B',
    mayor: 'CR',
    menor: 'XX',
    description: 'XX-DEPENDE DE DISPOSITIVO EN FALLA'
  },
  {
    causalidad: 'Retiro Billete Atascado Modulos por Falla de Maquina',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: '03',
    categoria: '1B',
    mayor: 'ND',
    menor: 'QC',
    description: ''
  },
  {
    causalidad: 'Retiro Billete Atascado Presentador por Falla de Maquina',
    tipoSR: 'MNT',
    codigoEntorno: 'N/A',
    codigoReparacion: '03',
    categoria: '1B',
    mayor: 'ND',
    menor: 'FD',
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
    causalidad: 'Vandalismo Mayor Con cambio de Partes',
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
];

console.log(datos.length);
