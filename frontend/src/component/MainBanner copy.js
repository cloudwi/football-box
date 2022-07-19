import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MainBanner = () => {
  return (
    <div>
      <Img url="https://images.unsplash.com/photo-1657299170207-d6df52b27811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"></Img>
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
`
