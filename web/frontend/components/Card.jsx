import { Layout, LegacyCard } from "@shopify/polaris";
import React from "react";

export function Card({
  title,
  data,
  productCount,
  collectionsCount,
  orderCount,
  fulFilledCount,
  remainsCount,
}) {
  return (
    <>
      <Layout.Section oneThird>
        <LegacyCard title={title} sectioned>
          <h2>
            {productCount && data}
            {collectionsCount && data}
            {orderCount && data}
            {fulFilledCount && data}
            {remainsCount && data}
          </h2>
        </LegacyCard>
      </Layout.Section>
    </>
  );
}
