export const database= ()=>{
   if (process.env.NODE_ENV==='production'){
      return  `${process.env.DB}`
   }else {
      return  `${process.env.DB_LOCAL}`;
   }

}
