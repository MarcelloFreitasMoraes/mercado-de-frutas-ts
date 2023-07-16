import React, { useState, useEffect, SetStateAction } from 'react'

import axios from  'axios'
import Car from '@/global/components/Car';
import { GoBack } from '@/global/components/Back/styles';
import { CHECK } from '../../../config/api';
import { DataProps } from '@/global/@types/data';

export default function ListProducts() {
    const [data, setData] = useState<SetStateAction<DataProps | any>>()
    const [fruitsSelected, setFruitsSelected] = useState();
    const [del, setDel] = useState();
    
    useEffect(() => {
        axios.get(CHECK).then((res) => {
          return setData(Object.entries(res.data));
        });
      }, [del]);

    return (
        <>
            <Car data={data} del={del} fruitsSelected={fruitsSelected} setDel={setDel} setFruitsSelected={setFruitsSelected}/>
            <GoBack />
        </>
    )
}
