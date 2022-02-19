export declare class Photo {
    link: string;
    path: string;
}
export declare class RegisterDto {
    email: string;
    password: string;
    address?: string;
    salt?: string;
}
export declare enum Role {
    Patient = "PATIENT",
    Doctor = "DOCTOR",
    Admin = "ADMIN"
}
