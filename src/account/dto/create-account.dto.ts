export class CreateAccountDto {
   email : string;
   password : string;
   address? : string;
   salt? :string
}

export enum Role{
   Patient = 'PATIENT',
   Doctor = 'DOCTOR'
}