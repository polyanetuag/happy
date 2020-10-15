import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602630944267 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {      // realizar alterações, criar tabela, criar ou deletar um novo campo
      await queryRunner.createTable(new Table({
        name: 'orphanages',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,                     // sempre positiva
            isPrimary: true,                    // chave única 
            isGenerated: true,                  // gerada automaticamente
            generationStrategy: 'increment',    // id incrementado automaticamente
          },
          {
            name: 'name',
            type: 'varchar'                     // caractere curto
          },
          {
            name: 'latitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: 'longitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: 'about',
            type: 'text',
          },
          {
            name: 'instructions',
            type: 'text',
          },
          {
            name: 'opening_hours',
            type: 'varchar'                     // caractere curto
          },
          {
            name: 'open_on_weekends',
            type: 'boolean',
            default: false,
          }
        ]
        }))
    }

  public async down(queryRunner: QueryRunner): Promise<void> {     // desfazer o que foi feito no up
    await queryRunner.dropTable('orphanages')
    }

}
