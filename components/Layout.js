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
            <div className="flex font-bold gap-5">
              <Link href="/cart">Cart</Link>
              <Link href="/Login">Login</Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer>footer</footer>
      </div>
    </>
  )
}
