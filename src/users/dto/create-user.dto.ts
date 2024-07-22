import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@test.сom',
  })
  email: string;

  @ApiProperty({
    default: 'Бібуді Ломті',
  })
  fullName: string;

  @ApiProperty({
    default: '123',
  })
  password: string;
}