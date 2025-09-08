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
    causalidad: 'Error Operativo - Dinero en mal estado (tomar fotos) o generando atascos ',
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
    causalidad: 'Error Operativo - Gaveta sin dinero ',
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
    causalidad: 'Error Operativo - TDV mal engachada gaveta ',
    tipoSR: 'CHGC',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Falla de Aplicativo sin reinstalacion',
    tipoSR: 'CHGC',
    codigoReparacion: '51',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Falla de Software (tomar fotos)',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Sensor de puerta abierto',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Sensor de seguridad activado',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Sin comunicacion con el servidor',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Tiempo de respuesta agotado',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Actualizacion de software fallida',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Reemplazo de hardware necesario',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Problemas con la red electrica',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Fallo en el suministro de energia',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Dispositivo de seguridad activado',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Mantenimiento preventivo necesario',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Limpieza de componentes interna requerida',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Revisión de conexiones eléctricas',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Ajuste de componentes mecánicos',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Sustitución de piezas dañadas',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Verificación de voltaje y corriente',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Comprobación de fusibles y protectores',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Inspección de cables y conectores',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Prueba de funcionamiento general',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Verificación de configuraciones de red',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Sincronización de reloj y fecha',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Restauración de configuraciones de fábrica',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Actualización de firmware necesaria',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Revisión de logs del sistema',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Análisis de causa raíz',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Implementación de acciones correctivas',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Seguimiento a acciones correctivas',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de solicitud de servicio',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Reapertura de solicitud de servicio',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Derivación a soporte especializado',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Solicitud de repuestos',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Coordinación de visita técnica',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Ejecución de visita técnica',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de visita técnica',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Seguimiento a visita técnica',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de visita técnica',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Solicitud de compensación',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Aprobación de compensación',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Pago de compensación',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Solicitud de retroalimentación',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Recepción de retroalimentación',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Implementación de mejoras',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Seguimiento a mejoras',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de mejoras',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de cierre',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Archivo de cierre',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación de cierre',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre administrativo',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Generación de reportes',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Envío de reportes',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Recepción de reportes',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Análisis de reportes',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Toma de decisiones',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Plan de acción',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Ejecución de plan de acción',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Seguimiento a plan de acción',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de plan de acción',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de plan de acción',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Archivo de plan de acción',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación de plan de acción',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de ciclo',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de ciclo',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Archivo de ciclo',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación de ciclo',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre definitivo',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe definitivo',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Archivo definitivo',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación definitiva',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Archivo de auditoría',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de auditoría',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación de auditoría',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de auditoría',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Generación de claves',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Distribución de claves',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Activación de claves',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Desactivación de claves',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Eliminación de claves',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Recuperación de claves',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Auditoría de claves',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Monitoreo de claves',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Notificación de claves',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Respaldo de claves',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Restauración de claves',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Gestión de claves',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Políticas de claves',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cumplimiento de políticas',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Capacitación en manejo de claves',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Concientización sobre seguridad',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Evaluación de riesgos',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Tratamiento de riesgos',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Monitoreo de riesgos',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Comunicación de riesgos',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Registro de riesgos',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de riesgos',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Plan de tratamiento de riesgos',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Ejecución de plan de tratamiento',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Seguimiento a plan de tratamiento',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de plan de tratamiento',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de plan de tratamiento',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Archivo de plan de tratamiento',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación de plan de tratamiento',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de contingencia',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de contingencia',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Archivo de contingencia',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación de contingencia',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de emergencia',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de emergencia',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Archivo de emergencia',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación de emergencia',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de crisis',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de crisis',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Archivo de crisis',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación de crisis',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de auditoría externa',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de auditoría externa',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación de auditoría externa',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de informe de auditoría externa',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de cierre de auditoría externa',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Archivo de cierre de auditoría externa',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación de cierre de auditoría externa',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de informe final',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de cierre final',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Archivo de cierre final',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación de cierre final',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de auditoría continua',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de auditoría continua',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación de auditoría continua',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de informe de auditoría continua',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de cierre de auditoría continua',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Archivo de cierre de auditoría continua',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación de cierre de auditoría continua',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de auditoría programada',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de auditoría programada',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación de auditoría programada',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de informe de auditoría programada',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de cierre de auditoría programada',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Archivo de cierre de auditoría programada',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación de cierre de auditoría programada',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de auditoría excepcional',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de auditoría excepcional',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación de auditoría excepcional',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de informe de auditoría excepcional',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de cierre de auditoría excepcional',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Archivo de cierre de auditoría excepcional',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación de cierre de auditoría excepcional',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de auditoría continua excepcional',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de auditoría continua excepcional',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación de auditoría continua excepcional',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Cierre de informe de auditoría continua excepcional',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Informe de cierre de auditoría continua excepcional',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Archivo de cierre de auditoría continua excepcional',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  },
  {
    causalidad: 'Error Operativo - Validación de cierre de auditoría continua excepcional',
    tipoSR: 'CHGC',
    codigoReparacion: '59',
    categoria: '1B',
    mayor: 'ND',
    menor: 'CC',
    codigoEntorno: '19K6',
    description: ''
  }
]