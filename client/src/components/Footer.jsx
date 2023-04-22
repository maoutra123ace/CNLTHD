import React from 'react'
import { Link } from 'react-router-dom'
import Grid from './Grid/Grid'
import logoLaptop from '../assets/images/logoLaptop.jpg'
const footerLayoutLinks = [
  {
    display: 'Giới thiệu',
    path: '/about',
    icon: 'phone-call'
  },
  {
    display: 'Liên hệ',
    path: '/Contact',
  },
  {
    display: 'Tuyển dụng',
    path: '/about',
  },
  {
    display: 'Tin tức',
    path: '/about',
    icon: 'new',
  },
  {
    display: 'Hệ thống cửa hàng ',
    path: '/about',
  },
]
const CustomLinks = [{
  display: 'Chính sách đối ngoại',
  path: '/about',
},
{
  display: 'Chính sách bảo hành',
  path: '/about',
},
{
  display: 'Chính sách hoàn tiền',
  path: '/about',
}
]
const TakecareLinks = [{
  display: 'Chính sách giúp đỡ',
  path: '/about',
},
{
  display: 'yêu cầu khách hàng',
  path: '/about',
},
]
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <Grid
          col={4}
          mdCol={2}
          smCol={1}
          gap={10}
        >
          <div>
            <div className='footer__title'>
              <span><box-icon type="bx" name="news"></box-icon> Thông tin website</span>
            </div>
            <div className='footer__content'>

              {footerLayoutLinks
                .map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }
            </div>
          </div>
          <div>
            <div className='footer__title'>
              <span><box-icon type="bx" name="phone-call"></box-icon>Tổng đài hỗ trợ</span>
            </div>
            <div className='footer__content'>
              {CustomLinks
                .map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }
            </div>
          </div>
          <div>
            <div className='footer__title'>
              <span><box-icon type="bx" name="user-check"></box-icon>Chăm sóc khách hàng</span>
            </div>
            <div className='footer__content'>
              {TakecareLinks
                .map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }
            </div>
          </div>
          <div className='footer__about'>
            <p>
              <Link to="/">
                <img src={logoLaptop} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
              Hướng đến mục tiêu mang lại niềm vui ăn mặc mỗi ngày cho hàng triệu người tiêu dùng. Hãy cùng chúng tôi đồng hành với nhau website thôi nào
            </p>
          </div>
        </Grid>
      </div>

    </footer>
  )
}

export default Footer
