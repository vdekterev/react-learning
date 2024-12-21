import {IOperationType} from '@/enums.ts';

export interface Operation {
    id: number,
    title: string,
    amount: number,
    operationType: IOperationType,
    date: Date
}
