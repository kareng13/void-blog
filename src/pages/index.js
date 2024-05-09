import { Inter } from "next/font/google";
import Bootstrap from "@/components/bootstrap/bootstrap";
import Nav from "@/components/nav/nav"
import Footer from "@/components/footer/footer"
import Homepage from "@/components/home/homepage"


const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <main>
      <Bootstrap />
      <Nav />
      <Homepage />
      <Footer />
  </main>
  );
}
