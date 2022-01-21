import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import CategoriesListScreen from './screens/CategoriesListScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3 px-5">
        <Container fluid>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/admin/userlist" element={<UserListScreen />} />
            <Route
              path="/admin/categories"
              element={<CategoriesListScreen />}
            />
            <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
            <Route
              path="/admin/productlist"
              element={<ProductListScreen />}
              exact
            />
            <Route
              path="/admin/product/:id/edit"
              element={<ProductEditScreen />}
            />
            <Route path="/" element={<HomeScreen />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
