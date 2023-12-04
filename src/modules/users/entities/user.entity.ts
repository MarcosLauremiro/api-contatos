import { Exclude } from "class-transformer";
import { randomUUID } from "node:crypto";

export class User {
    readonly id: string;
    name: string;
    email: string;
    fone: string;
    register_at: Date;

    @Exclude()
    password: string;

    constructor() {
        this.id = randomUUID()
        this.register_at = new Date()
    }
}