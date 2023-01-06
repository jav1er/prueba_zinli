import { Inter } from "@next/font/google";
import Layout from "../layout/Layout";
import ContentMain from "../components/ContentMain/ContentMain";
import Login from "../components/Login/Login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout className="home">
      <Login />
    </Layout>
  );
}
