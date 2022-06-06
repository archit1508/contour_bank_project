import styled from 'styled-components'

export const Container = styled.div`
`
export const Row = styled.div`
    height:100vh;
`
export const Col1 = styled.div`
@media (max-width: 768px) {
    text-align:center;
  }`
export const Col2 = styled.div`
    @media (max-width: 768px) {
    display:none;
  }
`

export const Heading = styled.h1`
    font-size: 4em;
`
export const SubHeading = styled.h4`
    font-size:1.5em;
`
export const Img = styled.img`
    width:100%;
`