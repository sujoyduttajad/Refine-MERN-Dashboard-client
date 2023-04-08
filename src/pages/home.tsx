import { useList, useTable } from "@pankod/refine-core";
import {
  PieChart,
  PropertyCard,
  PropertyReferrals,
  TotalRevenue,
  TopAgent,
} from "components";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import { useEffect, useState } from "react";
import axios from "axios";
import { Error, Loading } from "components/common/Loading&Error";

const baseURL = "http://localhost:8080/api/v1/properties";

// Dashboard page
const Home = () => {
  const [propertyData, setPropertyData] = useState(null);
  const { data, isLoading, isError } = useList({
    resource: "properties",
    config: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  const latestProperties = data?.data ?? [];

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPropertyData(response.data);
    });
  }, []);

  if (!propertyData) return null;

  // Total Revenue Calculate
  type PropertyInterface = {
    _id: string;
    creator: string;
    description: string;
    location: string;
    photo: string;
    price: number;
    propertyType: string;
    title: string;
  };
  const totalRevenue = (): number => {
    return (
      propertyData &&
      (propertyData as PropertyInterface[])
        .map((ele) => ele.price)
        .reduce((a: number, b: number) => a + b)
    );
  };
  let totalPrice: number = totalRevenue();

  // Total Properties Calculate
  const totalProperties: number = (propertyData as PropertyInterface[])?.length;

  // console.log(propertyData);

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
        <Typography variant="subtitle2" gutterBottom sx={{ color: "#9F9F9F" }}>
          (All the data are dummy at first but as soon as you start uploading
          Properties the data changes dynamically)
        </Typography>
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for Sale"
          value={totalProperties ? totalProperties : 684}
          colors={["#475be8", "#D7DBFA"]}
          series={[75, 25]}
        />
        <PieChart
          title="Properties for Rent"
          value={550}
          colors={["#18C784", "#C9F8E6"]}
          series={[60, 40]}
        />
        <PieChart
          title="Total Customers"
          value={5684}
          colors={["#FF7B00", "#FFE3C8"]}
          series={[68, 32]}
        />
        <PieChart
          title="Properties for Cities"
          value={445}
          colors={["#FF3A3A", "#FFD4D4"]}
          series={[88, 22]}
        />
      </Box>

      <Stack
        mt="25px"
        width={"100%"}
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <TotalRevenue totalPrice={totalPrice} />
        <PropertyReferrals />
      </Stack>

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
        <Typography fontSize="18px" fontWeight={600} color="#11142d">
          Latest Properties
        </Typography>

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
      </Box>
    </Box>
  );
};

export default Home;
