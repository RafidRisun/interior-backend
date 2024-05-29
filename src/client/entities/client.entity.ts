import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clients')
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    email: string;

    @Column()
    contact: string;

    @Column()
    house: string;

    @Column()
    street: string;

    @Column()
    post: string;

    @Column()
    city: string;

    @Column()
    design: string;

    @Column()
    category: string;

    @Column()
    style: string;

    @Column()
    grade: string;

    @Column('float')
    dimension: number;

    @Column('int')
    walls: number;

    @Column('float')
    cost: number;

    @Column({ type: 'date' })
    date: Date;
}