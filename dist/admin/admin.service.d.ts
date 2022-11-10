import { Repository } from 'typeorm';
import { Admin } from '../entities/admin.entity';
export declare class AdminService {
    private readonly admin;
    constructor(admin: Repository<Admin>);
    create(CreateAdminDto: any): Promise<{
        email: any;
        password: any;
        salt: any;
    } & Admin>;
    findAll(): string;
    findOne(email: string): Promise<Admin>;
    remove(id: number): string;
}
