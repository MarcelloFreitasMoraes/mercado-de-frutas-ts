import { DataProps } from "@/global/@types/data"

export interface ProdutoctsProps <T=any> {
    result: DataProps[] | T    
    isLogged: boolean
}