
export type IMealOption = {
  id:number 
  majorTitle: string
  name: string
  description: string
  imgUrl: string
  calories: number
  protein: number
  carbs: number 
  fat: number
  ingredients : MealOptionIngredient[]
  procedures: string[] 
}  

export type MealOptionIngredient = {
  name: string
  qty: string
}