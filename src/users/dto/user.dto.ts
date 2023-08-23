import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class UserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  refreshToken?: string;
}
