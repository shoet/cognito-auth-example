import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Header = () => {
  return (
    <Container>
      <h3>AppTitle</h3>
      <div></div>
    </Container>
  )
}
