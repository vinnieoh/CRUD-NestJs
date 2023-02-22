import { Controller, Post, Get, Delete, Body, Param, Put, Patch } from "@nestjs/common";


@Controller("users")
export class UserControler {

    @Post()
    async Create(@Body() body) {
        return {body};
    }

    @Get()
    async read() {
        return {users:[]};
    }

    @Get(':id')
    async readOne(@Param() params) {
        return {user:{}, params}
    }


    @Put(':id')
    async updade(@Body() body, @Param() params) {
        return {
            method: 'put',
            body,
            params
        };
    }

    @Patch(':id')
    async updadePartial(@Body() body, @Param() params) {
        return {
            method: 'patch',
            body,
            params
        };
    }

    @Delete()
    async delete(@Param() param) {
        return {
            param
        };
    }

}