import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>

    )
}
