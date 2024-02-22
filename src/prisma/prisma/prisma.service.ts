import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    /**
     * Habilitando a conexão com o banco de dados
     * Utilizando o método $connect
     */
    async onModuleInit() {
        await this.$connect();
    }
}
