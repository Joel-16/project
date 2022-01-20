export declare class CreateAccountDto {
    email: string;
    password: string;
    address?: string;
    salt?: string;
}
export declare enum Role {
    Patient = "PATIENT",
    Doctor = "DOCTOR"
}
