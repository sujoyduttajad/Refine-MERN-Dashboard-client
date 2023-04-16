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
import { Typography, Box, Stack } from "@pankod/refine-mui";
import { Error, Loading } from "components/common/Loading&Error";
import ViewAll from "components/common/ViewAll";

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
        pageSize: 4,
      },
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
    <Box>
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
      <Typography variant="subtitle2" gutterBottom sx={{ color: "#9F9F9F" }}>
        (All the data are dummy at first but as soon as you start uploading
        Properties the data changes dynamically)
      </Typography>

      {/* 1st Row  */}
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for Sale"
          value={totalProperties ? totalProperties : 684}
          colors={["#0068D0", "#A9D4FF"]}
          series={[75, 25]}
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
        <TotalRevenue totalPrice={totalPrice} />
        <PropertyReferrals />
      </Stack>
      {/* 3rd Row  */}
      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="#FAFAFA"
        display="flex"
        minWidth="30%"
        mt="25px"
        gap={2}
      >
        <Stack
          width={"100%"}
          direction="column"
          gap={4}
          bgcolor="#fff"
          padding={2}
          borderRadius="15px"
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography fontSize={18} fontWeight={600} color="#11142d">
              Top Agent
            </Typography>
            {/* <ViewAll /> */}
          </Stack>
          <TopAgent />
        </Stack>
        <Stack
          width={"100%"}
          direction="column"
          gap={4}
          bgcolor="#fff"
          padding={2}
          borderRadius="15px"
        >
          <Typography fontSize={18} fontWeight={600} color="#11142d">
            Customer
          </Typography>
          <CustomerCard />
        </Stack>
        <Stack
          width={"100%"}
          direction="column"
          gap={4}
          bgcolor="#fff"
          padding={2}
          borderRadius="15px"
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography fontSize={18} fontWeight={600} color="#11142d">
              Latest Sales
            </Typography>
            <ViewAll />
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
      </Box>
      {/* 4th Row  */}
      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="#FAFAFA"
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography fontSize="18px" fontWeight={600} color="#11142d">
            Latest Properties
          </Typography>
          <ViewAll />
        </Stack>

        <Stack width={"100%"} direction={{ xs: "column", lg: "row" }} gap={4}>
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
