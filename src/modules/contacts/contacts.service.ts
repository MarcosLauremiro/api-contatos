import { CreateContactDto } from './dtos/create-contact.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Contact } from './entities/contact.entitie';
import { UpdateContactDto } from './dtos/update-user.dto';
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
    
    async delete(id: string) {
        const contact = await this.prisma.contact.findUnique({
            where: {id}
        })

        if (!contact) {
            throw new NotFoundException('Contact not found.')
        }

        await this.prisma.contact.delete({where: {id}})
    }

    async update(id: string, updateContactDto: UpdateContactDto) {
        const contact = await this.prisma.contact.findUnique({
            where: {id}
        })

        if (!contact) {
            throw new NotFoundException('Contact not found.')
        }

        const updateContact = await this.prisma.contact.update({
            where: {id},
            data: {...updateContactDto}
        })

        return updateContact
    }
}