import { AccountService } from './account/account.service';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { RegisterDto } from './dto/dto';
export declare class AppController {
    private readonly appService;
    private readonly accountService;
    private readonly authService;
    constructor(appService: AppService, accountService: AccountService, authService: AuthService);
    getHello(): string;
    register(body: RegisterDto): Promise<{
        first_name: string;
        last_name: string;
        age: number;
        address: string;
        email: string;
        picture: import("./dto/dto").Photo;
        created_at: Date;
        history: import("./entities/history.entites").History[];
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
    all(): Promise<(import("./entities/account.entity").Account & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    delete(): Promise<import("mongodb").DeleteResult>;
}
