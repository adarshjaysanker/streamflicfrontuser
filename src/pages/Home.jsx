import React from 'react'
import Bannercontainer from '../components/Bannercontainer/Bannercontainer'
import Rowcontainer from '../components/Rowcontainer/Rowcontainer'
import Header from '../components/Header/Header'

function Home() {
  return (
    <div>
      <Header/>
      <Bannercontainer/>
      <Rowcontainer/>
    </div>
  )
}

export default Home
