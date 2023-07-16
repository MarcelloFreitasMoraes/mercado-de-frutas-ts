import { Total } from './../Car/styles'
import { DataProps } from '@/global/@types/data'

export interface SearchProps<T = any> {
    search: string | T
    setSearch: React.Dispatch<React.SetStateAction<string | T>>
}
