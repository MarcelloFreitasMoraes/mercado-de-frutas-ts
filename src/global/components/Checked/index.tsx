import { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import * as S from './styles'
import Button from '../Button'
import { CheckedProps } from './types'

export default function Checked({ check, setCheck }: CheckedProps) {
    const modalRef = useRef<HTMLElement>(null)

    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: check ? 1 : 0,
        transform: check ? `translateY(0%)` : `translateY(-100%)`,
    })

    const closeCheck = (e: React.MouseEvent<HTMLElement>) => {
        if (modalRef?.current === e.target) {
            setCheck(false)
        }
    }

    const keyPress = useCallback(
        (e: { key: string }) => {
            if (e.key === 'Escape' && check) {
                setCheck(false)
            }
        },
        [setCheck, check]
    )

    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    const goToCar = () => {
        window.location.href = '/carrinho'
    }

    return (
        <>
            {check ? (
                <S.Background ref={modalRef} onClick={closeCheck}>
                    <animated.div style={animation}>
                        <S.Wrapper>
                            <h2>Seu produto foi adicionado ao carrinho!</h2>
                            <S.CheckItem />

                            <Button
                                label="Ir para o carrinho"
                                onClick={(e) => {
                                    e.preventDefault()
                                    goToCar()
                                }}
                            />

                            <S.CloseChecked
                                aria-label="Close check"
                                onClick={() => setCheck((prev) => !prev)}
                            />
                        </S.Wrapper>
                    </animated.div>
                </S.Background>
            ) : null}
        </>
    )
}
