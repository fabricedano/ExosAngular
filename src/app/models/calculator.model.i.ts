export interface IHistory {
    id: number,
    date: Date;
    operator: string
    resultat: number;
    Delete: string
}

export interface IOperator {
    value: string;
    viewValue: string;
}