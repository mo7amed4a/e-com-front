
"use client"
import { HttpTypes } from "@medusajs/types"
import { clx, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import FeaturedProducts from "../featured-products-categories"

export default function CategoriesSection({
  productCategories,
  region
}: {
  productCategories: HttpTypes.StoreProductCategory[]
  region: HttpTypes.StoreRegion
}) {

  if (!productCategories) {
    return null
  }

  const categories = productCategories.filter(item => item?.metadata?.home != undefined)
  

  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex justify-between mb-8">
        <Text className="txt-xlarge">الفئات</Text>
      </div>
      <div>
        {categories?.slice(0, 6).map((item) => {
          if (item.parent_category) {
            return null
          }
          return (
              <FeaturedProducts key={item.id} category={item} region={region} />
          )
        })}
      </div>
    </div>
  )
}
