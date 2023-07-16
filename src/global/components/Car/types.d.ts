import { DataProps } from "@/global/@types/data"

export interface CarProps {
    data: Array<[string, FruitData]>;
    del: any; // Substitua 'any' pelo tipo correto, se possível
    setDel: React.Dispatch<React.SetStateAction<any>>; // Substitua 'any' pelo tipo correto, se possível
    fruitsSelected: any;
    setFruitsSelected: React.Dispatch<React.SetStateAction<any>>;
}
