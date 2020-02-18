import React from "react"
import styled from "styled-components"

const HeaderOne = styled.h1`
  color: pink;
  font-size: 30px;
  margin: 60px 0;
`
const HeaderTwo = styled.h2`
    color: white;
    font-size: 15px;
    margin: 60px 0;
`
const DivStyle = styled.div`
    background-color: lightblue;
    padding: 10px;
`

// I'm adding some styled-component styling here because 
// this is what we use at work and I need some practise. 
// Basically, you style a component and then rename is so that 
// each time you use it, the styling is automatically applied. 



 const Welcome = () => (
        <div>
            <HeaderOne>Welcome to the Experimint!</HeaderOne>
                <p>Yes the spelling error is intentional</p>
            <DivStyle>
                <HeaderTwo>
                    Haha, only saw this now.. I assumed it is intentional..
                </HeaderTwo>
            </DivStyle>
        </div>
)

export default Welcome;