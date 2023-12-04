import { randomUUID } from "crypto"

export class Contact {
    readonly id: string
    name: string
    email: string
    fone: string
    register_at: Date
    userId: string

    constructor() {
        this.id = randomUUID()
        this.register_at =  new Date()
    }
}