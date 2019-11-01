import React from 'react'

import styled from 'styled-components'
import ContentLoader from "react-content-loader"

export const Line = () => (
  <ContentLoader
    height={60}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="100" y="20" rx="3" ry="3" width="200" height="6" /> 
  </ContentLoader>
)

export const MultipleLine = () => (
  <ContentLoader 
    height={80}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="0" rx="3" ry="3" width="180" height="6" /> 
    <rect x="0" y="15" rx="3" ry="3" width="180" height="6" /> 
    <rect x="0" y="30" rx="3" ry="3" width="180" height="6" /> 
    <rect x="0" y="45" rx="3" ry="3" width="180" height="6" /> 
    <rect x="0" y="60" rx="3" ry="3" width="180" height="6" />
  </ContentLoader>
)

export const BulletList = () => (
  <ContentLoader 
    height={110}
    width={400}
    speed={1}
    primaryColor="#ecebeb"
    secondaryColor="#ecebeb"
  >
    <rect x="60" y="18" rx="3" ry="3" width="180" height="6" /> 
    <circle cx="40" cy="21" r="9" /> 
    <circle cx="41" cy="57" r="9" /> 
    <rect x="60" y="52" rx="3" ry="3" width="180" height="6" /> 
    <circle cx="42" cy="90" r="9" /> 
    <rect x="61" y="86" rx="3" ry="3" width="180" height="6" />
  </ContentLoader>
)
