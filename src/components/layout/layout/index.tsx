import React, {useEffect} from "react";
import { LayoutProps } from "@pankod/refine-core";
import { Box } from "@pankod/refine-mui";

import { Sider as DefaultSider } from "../sider";
import { Header as DefaultHeader } from "../header";
import { Footer as DefaultFooter } from '../footer'
import { useLocation } from "@pankod/refine-react-router-v6";

export const Layout: React.FC<LayoutProps> = ({
  Sider,
  Header,
  Footer,
  OffLayoutArea,
  children,
}) => {
  const SiderToRender = Sider ?? DefaultSider;
  const HeaderToRender = Header ?? DefaultHeader;
  const FooterToRender = Footer ?? DefaultFooter;

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Box display="flex" flexDirection="row">
      <SiderToRender />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: "100vh",
        }}
      >
        <HeaderToRender />
        <Box
          component="main"
          sx={{
            p: { xs: 1, md: 2, lg: 3 },
            flexGrow: 1,
            bgcolor: (theme) => theme.palette.background.default,
          }}
        >
          {children}
        </Box>
        <FooterToRender />
      </Box>
      {OffLayoutArea && <OffLayoutArea />}
    </Box>
  );
};
