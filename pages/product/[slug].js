import Layout from '@/components/Layout'
import { Store } from '@/utils/Store'
import data from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store) // useContext()
  // const router = useRouter() // hook router cart add item page

  const { query } = useRouter()

  const { slug } = query

  const product = data.products.find((x) => x.slug === slug)

  if (!product) {
    return <div>Product Not Found</div>
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug) // useContext()
    const quantity = existItem ? existItem.quantity + 1 : 1

    if (product.countInStock < quantity) {
      alert('Sorry. Product is Out Of Stock')
      return
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })

    //router.push('/cart') // hook router cart add item page
  }

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            width={300}
            height={300}
            src={product.images}
            alt={product.name}
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg ">{product.name}</h1>
            </li>
            <li>Category:{product.category}</li>
            <li>Brand:{product.brand}</li>
            <li>
              {product.rating}of{product.numReviews}
            </li>
            <li>Description:{product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card min-w-min p-2">
            <div className="mb-2 flex justify-between ">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between ">
              <div>Status</div>
              <div>{product.countInStock > 0 ? 'In Stock' : 'Unavaliable'}</div>
            </div>
            <button
              className="primary-button w-full"
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <h1>{product.name}</h1>
    </Layout>
  )
}
