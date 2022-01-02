export class Photo {
   name : string;
   link : string;
   path : string;
}
export class RegisterDto {
   email : string;
   password : string;
   address? : string;
   salt? :string
}