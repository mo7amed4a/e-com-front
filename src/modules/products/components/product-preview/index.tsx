import { Container, Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import Button from "../global/Button"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const pricedProduct = await listProducts({
    regionId: region.id,
    // @ts-ignore
    queryParams: { id: [product.id!] },
  }).then(({ response }) => response.products[0])

  if (!pricedProduct) {
    return null
  }
  console.log(pricedProduct);
  

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <Container className="p-0" data-testid="product-wrapper">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="square"
            isFeatured={isFeatured}
          />
          <div className="p-3">
            <LocalizedClientLink href={`/products/${product.handle}`} className="group">
              <Text className="hover:text-primary-500 !text-xl hover:underline" data-testid="product-title">
                {product.title}
              </Text>
            </LocalizedClientLink>
              
            <div className="flex txt-compact-medium mt-4 gap-2 items-center justify-between">
              {product?.collection && <LocalizedClientLink href={`/collections/${product.collection.handle}`} className="flex gap-2 items-center text-xs text-gray-700 hover:text-primary-500" data-testid="product-title">
                <svg className="text-current size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M8 3a1 1 0 0 0 1 1h5.795c1.114 0 1.519.116 1.926.334.407.218.727.538.945.945.218.407.334.811.334 1.926V17a1 1 0 0 0 2 0V7.128c0-1.783-.186-2.43-.534-3.082a3.635 3.635 0 0 0-1.512-1.512C17.302 2.186 16.655 2 14.872 2H9a1 1 0 0 0-1 1zm4.795 3h-5.59c-1.115 0-1.519.116-1.926.334a2.272 2.272 0 0 0-.945.945C4.116 7.686 4 8.09 4 9.205V20.92a1 1 0 0 0 1.624.781L10 18.204l4.376 3.497a1 1 0 0 0 1.624-.78V9.204c0-1.115-.116-1.519-.334-1.926a2.272 2.272 0 0 0-.945-.945C14.314 6.116 13.91 6 12.795 6z" fill="currentColor" /></g></svg>
                {product?.collection?.title}
              </LocalizedClientLink>}
              {product?.categories && product?.categories?.length > 0 && <LocalizedClientLink href={`/categories/${product.categories[0].handle}`} className="flex gap-2 items-center text-xs text-gray-700 hover:text-primary-500" data-testid="product-title">
                <svg className="text-current size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier">
                  <path d="M18.6695 2H16.7695C14.5895 2 13.4395 3.15 13.4395 5.33V7.23C13.4395 9.41 14.5895 10.56 16.7695 10.56H18.6695C20.8495 10.56 21.9995 9.41 21.9995 7.23V5.33C21.9995 3.15 20.8495 2 18.6695 2Z" fill="currentColor" />
                  <path d="M7.24 13.4297H5.34C3.15 13.4297 2 14.5797 2 16.7597V18.6597C2 20.8497 3.15 21.9997 5.33 21.9997H7.23C9.41 21.9997 10.56 20.8497 10.56 18.6697V16.7697C10.57 14.5797 9.42 13.4297 7.24 13.4297Z" fill="currentColor" />
                  <path d="M6.29 10.58C8.6593 10.58 10.58 8.6593 10.58 6.29C10.58 3.9207 8.6593 2 6.29 2C3.9207 2 2 3.9207 2 6.29C2 8.6593 3.9207 10.58 6.29 10.58Z" fill="currentColor" />
                  <path d="M17.7099 22.0019C20.0792 22.0019 21.9999 20.0812 21.9999 17.7119C21.9999 15.3426 20.0792 13.4219 17.7099 13.4219C15.3406 13.4219 13.4199 15.3426 13.4199 17.7119C13.4199 20.0812 15.3406 22.0019 17.7099 22.0019Z" fill="currentColor" />
                </g></svg>
                {JSON.stringify(product?.categories)}
              </LocalizedClientLink>}
              {product?.origin_country && <p className="flex gap-2 items-center text-xs text-gray-700 hover:text-primary-500" data-testid="product-title">
                <svg className="text-current size-5" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier">
                    <defs><style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:13px;}" }} />
                    </defs><title /><circle className="cls-1" cx="279.51" cy="229.72" r="100.29" />
                    <path className="cls-1" d="M279.51,129.43C251,150.21,232,187.35,232,229.71s19,79.52,47.54,100.3c28.54-20.78,47.54-57.92,47.54-100.3S308.05,150.21,279.51,129.43Z" />
                    <path className="cls-1" d="M279.51,416V363.44a133.72,133.72,0,0,1,0-267.44v33.43" />
                    <line className="cls-1" x1="321.3" x2="237.72" y1={416} y2={416} />
                    <line className="cls-1" x1="379.8" x2="179.22" y1="229.72" y2="229.72" /></g>
                </svg>
                {product?.origin_country}
              </p>}
            </div>
            <div className="flex txt-compact-medium mt-4 gap-2 items-center justify-between">
              <div className="flex items-center gap-x-2 !text-xl">
                {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
              </div>
              <LocalizedClientLink href={`/products/${product.handle}`} className="group">
                <svg className="size-6 text-primary-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_15_200)"> <rect width={24} height={24} fill="white" /> <circle cx={12} cy={13} r={2} stroke="currentColor" strokeLinejoin="round" /> <path d="M12 7.5C7.69517 7.5 4.47617 11.0833 3.39473 12.4653C3.14595 12.7832 3.14595 13.2168 3.39473 13.5347C4.47617 14.9167 7.69517 18.5 12 18.5C16.3048 18.5 19.5238 14.9167 20.6053 13.5347C20.8541 13.2168 20.8541 12.7832 20.6053 12.4653C19.5238 11.0833 16.3048 7.5 12 7.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /> </g> <defs> <clipPath id="clip0_15_200"> <rect width={24} height={24} fill="" /> </clipPath> </defs> </g></svg>
              </LocalizedClientLink>
            </div>
          </div>
      </Container>
  )
}
