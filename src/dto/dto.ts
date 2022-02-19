export class Photo {
   link : string;
   path : string;
}
export class RegisterDto {
   email : string;
   password : string;
   address? : string;
   salt? :string
}

export enum Role{
   Patient = 'PATIENT',
   Doctor = 'DOCTOR',
   Admin = 'ADMIN'
}