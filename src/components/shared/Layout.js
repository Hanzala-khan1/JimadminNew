import React from 'react'
import TopNav from './TopNav'
import Wrapper from './Wrapper'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <>
            <Wrapper>
                <Sidebar />
                <div className="layout-page">
                    <TopNav />
                    <div class="content-wrapper">
                        {children}
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default Layout
