export interface ITransaction {
    id: string;
    amount: number
    balance: number;
    label: string;
    description: string;
    date: Date;
}
