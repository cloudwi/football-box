import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { data } from '../data'

const MainBanner = () => {
  return (
    <div>
      <Img url={data.image}></Img>
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
