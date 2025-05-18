import { Transform } from 'class-transformer';
import {
  Contains,
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateHairdresserDto {
  @Transform(({ value }: { value: string }) => value.trim())
  @IsString()
  @MinLength(5, {
    message: 'Name is too short. Min length is 5 characters',
  })
  @MaxLength(15, {
    message: 'Name is too long. Max length is 15 characters',
  })
  name: string;

  @Transform(({ value }: { value: string }) => value.trim())
  @IsString()
  @MinLength(3)
  @MaxLength(12)
  nickname: string;

  @Transform(({ value }: { value: string }) => value.trim())
  @IsEmail(
    {},
    {
      message: 'Invalid email address',
    },
  )
  email: string;

  @Transform(({ value }: { value: string }) => value.trim())
  @IsString()
  @MinLength(8, {
    message: 'Password is too short. Min length is 8 characters',
  })
  @MaxLength(10, {
    message: 'Password is too long. Max length is 10 characters',
  })
  @Contains(' ', {
    message: 'Password must contain at least one space',
  })
  password: string;
}
