"use client";

import { useState } from "react";
import Container from "../containers/Container";
import Sidebar from "../navigation/sidebar/Sidebar";
import Divider from "../utils/Divider";
import ListCategories from "./ListCategories";
import Navbar from "./Navbar";
import { SidebarProvider } from "@/context/SidebarProvider";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <SidebarProvider>
      <Sidebar />
      <header>
        <Navbar activeSideBar={setOpen} />
        <Divider />
        <Container>
          <ListCategories />
        </Container>
        <Divider size="h-[2px] hidden sm:block" />
      </header>
    </SidebarProvider>
  );
};

export default Header;
