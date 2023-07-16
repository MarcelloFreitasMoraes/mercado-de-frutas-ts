import Slider from 'react-slick'
import { Images } from './data'
import * as S from './styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { IoIosArrowDropleftCircle } from 'react-icons/io'
import { Container } from '@/styles/Global'

function NextArrow(props: { onClick?: React.MouseEventHandler<HTMLElement> }) {
    const { onClick } = props

    return (
        <S.ArrowNext onClick={onClick}>
            <IoIosArrowDroprightCircle />
        </S.ArrowNext>
    )
}

function PrevArrow(props: { onClick?: React.MouseEventHandler<HTMLElement> }) {
    const { onClick } = props

    return (
        <S.ArrowPrev onClick={onClick}>
            <IoIosArrowDropleftCircle />
        </S.ArrowPrev>
    )
}

export default function SliderComponent() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    return (
        <S.Content>
            <Container>
                <div>
                    <Slider {...settings}>
                        {Images.map((item, index) => {
                            return (
                                <S.Img
                                    src={item?.url}
                                    alt={item?.alt}
                                    key={index}
                                />
                            )
                        })}
                    </Slider>
                </div>
            </Container>
        </S.Content>
    )
}
