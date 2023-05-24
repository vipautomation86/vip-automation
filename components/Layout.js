import { Store } from '@/utils/Store'
import Head from 'next/head'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'

export default function Layout({ title, children }) {
  const { state } = useContext(Store)
  const { cart } = state
  const [cartItemsCount, setcartItemsCount] = useState(0)
  useEffect(() => {
    setcartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0))
  }, [cart.cartItems])
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
                {cartItemsCount > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white ">
                    {cartItemsCount}
                  </span>
                )}
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
