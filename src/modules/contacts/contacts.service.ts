import { CreateContactDto } from './dtos/create-contact.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Contact } from './entities/contact.entitie';
@Injectable()
export class ContactService {
    constructor(private prisma: PrismaService) { }

    async create(createContactDto: CreateContactDto, userId: string) {
        const contact = new Contact()
        Object.assign(contact, {
            ...createContactDto
        })

        const newContact = await this.prisma.contact.create({
            data: { ...contact, userId: userId }
        })

        return newContact
    }

    async findOne(id: string) {
        const contact = await this.prisma.contact.findFirst({
            where: { id }
        })
        return contact
    }

    async findAll() {
        const contacts = await this.prisma.contact.findMany()
        return contacts
    }
}