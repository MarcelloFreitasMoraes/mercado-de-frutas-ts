import React, { useState, useEffect, SetStateAction } from 'react'
import axios from 'axios'
import Car from '@/global/components/Car'
import { GoBack } from '@/global/components/Back/styles'
import { DataProps } from '@/global/@types/data'
import { CHECK, CHECKOUT } from '@/config/api'
import Alert from '@/global/components/Alert'

export default function ListProducts() {
    const [data, setData] = useState<SetStateAction<DataProps | any>>()
    const [fruitsSelected, setFruitsSelected] = useState<any>()
    const [del, setDel] = useState<any>()
    const [isEmpty, setIsEmpty] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [alert, setAlert] = useState<{
        type: 'success' | 'error'
        message: string
    } | null>(null)

    useEffect(() => {
        axios
            .get(CHECK)
            .then((res) => {
                return setData(Object?.entries(res.data))
            })
            .catch((error) => {
                setAlert({ type: 'error', message: 'O carrinho está vazio.' })
                console.error(error)
                setIsEmpty(true)
            })
    }, [del])

    const delet = (id: string) => {
        setLoading(true)
        axios
            .delete(`${CHECKOUT}/${id}.json`)
            .then(() => {
                setAlert({ type: 'success', message: 'Fruta excluída.' })
                setDel(!del)
                setFruitsSelected(
                    (prevFruitsSelected: any) =>
                        prevFruitsSelected?.filter(
                            (fruit: { id: string }) => fruit?.id !== id
                        )
                )
                if (fruitsSelected?.length === 1) {
                    setIsEmpty(true)
                }
            })
            .catch(() => {
                setAlert({ type: 'error', message: 'Fruta não excluída.' })
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            {alert && <Alert type={alert.type} message={alert.message} />}
            <Car
                data={data}
                fruitsSelected={fruitsSelected}
                onDelete={delet}
                isEmpty={isEmpty}
                setFruitsSelected={setFruitsSelected}
                loading={loading}
            />
            <GoBack />
        </>
    )
}
