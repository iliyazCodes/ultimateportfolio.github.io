import { Route, Routes, Navigate } from "react-router-dom"
import Dashboard from "../../pages/dashboard"

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Dashboard />}
      />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default AppRoutes