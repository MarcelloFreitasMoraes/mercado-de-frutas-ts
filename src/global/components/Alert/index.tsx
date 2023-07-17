import React, { useEffect, useState } from 'react'
import * as S from './styles'

type AlertProps = {
    type: 'success' | 'error'
    message: string
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
    const [showAlert, setShowAlert] = useState<boolean>(true)

    const alertColor = type === 'success' ? '#90EE90' : '#e47755'

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false)
        }, 5000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        showAlert && (
            <S.AlertContainer backgroundColor={alertColor}>
                {type === 'success' ? <S.CheckItem /> : <S.CheckItemError />}
                <p>{message}</p>
            </S.AlertContainer>
        )
    )
}

export default Alert
