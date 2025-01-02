export interface ICard {
    id: string,
    name: string,
    thumbnail_url?: string,
    tags?: [],
    total_time_minutes?: number
}

export interface INutrition {
    calories: number,
    carbohydrates: number,
    fat: number,
    fiber: number,
    protein: number,
    sugar: number
}

export interface IRecipeInstruction {
    id: number,
    position: number,
    display_text: string
}

export interface IRecipeIngredient {
    id: number,
    position: number,
    raw_text: string
}

export interface IFetchAction {
    type: ActionEnum,
    payload?: any
}
export enum ActionEnum {
    FETCH_PROCESS,
    FETCH_SUCCESSFUL,
    FETCH_ERROR,
}