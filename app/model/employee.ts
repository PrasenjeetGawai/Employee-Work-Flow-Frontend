export interface Employee {

    id:number,
    name:string,
    status:string,
    department:string,
    mobileNo:string,
    emailId:string,
    createdBy:string,
    createdDate:Date,
    udatedBy:string,
    updatedDate:Date,
    salary:number,
    country:{
        c_id:number,
        c_name:string
    }

}