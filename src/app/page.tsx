import Carousel from "@/components/Carousel/Carousel";
import TopicInfo from "@/components/utils/TopicInfo";
import Container from "@/components/containers/Container";
import Image from "next/image";
import { getAllProducts } from "@/data/ProviderProducts";
import CardProduct from "@/components/Cards/CardProduct";

export default function Home() {
  return (
    <Container>
      <Carousel>
        <img
          src="https://dmmsupplies.com/wp-content/uploads/2019/09/OFERTAS-BANNER-1.jpg"
          alt="img"
        />
        <img
          src="https://dmmsupplies.com/wp-content/uploads/2019/09/OFERTAS-BANNER-1.jpg"
          alt="img"
        />
        <img
          src="https://dmmsupplies.com/wp-content/uploads/2019/09/OFERTAS-BANNER-1.jpg"
          alt="img"
        />
      </Carousel>
      <TopicInfo title="Grab the best deal on" resaltPalabra="Smartphones" />
      <div className="my-4 grid gap-3 grid-cols-1 custom:grid-cols-2  md:grid-cols-3 lg:grid-cols-5">
        {getAllProducts().map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}
