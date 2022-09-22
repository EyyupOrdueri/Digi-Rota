import React from 'react'
import homepage from "../../image/home-page.JPEG"

const Home = () => {
  return (
    <div className="text-center ">
      <p>Welcome Digi Rota</p>
      <div>
        <img src={homepage} alt="homepage" className='mainPageImg'/>
      </div>
    </div>
  )
}

export default Home