import { MigrationInterface, QueryRunner } from "typeorm";

export class ClientesTable1729197517525 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `CREATE TABLE "clientes" (
              id uuid NOT NULL DEFAULT uuid_generate_v4(),
              nome varchar(256) NOT NULL,
              salario varchar(256) NOT NULL,
              empresa varchar(256) NOT NULL
          );`,
      );
      await queryRunner.query(
        `
          INSERT INTO "clientes" (id, nome, salario, empresa)
          VALUES 
          (uuid_generate_v4(), 'Cliente 1', '5000', '100000'),
          (uuid_generate_v4(), 'Cliente 2', '6000', '200000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000'),
          (uuid_generate_v4(), 'Cliente 3', '7000', '300000')
          
        `
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`DROP TABLE IF EXISTS clientes;`);
    }
  }