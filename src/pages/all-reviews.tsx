import { Add } from "@mui/icons-material";
import { useTable, useMany, useList } from "@pankod/refine-core";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Select,
  MenuItem,
} from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";
import { CustomButton, PropertyCard } from "components";
import { Error, Loading } from "components/common/Loading&Error";
import ReviewCard from "components/common/ReviewCard";
import { useMemo } from "react";

const AllReviews = () => {
  const navigate = useNavigate();

  // const {
  //   tableQueryResult: { data, isLoading, isError },
  //   current,
  //   setCurrent,
  //   pageCount,
  //   setPageSize,
  //   filters,
  //   setFilters,
  // } = useTable();

  const { data, isLoading, isError } = useList({
    resource: "reviews",
  });

  const {
    data: additionalData,
    isLoading: isAdditionalLoading,
    isError: isAdditionalError,
  } = useMany({ resource: "properties", ids: []});

  const numberOfProperties = additionalData?.data.length;

  const propertyData = additionalData?.data;
  console.log(propertyData)

  const allReviews = data?.data ?? [];
  console.log(allReviews)

  // Search filter
  // const currentFilterValues = useMemo(() => {
  //   const logicalFilters = filters.flatMap((item) =>
  //     "field" in item ? item : []
  //   );
  //   return {
  //     reviewer:
  //       logicalFilters.find((item) => item.field === "reviewer")?.value || "",
  //   };
  // }, [filters]);

  if (isLoading || isAdditionalLoading) return <Loading />;
  if (isError || isAdditionalError) return <Error />;

  return (
    <Box mb={8}>
      <Box
        mt="20px"
        sx={{ display: "flex", flexWrap: "wrap", gap: 3, width: "100%" }}
      >
        <Stack direction="column" width="100%">
          {/* <Typography fontSize={25} fontWeight={700} color="#11142d" mb={2}>
            {!allReviews.length
              ? "There are no reviews"
              : `Reviews (${allReviews.length})`}
          </Typography> */}
          <Box
            mb={2}
            mt={3}
            display="flex"
            flexWrap={{ xs: "wrap", sm: "nowrap" }}
            width="100%"
            height="20%"
            alignItems="center"
            justifyContent="space-between"
          >
            {/* <TextField
              variant="outlined"
              color="info"
              value={currentFilterValues.reviewer}
              onChange={(e) => {
                setFilters([
                  {
                    field: "reviewer",
                    operator: "contains",
                    value: e.currentTarget.value || undefined,
                  },
                ]);
              }}
              placeholder="Search by Reviewer"
              size="small"
              sx={{ width: "50%" }}
            /> */}
          </Box>
        </Stack>
      </Box>

      {/* <Typography fontSize={21} fontWeight={500} color="#B7B8B8">
        {!allReviews.length
          ? "Sorry, no reviews to show :("
          : `Showing ${allReviews.length} ${
              allReviews.length > 1 ? "reviews" : "review"
            } on this page`}
      </Typography> */}

      {/* <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {allReviews.map((review) => (
          <ReviewCard
            id={review._id}
            title={""}
            property={review.property}
            reviewer={review.reviewer}
            rating={review.rating}
            description={review.description}
            date={review.date}
          />
        ))}
      </Box> */}

      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {propertyData?.map((property) => (
          <PropertyCard
            key={property._id}
            id={property._id}
            title={property.title}
            price={property.price}
            location={property.location}
            photo={property.photo}
          />
        ))}
      </Box>

      <Stack
        direction="row"
        justifyContent={{ xs: "flex-start", sm: "flex-end" }}
        alignItems="center"
        width={{ xs: "100%", sm: "25%" }}
        mt={{ xs: 3, sm: 0 }}
      >
        <CustomButton
          title="Add Property"
          handleClick={() => navigate("/reviews/create")}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
        />
      </Stack>

      { (
        <Box display="flex" alignItems="center" gap={3} mt={8} flexWrap="wrap">
          {/* <CustomButton
            title="Previous"
            handleClick={() => setCurrent((prev) => prev - 1)}
            backgroundColor="#475be8"
            color="#fcfcfc"
            disabled={!(current > 1)}
          /> */}

          {/* <Box
            display={{ xs: "hidden", sm: "flex" }}
            alignItems="center"
            gap="5px"
          >
            Page{" "}
            <strong>
              {current} of {pageCount}
            </strong>
          </Box> */}

          {/* <CustomButton
            title="Next"
            handleClick={() => setCurrent((prev) => prev + 1)}
            backgroundColor="#475be8"
            color="#fcfcfc"
            // disabled={propertyData?.length < 10}
          /> */}

          {/* <Select
            variant="outlined"
            color="info"
            displayEmpty
            required
            defaultValue={10}
            onChange={(e) =>
              setPageSize(e.target.value ? Number(e.target.value) : 10)
            }
            sx={{ height: "40px" }}
            inputProps={{ "aria-label": "Without label" }}
          >
            {[10, 25, 50].map((size) => (
              <MenuItem key={size} value={size}>
                Show {size}
              </MenuItem>
            ))}
          </Select> */}
        </Box>
      )}
    </Box>
  );
};

export default AllReviews;
