import { useState } from 'react'
import * as S from './styles'
import { BiCart } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import { Data } from './data'
import Modal from '../Modal'
import { Container } from '@/styles/Global'
import LOGO from '../../../../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Header({ isLogged }: { isLogged: any }) {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal((prev) => !prev)
    }

    return (
        <S.Content>
            <Container>
                <S.Grid>
                    <S.Brand>
                        <Link href="/">
                            <Image
                                src={LOGO}
                                alt="Logo"
                                width={200}
                                height={80}
                            />
                        </Link>
                    </S.Brand>

                    <S.Nav>
                        <ul>
                            {Data.map((items, index) => {
                                return (
                                    <li key={index}>
                                        <a href={items.url}>{items.page}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </S.Nav>

                    <S.Icons>
                        <Link href="/carrinho">
                            <BiCart />
                        </Link>
                        <button onClick={openModal}>
                            <FaUserCircle />
                        </button>
                    </S.Icons>
                </S.Grid>
                <Modal showModal={showModal} isLogged={isLogged} />
            </Container>
        </S.Content>
    )
}
