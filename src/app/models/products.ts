export interface IProduct {
    id?:string|number,
    name?:string  | null | undefined,
    price?:number | null | undefined ,
    img ?: string  | null | undefined,
    desc ?: string | null | undefined ,
    author?:string | null | undefined ,
    sale?:number | null | undefined ,
    maxLength?: string | number,
    allProduct?: any
}