import { Layout, Page } from "@shopify/polaris";
import { Card, OrderDetails, OrderGraphs } from "../components";
import { useAuthenticatedFetch } from "../hooks";
import { useEffect, useState } from "react";

export default function HomePage() {
  let fetch = useAuthenticatedFetch();
  let [products, setProducts] = useState(0);
  let [collections, setCollections] = useState(0);
  const [orders, setOrders] = useState(0);
  const [fulFilled, setFulFilled] = useState(0);
  const [remains, setRemains] = useState(0);

  async function fetchProduct() {
    try {
      let request = await fetch("/api/products/count");
      let response = await request.json();
      setProducts(response.count);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCollections() {
    try {
      let request = await fetch("/api/collections/count");
      let response = await request.json();
      setCollections(response.count);
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchOrders() {
    try {
      let request = await fetch("/api/orders/all");
      let response = await request.json();
      setOrders(response.data.length);
      let fulFillOrders = response.data.filter(
        (item) => item.fulfillment_status === "fulfilled"
      );
      setFulFilled(fulFillOrders.length);
      setRemains(response.data.length - fulFillOrders.length);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(async () => {
    fetchProduct();
    fetchCollections();
    fetchOrders();
  }, []);

  return (
    <Page fullWidth>
      <div className="home-section">
        <div className="graphs-section">
          <OrderGraphs />
        </div>
        <div className="cards-section">
          <Layout>
            <Card title="Total Order" data={orders} orderCount />
            <Card title="Fulfilled Order" data={fulFilled} fulFilledCount />
            <Card title="Remains Order" data={remains} remainsCount />
            <Card title="Total Products" data={products} productCount />
            <Card
              title="Total Collections"
              data={collections}
              collectionsCount
            />
          </Layout>
        </div>
        <div className="order-details-section">
          <OrderDetails />
        </div>
      </div>
    </Page>
  );
}
