import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { ContactService } from './contacts.service';
import { CreateContactDto } from './dtos/create-contact.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('contacts')
@Controller('contacts')
export class ContactsControler {
    constructor (private contactService: ContactService) {}

    @Post('')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    create(@Body() createContactDto: CreateContactDto, @Request() req) {
        return this.contactService.create(createContactDto, req.user.id)
    }
    
    @Get('')
    findAll(){
        return this.contactService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.contactService.findOne(id)
    }
}