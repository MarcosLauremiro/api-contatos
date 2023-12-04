import { ContactService } from './contacts.service';
import { ContactsControler } from "./contacts.controller";
import { PrismaService } from 'src/database/prisma.service';
import { Module } from '@nestjs/common';

@Module({
    controllers: [ContactsControler],
    providers: [ContactService, PrismaService]
})

export class ContactModule {}