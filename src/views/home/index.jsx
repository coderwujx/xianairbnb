import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/HomeBanner'
import { fetchHomeDataAction } from '@/store/modules/home'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import SectionHeader from '@/components/SectionHeader'

const home = memo(() => {
  const { goodPriceInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-top">
          <SectionHeader title={goodPriceInfo.title} />
        </div>
      </div>
    </HomeWrapper>
  )
})

export default home