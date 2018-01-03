export class Trail {
    constructor(Id: number) {
        this.Id = Id;
        this.Points = new Array<Point>();
    }

    public Id: number;
    public Name: string;
    public Points: Point[];
}

export class Point {
    public Latitude: number;
    public Longitude: number;
    public Altitude: number;
    public TimeStamp: Date;
}