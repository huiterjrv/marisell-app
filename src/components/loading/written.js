import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={169}
    viewBox="0 0 400 169"
    backgroundColor="#e52e71"
    foregroundColor="#ff920a"
    {...props}
  >
    <rect x="27" y="157" rx="3" ry="3" width="52" height="6" /> 
    <rect x="15" y="40" rx="3" ry="3" width="359" height="5" /> 
    <rect x="14" y="40" rx="0" ry="0" width="6" height="100" /> 
    <rect x="73" y="124" rx="0" ry="0" width="2" height="1" /> 
    <rect x="368" y="42" rx="0" ry="0" width="6" height="100" /> 
    <rect x="14" y="138" rx="0" ry="0" width="359" height="5" /> 
    <rect x="91" y="7" rx="10" ry="10" width="191" height="15" /> 
    <rect x="155" y="29" rx="3" ry="3" width="52" height="6" /> 
    <rect x="31" y="56" rx="3" ry="3" width="327" height="6" /> 
    <rect x="31" y="71" rx="3" ry="3" width="327" height="6" /> 
    <rect x="31" y="84" rx="3" ry="3" width="327" height="6" /> 
    <rect x="31" y="100" rx="3" ry="3" width="327" height="6" /> 
    <rect x="33" y="115" rx="3" ry="3" width="124" height="6" />
  </ContentLoader>
)

export default MyLoader
