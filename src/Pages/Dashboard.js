import styled from "styled-components"
import Header from "../Components/Header"
import Main from "../Components/Main"

const DashboardContainer = styled.div`
`

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header />
      <Main />
    </DashboardContainer>
  )
}

export default Dashboard