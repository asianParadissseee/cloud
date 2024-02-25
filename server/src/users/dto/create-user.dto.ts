import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        default: "test@test.com"
    })
    email: string
    @ApiProperty({
        default: "John Smith"
    })
    fullName: string
    @ApiProperty({
        default: "123456789"
    })
    password: string
}
