export class PatientToAdd{
    constructor(
        public id : number,
        public nombre : string,
        public paterno : string,
        public materno : string,
        public birthday : string,
        public gender : string,
        public phoneNumber : string,
        public civilStatus : string,
        public notaImportante : string
    ){
        
    }
}