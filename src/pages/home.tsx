import { useList, useGetIdentity, useMany } from "@pankod/refine-core";
import {
  PieChart,
  PropertyCard,
  PropertyReferrals,
  TotalRevenue,
  TopAgent,
  CustomerCard,
  SalesCard,
} from "components";
import { Typography, Box, Stack, Grid } from "@pankod/refine-mui";
import { Error, Loading } from "components/common/Loading&Error";
import ViewAll from "components/common/ViewAll";
import CountProperties from "components/charts/CountProperties";

interface BaseRecord {
  _id: string;
  creator: string;
  description: string;
  location: string;
  photo: string;
  price: number;
  propertyType: string;
  title: string;
}
interface PropertyInterface extends BaseRecord {
  price: number;
  // Add other properties specific to PropertyInterface
}

const totalRevenue = (properties: BaseRecord[]): number => {
  return (
    properties &&
    (properties as PropertyInterface[])
      .map((ele) => ele.price)
      .reduce((a: number, b: number) => a + b, 0) // Specify initial value as 0
  );
};

// Dashboard page
const Home = () => {
  const {
    data: listData,
    isLoading,
    isError,
  } = useList({
    resource: "properties",
    config: {
      pagination: {
        pageSize: 5,
      },
      sort: [
        {
          field: "updatedAt",
          order: "desc",
        },
      ],
    },
  });
  const { data: user } = useGetIdentity();

  const latestProperties = listData?.data ?? [];

  // Fetch additional data to get all the data
  const ids = listData?.data?.map((item) => item._id) || []; // Extract IDs from the fetched data
  const {
    data: additionalData,
    isLoading: isAdditionalLoading,
    isError: isAdditionalError,
  } = useMany({ resource: "properties", ids });

  // `additionalData` is the additional data fetched from the API
  // `isAdditionalLoading` is a boolean indicating whether the additional data is currently being fetched
  // `isAdditionalError` is a boolean indicating whether an error occurred while fetching the additional data

  // Combine the fetched data and additional data
  const allProperties = listData ? [...(additionalData?.data || [])] : [];

  if (isLoading || isAdditionalLoading) return <Loading />;
  if (isError || isAdditionalError) return <Error />;

  // Total Properties Calculate
  let totalPrice: number = totalRevenue(allProperties as PropertyInterface[]);
  const totalProperties: number = allProperties.length;

  return (
    <Box display="flex" flexDirection="column" flexWrap="wrap" mb={8}>
      <Stack direction="row" mb={3} color="#475be8">
        <Typography fontSize={42} fontWeight={700}>
          Hi,{"  "}
        </Typography>
        <Typography
          sx={{ textTransform: "capitalize" }}
          fontSize={40}
          fontWeight={700}
          display="flex"
        >
          {user?.name ? user?.given_name : "Guest"}
        </Typography>
      </Stack>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      {/* 1st Row  */}
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for Sale"
          value={totalProperties ? totalProperties : 684}
          colors={["#0068D0", "#A9D4FF"]}
          series={[totalProperties, 100 - totalProperties]}
        />
        <PieChart
          title="Properties for Rent"
          value={550}
          colors={["#02BD53", "#7AFEB3"]}
          series={[60, 40]}
        />
        <PieChart
          title="Total Customers"
          value={5684}
          colors={["#FF7B00", "#FFD9B6"]}
          series={[68, 32]}
        />
        <PieChart
          title="Properties for Cities"
          value={445}
          colors={["#FF3A3A", "#FFC6C6"]}
          series={[88, 22]}
        />
      </Box>
      {/* 2nd Row  */}
      <Stack
        mt="25px"
        width={"100%"}
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <Grid sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12 }}>
            <Grid item xs={12} sm={8}>
              <TotalRevenue totalPrice={totalPrice} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <PropertyReferrals />
            </Grid>
          </Grid>
        </Grid>
      </Stack>
      {/* 3rd Row  */}
      <Stack
        mt="25px"
        width={"100%"}
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <Grid sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12 }}>
            <Grid item xs={12} sm={4}>
              {/* <PropertyReferrals /> */}
            </Grid>
            <Grid item xs={12} sm={8}>
              <CountProperties />
            </Grid>
          </Grid>
        </Grid>
      </Stack>
      {/* 4th Row  */}
      <Box
        flex={1}
        flexGrow={1}
        borderRadius="15px"
        padding={{ xs: 1, sm: "20px" }}
        bgcolor="#FAFAFA"
        height="fit-content"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        flexWrap="wrap"
        mt="25px"
        gap={2}
      >
        <Grid sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 8, lg: 12 }}>
            <Grid item xs={12} sm={4}>
              <Stack
                minWidth={100}
                direction="column"
                height="100%"
                bgcolor="#fff"
                padding={2}
                spacing={2}
                borderRadius="15px"
              >
                <Stack direction="row" justifyContent="space-between">
                  <Typography fontSize={18} fontWeight={600} color="#11142d">
                    Top Agent
                  </Typography>
                  <ViewAll pathName="/agents" />
                </Stack>
                <TopAgent />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Stack
                minWidth={100}
                direction="column"
                spacing={2}
                bgcolor="#fff"
                padding={2}
                height="100%"
                borderRadius="15px"
              >
                <Typography fontSize={18} fontWeight={600} color="#11142d">
                  Customer
                </Typography>
                <CustomerCard />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Stack
                minWidth={100}
                direction="column"
                spacing={2}
                bgcolor="#fff"
                padding={2}
                height="100%"
                borderRadius="15px"
              >
                <Stack direction="row" justifyContent="space-between">
                  <Typography fontSize={18} fontWeight={600} color="#11142d">
                    Latest Sales
                  </Typography>
                </Stack>
                {latestProperties.map((property) => (
                  <SalesCard
                    key={property._id}
                    creator={property.creator}
                    title={property.title}
                    photo={property.photo}
                    price={property.price}
                    location={property.location}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* 5th Row  */}
      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="#FAFAFA"
        display="flex"
        flexDirection="column"
        mt="25px"
      >
        <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
          <Typography fontSize="18px" fontWeight={600} color="#11142d">
            Latest Properties
          </Typography>
          <ViewAll pathName="/properties" />
        </Stack>

        <Stack direction={{ xs: "column", lg: "row" }} gap={4}>
          <Box mt={2.5} display="flex" flexWrap="wrap" gap={4}>
            {latestProperties.map((property) => (
              <PropertyCard
                key={property._id}
                id={property._id}
                title={property.title}
                location={property.location}
                price={property.price}
                photo={property.photo}
              />
            ))}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
