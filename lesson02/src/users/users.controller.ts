import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /*
       1. GET /users
       2. GET /users/:id
       3. GET /users/interns
       4. PATCH
       5. DELETE
    */

    @Get()
    findAll(){
        return []
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return [id]
    }

    @Get('interns')
    findAllinterns(){
        return []
    }

}
