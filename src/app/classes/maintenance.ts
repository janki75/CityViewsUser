

export class maintenance_class
{
    constructor(
        public maintenanceId:number,
        public amount:number,
        public date:Date,
        public month:number,
        public paymentMode:string,
        public flatId:number,
        public paidstr?:string


){}
}
