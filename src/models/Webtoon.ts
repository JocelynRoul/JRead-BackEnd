import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
class Webtoon {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
}

export default Webtoon;