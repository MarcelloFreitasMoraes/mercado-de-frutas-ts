import { DataProps } from '@/global/@types/data'

export interface CarProps<T = any> {
    data: Array<[string, FruitData]>
    del: T
    setDel: React.Dispatch<React.SetStateAction<T>>
    fruitsSelected: T
    setFruitsSelected: React.Dispatch<React.SetStateAction<T>>
}
