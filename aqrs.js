const datosAqrs = [
    {
        descripcion: 'Parte que llego Defectuosa o Dañada',
        nomenclatura: 'AQRD-NP',
        ejemplo: 'AQRD-8772409570. Llego dañada la parte 9570.',
    },
    {
        descripcion: 'Parte Mal Identificada o Equivocada, NPS = Numero de Parte Solicitada.  NPR = Numero de Parte Recibida.',
        nomenclatura: 'AQRI-NPS-NPR',
        ejemplo: 'AQRI-8772409570-8772408690. El ingeniero solicito la 9570 y le llego la 8690.',
    },
    {
        descripcion: 'Parte Dañada por Mal Empaque o Sin Empaque.',
        nomenclatura: 'AQRE-NP',
        ejemplo: 'AQRE-8772409570',
    },
    {
        descripcion: 'Parte Que Llego a Zona Fronteriza Sin Documentación o con Problemas de Compex (Solo Aplica en México)',
        nomenclatura: 'AQRC-NP',
        ejemplo: 'AQRC-8772409570',
    },
    {
        descripcion: 'Parte Que Llego SIN IDENTIFICACION',
        nomenclatura: 'AQRN-NP',
        ejemplo: 'AQRN-XXXXXXXXXX',
    },
    {
        descripcion: 'La Parte se Desinstalo por Falla en la Reparacion Antes de 30 Dias.',
        nomenclatura: 'AQRR-NP-DD/MM/AA-dd/mm/aa',
        ejemplo: 'AQRD-8772409570-17/03/09-10/04/09',
    },
    {
        descripcion: 'La Transportadora de Valores Llego con un Retraso de XX:xx hrs.',
        nomenclatura: 'AQRTDV-HH:MMX',
        ejemplo: 'AQRTDV-02:30',
    },
    {
        descripcion: 'La Transportadora de Valores NO LLEGO a la Cita y se le Espero HH Horas y MM Minutos',
        nomenclatura: 'AQRTDV-NOLLEGOHH:MMX',
        ejemplo: 'AQRTDV-NOLLEGO01:24',
    },    
    {
        descripcion: 'El Acceso es Permitido Horas Despues de la Cita',
        nomenclatura: 'AQRACC-HH:MM-hh:mm',
        ejemplo: 'AQRACC01:30-12:00',
    },    
    {
        descripcion: 'El Acceso Fue Permitido Una Fecha Despues de lo Solicitado',
        nomenclatura: 'AQRACC-DD/MM HH:MM-dd/mm hh:mm',
        ejemplo: 'AQRACC23/01 09:20-24/01 12:00',
    },    
    {
        descripcion: 'NO se Permitio el Acceso a la Empresa',
        nomenclatura: 'AQRACC-SINACCESO-HH:MM',
        ejemplo: 'AQRACC-SINACCESO-00:59',
    },    
    {
        descripcion: 'Proveedor de Servicios Llego con un Retraso de XX:xx hrs.',
        nomenclatura: 'AQRPDS-HH:MMX ',
        ejemplo: 'AQRPDS-02:30',
    },    
    {
        descripcion: 'Proveedor de Servicios NO LLEGO a la Cita y se le Espero HH Horas y MM Minutos',
        nomenclatura: 'AQRPDS-NOLLEGOHH:MMX',
        ejemplo: 'AQRPDS-02:30 NO LLEGO',
    },    
    {
        descripcion: 'Extracción de Número de Transacciones y su Última Fecha de Borrado de Transacciones (TALLIES)',
        nomenclatura: 'AQRTTD-DD/MM/AA-dddddd',
        ejemplo: 'AQRTTD-17/12/09-004321',
    },    
    {
        descripcion: 'Generan Servicio Documentando una Falla y en Sitio Encontramos algo Diferente. Recategorizacion de Servicio.',
        nomenclatura: 'AQRAOF',
        ejemplo: '',
    },    
    {
        descripcion: 'Solicitan SLM que en Realidad es un FLM (Pasa Mucho con Servicios de Dispensador). Recategorizacion de Servicio.',
        nomenclatura: 'AQRTASK',
        ejemplo: '',
    },    
    {
        descripcion: 'La Solución NO esta en Manos de NCR si no del Equipo de Monitoreo o Banco. Recategorizacion de Servicio.',
        nomenclatura: 'AQRIM',
        ejemplo: '',
    },    
    {
        descripcion: 'AQR Usado por una Mal Monitoreo de Belltech y Davivienda ',
        nomenclatura: 'AQRBELL ',
        ejemplo: '',
    },    
    {
        descripcion: 'Generan Servicio Documentando una Falla y en Sitio Encontramos algo Diferente. (Belltech y Davivienda)',
        nomenclatura: 'AQRBELL ',
        ejemplo: '',
    },    
    {
        descripcion: 'Solicitan SLM que en realidad es un FLM (Pasa mucho con servicios de dispensador) (Belltech y Davivienda)',
        nomenclatura: 'AQRBELL ',
        ejemplo: '',
    },    
    {
        descripcion: 'La Solución NO esta en Manos de NCR si no del Equipo de Monitoreo o Banco. (Belltech y Davivienda)',
        nomenclatura: 'AQRBELL',
        ejemplo: '',
    }
   
]