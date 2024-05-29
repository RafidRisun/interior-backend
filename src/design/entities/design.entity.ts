import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('designs')
export class Design {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    category: string;

    @Column()
    style: string;

    @Column()
    grade: string;

    @Column('float')
    rate: number;

    @Column()
    image: string;

    @Column({ type: 'date' })
    date: Date;
}
