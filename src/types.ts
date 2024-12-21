import {IOperationType} from '@/enums.ts';

export interface Operation {
    id: string,
    title: string,
    amount: number,
    operationType: IOperationType,
    date: Date
}
