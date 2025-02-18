import { listCategories } from "@lib/data/categories"
import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { clx, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function CategoriesSection({
  region,
}: {
  region: HttpTypes.StoreRegion
}) {
  
  const productCategories = await listCategories()

  if (!productCategories) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex justify-between mb-8">
        {/* <Text className="txt-xlarge">{collection.title}</Text>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          View all
        </InteractiveLink> */}
      </div>
      <ul className="flex gap-5 justify-between">
      {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }
                    return (
                      <li
                        className="flex items-center justify-center gap-2 text-primary-50 text-xs text-center bg-primary-500 rounded-full size-auto h-32 aspect-square"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}dn
                          {JSON.stringify(c.category_children[0])}
                        </LocalizedClientLink>
                      </li>
                    )
                  })}
      </ul>
      
    </div>
  )
}
