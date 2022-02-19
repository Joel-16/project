export class Photo {
   link : string;
   path : string;
}
export class UpdateProfile {
   first_name? : string;
   last_name? : string;
   address? :string
   state? : string;
   lga? :string
   image? :{
      link: string,
      path: string
   }
}
