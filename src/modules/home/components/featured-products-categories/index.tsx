import { HttpTypes } from "@medusajs/types"
import ProductRailCategory from "./product-rail"
import { Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"

export default async function FeaturedProducts({
  category,
  region,
}: {
  category: HttpTypes.StoreProductCategory
  region: HttpTypes.StoreRegion
}) {
  return(
    <div>
      <div className="flex justify-between -mb-4">
        <Text className="txt-xlarge">{category?.metadata?.home || ""}</Text>
        <InteractiveLink href={`/categories/${category.handle}`}>
          عرض الكل
        </InteractiveLink>
      </div>
      <ProductRailCategory products={category.products || []} region={region} />
    </div>
  )
}
