import { Layout, LegacyCard } from "@shopify/polaris";
import React from "react";

export function OrderDetails() {
  return (
    <>
      <Layout>
        <Layout.Section>
          <LegacyCard title="Order Details" sectioned>
            <p className="text-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati ad temporibus natus veritatis alias voluptate aut nemo
              voluptatem! Iusto, modi. Ad reprehenderit dicta rerum explicabo
              harum reiciendis atque magnam facere.
            </p>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </>
  );
}
