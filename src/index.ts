import * as readXlsxFile from 'read-excel-file';

console.log('Here I am!');

const schema = {
  'Data contabile': {prop: 'data_cotabile', type: Date},
  'Data valuta': {prop: 'data_valuta', type: Date},
  Causale: {prop: 'causale', type: String},
  Descrizione: {prop: 'descrizione', type: String},
  operazione: {prop: 'operazione', type: String},
  Importo: {prop: 'importo', type: String},
};

readXlsxFile(
  '../../data/work/ING DIRECT CCA/MovimentiContoCorrenteArancio.xls',
  {
    schema,
    transformData(data: any) {
      // Adds header row to the data.
      //return [['ID', 'NAME', ...]].concat(data)
      // Removes empty rows.
      return data.filter(
        (row: any) => row.filter((column: any) => column !== null).length > 0
      );
    },
  }
);
