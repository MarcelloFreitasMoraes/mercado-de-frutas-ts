import * as S from './styles'
import { ButtonProps } from './types'

export default function Button({ label, onClick, disabled }: ButtonProps) {
    return (
        <S.Content onClick={onClick} disabled={disabled}>
            {label}
        </S.Content>
    )
}
