/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function ProductItem({ product_ld }) {
  return (
    <div className="card">
      <Link href={`/product/${product_ld.slug}`}>
        <img
          src={product_ld.images}
          alt={product_ld.name}
          className='="rounded shadow'
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product_ld.slug}`}>
          <h2 className="text-lg">{product_ld.name}</h2>
        </Link>
        <p className="mb-2">{product_ld.brand}</p>
        <p>${product_ld.price}</p>
        <button className="primary-button" type="button">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
