import React from 'react'


import Header from '../Header'
import Footer from '../Footer'
import ProductViewModal from '../ProductModal'

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="main">
          {children}
        </div>
      </div>
      <Footer />
      <ProductViewModal/>
    </div>


  )
}

export default Layout