export class NextMeeting {
    constructor(
        public id : number = 0,
        public patientName : string = '',
        public dateMeeting : string = '',
        public hour : string = '',
        public amount : number = 0,
        public isImportant : boolean = true,
        public photo : string = '',
        public phoneNumber : string = ''
    ){}
}