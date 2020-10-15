import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602712993130 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'images',
			columns: [
				{
					name: 'id',
					type: 'integer',
					unsigned: true,                     
					isPrimary: true,                    
					isGenerated: true,                  
					generationStrategy: 'increment'
				},
				{
					name: 'path',
					type: 'varchar',
				},
				{
					name: 'orphanage_id',
					type: 'integer'
				}    
			],
			foreignKeys: [
				{
					name: 'ImageOrphanage',
					columnNames: [ 'orphanage_id' ],				
					referencedTableName: 'orphanages',			// tabela que está relacionada 
					referencedColumnNames: ['id'],					// a coluna que está sendo selecionada
					onUpdate: 'CASCADE',										//altera o valor do id automaticamente
					onDelete: 'CASCADE',
				}
			]
		}))
    }

  public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('images');
    }

}
