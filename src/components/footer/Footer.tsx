import Image from "next/image";
import Container from "../containers/Container";
import Divider from "../utils/Divider";
import InfoContact from "./InfoContact";

import { Roboto } from "next/font/google";
import ListFooter from "./ListFooter";

//data
import { getGeneralCategories } from "@/data/ModelCategoriesFooter";
import getAllCustomService from "@/data/ModelCustomService";

//Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContainerCenter from "../containers/ContainerCenter";
import IconContact from "./IconContact";

const roboto = Roboto({
  weight: ["100"],
  subsets: ["latin"],
});

function Footer() {
  return (
    <footer className="bg-primary text-white">
      <ContainerCenter space="space-x-2">
        <IconContact>
          <FacebookIcon className="group-hover:text-[#1877f2]" />
        </IconContact>
        <IconContact>
          <WhatsAppIcon className="group-hover:text-[#25D366]" />
        </IconContact>
        <IconContact>
          <TwitterIcon className="group-hover:text-[#1DA1F2]" />
        </IconContact>
        <IconContact>
          <InstagramIcon className="group-hover:text-[#fd9644]" />
        </IconContact>
      </ContainerCenter>

      <Container>
        <Divider color="bg-[#0C9BDA]" />

        <div className="py-10 space-y-5 grid grid-cols-1 md:grid-cols-2 md:space-y-0">
          <div className="px-4 ">
            <h1 className="font-title text-[2.5rem]">D-wendys</h1>
            <div>
              <h3 className="font-bold">Contact Us</h3>

              <InfoContact
                icon="whatsapp"
                name="Whats App"
                number="+51 913-919-922"
              />
              <InfoContact
                icon="call"
                name="Call Us"
                number="+51 913-919-922"
              />
            </div>
            <div>
              <h3 className="font-bold">Dawnload App</h3>
              <div className="flex flex-wrap gap-5 mt-3">
                <Image
                  src="/app_store.png"
                  alt="App Store"
                  width={167}
                  height={55}
                  className="cursor-pointer"
                />
                <Image
                  src="/google_play.png"
                  alt="Google Play"
                  width={167}
                  height={55}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 custom:grid-cols-2">
            <ListFooter
              title="Popular Categories"
              list={getGeneralCategories()}
            />
            <ListFooter
              title="Customer Services"
              list={getAllCustomService()}
            />
          </div>
        </div>
        <Divider color="bg-[#05ABF3]" />
      </Container>
      <div className="text-center py-5">
        <span className={`text-md  ${roboto.className}`}>
          © 2022 All rights reserved. D-wendys.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
