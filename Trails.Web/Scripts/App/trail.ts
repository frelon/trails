export class Trail {
    constructor(Id: number) {
        this.Id = Id;
        this.Positions = new Array<Position>();
    }

    public Id: number;
    public Name: string;
    public Positions: Position[];
}