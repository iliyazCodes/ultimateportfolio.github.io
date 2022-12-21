import styled from "styled-components"
import Header from "../Components/Header/Index"
import Main from "../Components/Main/Index"

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