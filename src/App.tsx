import { useEffect } from 'react'
import { Refine, AuthProvider } from "@pankod/refine-core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  ThemeProvider,
  CssBaseline,
  GlobalStyles,
  ReadyPage,
  createTheme,
  ErrorComponent,
  responsiveFontSizes,
} from "@pankod/refine-mui";
import {
  AccountCircleOutlined,
  ChatBubbleOutline,
  InfoOutlined,
  PeopleAltOutlined,
  StarOutlineRounded,
  VillaOutlined,
} from "@mui/icons-material";
import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";
import axios, { AxiosRequestConfig } from "axios";
import { ColorModeContextProvider } from "contexts";
// If there is an issue with textfield showing then remove the above provider
import { Title, Sider, Layout, Header } from "components/layout";

import {
  Login,
  Home,
  Agents,
  MyProfile,
  PropertyDetails,
  AllProperties,
  CreateProperty,
  AgentProfile,
  EditProperty,
} from "pages";

import { CredentialResponse } from "interfaces/google";
import { parseJwt } from "utils/parse-jwt";
import Reviews from "pages/reviews";
import Messages from "pages/messages";
import HelpAndInfo from "pages/help";

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (request.headers) {
    request.headers["Authorization"] = `Bearer ${token}`;
  } else {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});

// Custom Mui Theme
let customTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'Manrope', sans-serif",
    },
  },
  palette: {
    primary: {
      main: "#333",
    },
    secondary: {
      main: "#475be8",
    },
  },
});
customTheme = responsiveFontSizes(customTheme);

function App() {
  const authProvider: AuthProvider = {
    login: async ({ credential }: CredentialResponse) => {
      const profileObj = credential ? parseJwt(credential) : null;

      // Save user to MongoDB
      if (profileObj) {
        const response = await fetch("https://evoia-dashboard.onrender.com/api/v1/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: profileObj.name,
            email: profileObj.email,
            avatar: profileObj.picture,
          }),
        });

        const data = await response.json();

        if (response.status === 200) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              ...profileObj,
              avatar: profileObj.picture,
              userid: data._id,
            })
          );
        } else {
          return Promise.reject();
        }
      }

      localStorage.setItem("token", `${credential}`);

      return Promise.resolve();
    },
    logout: () => {
      const token = localStorage.getItem("token");

      if (token && typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        axios.defaults.headers.common = {};
        window.google?.accounts.id.revoke(token, () => {
          return Promise.resolve();
        });
      }

      return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: async () => {
      const token = localStorage.getItem("token");

      if (token) {
        return Promise.resolve();
      }
      return Promise.reject();
    },

    getPermissions: () => Promise.resolve(),
    getUserIdentity: async () => {
      const user = localStorage.getItem("user");
      if (user) {
        return Promise.resolve(JSON.parse(user));
      }
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <ThemeProvider theme={customTheme}>
        <RefineSnackbarProvider>
          <Refine
            dataProvider={dataProvider("https://evoia-dashboard.onrender.com/api/v1")}
            notificationProvider={notificationProvider}
            ReadyPage={ReadyPage}
            catchAll={<ErrorComponent />}
            resources={[
              {
                name: "properties",
                list: AllProperties,
                show: PropertyDetails,
                create: CreateProperty,
                edit: EditProperty,
                icon: <VillaOutlined />,
              },
              {
                name: "agents",
                list: Agents,
                show: AgentProfile,
                icon: <PeopleAltOutlined />,
              },
              {
                name: "reviews",
                list: Reviews,
                icon: <StarOutlineRounded />,
              },
              {
                name: "messages",
                list: Messages,
                icon: <ChatBubbleOutline />,
              },
              {
                name: "my-profile",
                options: { label: "My Profile" },
                list: MyProfile,
                icon: <AccountCircleOutlined />,
              },
              {
                name: "help",
                options: { label: "Help & Info" },
                list: HelpAndInfo,
                icon: <InfoOutlined />,
              },
            ]}
            Title={Title}
            Sider={Sider}
            Layout={Layout}
            Header={Header}
            routerProvider={routerProvider}
            authProvider={authProvider}
            LoginPage={Login}
            DashboardPage={Home}
            options={{
              reactQuery: {
                devtoolConfig: false,
              },
            }}
          />
        </RefineSnackbarProvider>
      </ThemeProvider>
    </ColorModeContextProvider>
  );
}

export default App;
