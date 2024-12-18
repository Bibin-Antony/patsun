import React from 'react'
import HomeCarousel from './HomeCarousel'
import TopCategories from './TopCategories'
import ProductList from '../../components/ProductList'


export const Home = () => {
  return (
    <div>
        <HomeCarousel />
        <TopCategories />
        <ProductList />
    </div>
  )
}