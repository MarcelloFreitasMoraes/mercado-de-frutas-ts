import { DataProps } from '@/global/@types/data'

export interface CarProps<T = any> {
    data: Array<[string, FruitData]>
    fruitsSelected: T
    onDelete: React.Dispatch<React.SetStateAction<T>>
    setFruitsSelected: React.Dispatch<React.SetStateAction<T>>
    isEmpty: boolean
    loading: boolean
}
export interface FruitData {
    id: string
    name: string
    image: string
    description: string
    price: string
    quantity: number
}
export interface ErrorMessageProps {
    message?: string
}
