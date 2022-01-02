import { RegisterDto } from '../dto/dto';
import { AccountService } from '../account/account.service';
import { UpdateAuthDto } from './dto/update-auth.dto';
export declare class AuthService {
    private readonly accountService;
    constructor(accountService: AccountService);
    register(loginDto: RegisterDto): Promise<{
        first_name: string;
        last_name: string;
        age: number;
        address: string;
        email: string;
        picture: import("../dto/dto").Photo;
        created_at: Date;
        history: import("../entities/history.entites").History[];
        _id: any;
        __v?: any;
        $locals: Record<string, unknown>;
        $op: string;
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError;
        id?: any;
        isNew: boolean;
        modelName: string;
        schema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any>, any>;
    }>;
    encryption(password: string): Promise<{
        password: string;
        salt: string;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
}
