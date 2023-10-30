export class AuthResponse {
    public token: string | undefined;
    public username: string | undefined;
    public email: string | undefined;
    public roles: Array<string> = [];
    
}
