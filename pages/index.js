import { Inter } from "@next/font/google";
import Layout from "../layout/Layout.jsx";
import ContentMain from "../components/ContentMain/ContentMain";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout className="home">
      <ContentMain />
    </Layout>
  );
}
