export class NextMeeting {
    constructor(
        public id : number,
        public patientName : string,
        public dateMeeting : string,
        public hour : string,
        public amount : number,
        public isImportant : boolean,
        public photo : string
    ){}
}