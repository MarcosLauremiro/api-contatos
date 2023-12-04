import { Module } from '@nestjs/common';
import { ContactModule } from './modules/contacts/contacts.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [ContactModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
