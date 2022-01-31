import React from 'react'
import styled from 'styled-components'
import './app.css'
import LogoImg from './logo-blue.png'

const Container = styled.div`
  min-height: 100vh;
  margin: 0!important;
  padding: 0!important;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
  background: linear-gradient(270deg, #0aeed3, #0a72ee);
  background-size: 400% 400%;  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;
  
@-webkit-keyframes AnimationName {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
@keyframes AnimationName {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
`

const Background = styled.img`
  max-height: 50vh;
  position: relative;
  mix-blend-mode: screen;
`

const Heading = styled.h1`
  color: white;
  padding-top: 20vh;
  font-size: calc(3rem + 1vw);
  text-align: center;
  width: 100vw;
  justify-self: center;
  
  align-self: center;
`

// Any routes that start with 'dynamic' will be treated as non-static routes

function App() {
  return (
   <Container>
       <Heading>
           Coming Soon.
       </Heading>
       <Background src={LogoImg}/>
   </Container>
  )
}

export default App
