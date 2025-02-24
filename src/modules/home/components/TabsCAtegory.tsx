"use client"
import { HttpTypes } from "@medusajs/types"
import { Tabs } from "@medusajs/ui"
import ProductPreview from "@modules/products/components/product-preview"
import ProductPreviewClient from "@modules/products/components/product-preview/Product-preview-client"

export function TabsCategories({
    categories,
    region
}:{
    categories: HttpTypes.StoreProductCategory[]
    region:  HttpTypes.StoreRegion
}) {
    categories = categories.slice(0, 10)
  return categories && categories.length > 0 && (
    <div className="w-full px-4" dir="rtl">
      <Tabs dir="rtl" defaultValue={categories[0].name}>
        <Tabs.List>
            {
               categories.map(item=> (
                    <Tabs.Trigger key={item.id} value={item.name}>{item.name}</Tabs.Trigger>
               )) 
            }
             {/* <Tabs.Trigger value="general">General</Tabs.Trigger>
          <Tabs.Trigger value="shipping">Shipping</Tabs.Trigger> */}

        </Tabs.List>
        <div className="mt-2">
            {
               categories.map(item=> (
                    <Tabs.Content key={item.id} value={item.name}>
                        <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-24 small:gap-y-36">
                            {item.products &&
                            item.products.map((product) => (
                                <li key={product.id}>
                                    <ProductPreviewClient product={product} region={region} isFeatured />
                                </li>
                            ))}
                        </ul>
                    </Tabs.Content>
               ))
            }
        </div>
      </Tabs>
    </div>
  )
}