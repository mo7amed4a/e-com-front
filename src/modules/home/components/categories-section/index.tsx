
"use client"
import { HttpTypes } from "@medusajs/types"
import { clx, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

export default function CategoriesSection({
  productCategories,
}: {
  productCategories: HttpTypes.StoreProductCategory[]
}) {

  if (!productCategories) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex justify-between mb-8">
        <Text className="txt-xlarge">الفئات</Text>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={15}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          300: { slidesPerView: 2 }, // الموبايل
          600: { slidesPerView: 3 }, // الموبايل
          900: { slidesPerView: 4 }, // الموبايل
          1024: { slidesPerView: 5 }, // الديسكتوب
        }}
      >
        {productCategories?.slice(0, 6).map((c) => {
          if (c.parent_category) {
            return null
          }
          return (
         
            <SwiperSlide key={c.id} className="!flex !justify-center">
              <LocalizedClientLink
                className={clx(
                  "flex flex-col items-center justify-center gap-2",
                  "text-primary-50 text-xs text-center",
                  "bg-primary-500 rounded-full h-32 aspect-square"
                )}
                href={`/categories/${c.handle}`}
              >
                {c.name}
              </LocalizedClientLink>
            </SwiperSlide>          )
        })}
      </Swiper>
    </div>
  )
}
