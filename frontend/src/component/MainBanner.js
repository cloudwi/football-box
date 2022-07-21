import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { data } from '../data'
import Slider from 'react-slick'
const MainBanner = () => {
  const settings = {
    customPaging: function (i) {
      return <div>{i + 1}</div>
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div>
      <Slider {...settings}>
        {data.map((image, index) => (
          <Img key={index} url={image.image}></Img>
        ))}
      </Slider>
    </div>
  )
}

export default MainBanner

const Img = styled.img`
  width: 100%;
  height: 400px;
  border: 0;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 'cover';
`
