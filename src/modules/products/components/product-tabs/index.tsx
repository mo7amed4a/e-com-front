"use client"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"
import { HttpTypes } from "@medusajs/types"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "تفاصيل المنتج",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "الشحن والإرجاع",
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">المواد</span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">بلد المنشأ</span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">النوع</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">الوزن</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">الابعاد</span>
            <p>
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">التسليم السريع</span>
            <p className="max-w-sm">
            سيصل المنتج الخاصة بك خلال 3-5 أيام عمل في موقع الاستلام الخاص بك أو في منزلك.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">تبادلات بسيطة</span>
            <p className="max-w-sm">
              هل الملاءمة ليست صحيحة تمامًا؟ لا داعي للقلق - سنقوم باستبدال منتجك بمنتج جديد.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">المرتجعات سهلة</span>
            <p className="max-w-sm">
              ما عليك سوى إرجاع منتجك وسنقوم برد أموالك. بدون طرح أي أسئلة - سنبذل قصارى جهدنا للتأكد من أن عودتك خالية من المتاعب.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
