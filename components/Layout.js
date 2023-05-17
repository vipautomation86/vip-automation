import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '- VIP AUTOMATION' : 'VIP AUTOMATION'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" herf="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md ">
            <Link href="/" className="text-lg font-bold">
              Vip_Automation
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                Cart
              </Link>
              <Link href="/Login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          Copyright 2022 Vip Automation
        </footer>
      </div>
    </>
  )
}
