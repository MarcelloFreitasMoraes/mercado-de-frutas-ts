import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Images } from './data';
import * as S from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { Container } from '@/styles/Global';

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
}

function NextArrow(props: ArrowProps) {
  const { onClick } = props;

  return (
    <S.ArrowNext onClick={onClick}>
      <IoIosArrowDroprightCircle />
    </S.ArrowNext>
  );
}

function PrevArrow(props: ArrowProps) {
  const { onClick } = props;

  return (
    <S.ArrowPrev onClick={onClick}>
      <IoIosArrowDropleftCircle />
    </S.ArrowPrev>
  );
}

export default function SliderComponent() {
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShowArrows(screenWidth > 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    nextArrow: showArrows ? <NextArrow /> : undefined,
    prevArrow: showArrows ? <PrevArrow /> : undefined,
  };

  return (
    <S.Content>
      <Container>
        <div>
          <Slider {...settings}>
            {Images.map((item, index) => {
              return <S.Img src={item?.url} alt={item?.alt} key={index} />;
            })}
          </Slider>
        </div>
      </Container>
    </S.Content>
  );
}
