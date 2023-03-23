import { Add } from "@mui/icons-material";
import { useTable } from "@pankod/refine-core";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Select,
  MenuItem,
} from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";
import { PropertyCard, CustomButton } from "components";

const AllProperties = () => {
  const navigate = useNavigate();

  const {
    tableQueryResult: { data, isLoading, isError },
    current,
    setCurrent,
    pageCount,
    setPageSize,
    sorter,
    setSorter,
    filters,
    setFilters,
  } = useTable();

  const allProperties = data?.data ?? [];

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error...</Typography>;

  return (
    <Box>
      <Box
        mt="20px"
        sx={{ display: "flex", flexWrap: "wrap", gap: 3, width: "100%" }}
      >
        <Stack direction="column" width="100%">
          <Typography fontSize={25} fontWeight={700} color="#11142d">
            {!allProperties.length
              ? "There are no properties"
              : "All Properties"}
          </Typography>
          <Box
            mb={2}
            mt={3}
            display="flex"
            flexWrap="wrap"
            width="100%"
            height="20%"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              gap={2}
              flexWrap="wrap"
              mb={{ xs: "20", sm: 0 }}
            >
              <CustomButton
                title="Sort price"
                handleClick={() => {}}
                backgroundColor="#475be8"
                color="#fcfcfc"
                heightValue="40px"
                paddingValue="1px 10px"
                fontSizeValue="16.5px"
              />
              <TextField
                variant="outlined"
                color="info"
                value=""
                onChange={() => {}}
                placeholder="Search by Title"
                size="small"
              />
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                defaultValue=""
                value=""
                onChange={() => {}}
                sx={{ height: "40px" }}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">All</MenuItem>
              </Select>
            </Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <CustomButton
                title="Add Property"
                handleClick={() => navigate("/properties/create")}
                backgroundColor="#475be8"
                color="#fcfcfc"
                icon={<Add />}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {allProperties.map((property) => (
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

      {allProperties.length > 0 && (
        <Box display="flex" gap={2} mt={3} flexWrap="wrap">
          <CustomButton
            title="Previous"
            handleClick={() => setCurrent((prev) => prev - 1)}
            backgroundColor="#475be8"
            color="#fcfcfc"
            disabled={!(current > 1)}
          />

          <Box
            display={{ xs: "hidden", sm: "flex" }}
            alignItems="center"
            gap="5px"
          >
            Page{" "}
            <strong>
              {current} of {pageCount}
            </strong>
          </Box>

          <CustomButton
            title="Next"
            handleClick={() => setCurrent((prev) => prev + 1)}
            backgroundColor="#475be8"
            color="#fcfcfc"
            disabled={current === pageCount}
          />
        </Box>
      )}
    </Box>
  );
};

export default AllProperties;
