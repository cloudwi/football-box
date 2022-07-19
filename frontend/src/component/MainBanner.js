import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { data } from '../data'
import Slider from 'react-slick'

const MainBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div>
      <Slider {...settings}>
        {data.map((image) => (
          <Img url={image.image}></Img>
        ))}
      </Slider>
    </div>
  )
}

export default MainBanner

const Img = styled.img`
  width: 100%;
  height: 500px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 'cover';
`
