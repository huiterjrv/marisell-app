import React from 'react'
import ContentLoader from "react-content-loader"

const loadingList = () => (
    <ContentLoader
        height={140}
        speed={1}
        backgroundColor="#e52e71"
        foregroundColor="#ff920a"

    >
        {/* Only SVG shapes */}
        <circle cx="10" cy="20" r="8" />
        <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
        <circle cx="10" cy="50" r="8" />
        <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
        <circle cx="10" cy="80" r="8" />
        <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
        <circle cx="10" cy="110" r="8" />
        <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
    </ContentLoader>
)

export default loadingList