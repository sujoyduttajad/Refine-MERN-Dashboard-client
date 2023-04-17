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
import { Error, Loading } from "components/common/Loading&Error";
import { useMemo } from "react";

const propertyTypeList = [
  "Apartment",
  "Villa",
  "House",
  "Farmhouse",
  "Condos",
  "Townhouse",
  "Duplex",
  "Studio",
  "Chalet",
];

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

  const currentPrice = sorter.find((item) => item.field === "price")?.order;

  // Sort price filter
  const toggleSort = (field: string) => {
    setSorter([{ field, order: currentPrice === "asc" ? "desc" : "asc" }]);
  };

  // Search filter and Dropdown
  const currentFilterValues = useMemo(() => {
    const logicalFilters = filters.flatMap((item) =>
      "field" in item ? item : []
    );

    return {
      title: logicalFilters.find((item) => item.field === "title")?.value || "",
      propertyType:
        logicalFilters.find((item) => item.field === "propertyType")?.value ||
        "",
    };
  }, [filters]);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Box mb={8}>
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
            flexWrap={{ xs: "wrap", sm: "nowrap" }}
            width="100%"
            height="20%"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              gap={2}
              flexWrap="wrap"
              alignItems="center"
              width="100%"
              mb={{ xs: "20", sm: 0 }}
            >
              <CustomButton
                title={`Sort price ${currentPrice === "asc" ? "↑" : "↓"}`}
                handleClick={() => toggleSort("price")}
                backgroundColor="#475be8"
                color="#fcfcfc"
                heightValue="40px"
                paddingValue="1px 10px"
                fontSizeValue="16.5px"
              />
              <TextField
                variant="outlined"
                color="info"
                value={currentFilterValues.title}
                onChange={(e) => {
                  setFilters([
                    {
                      field: "title",
                      operator: "contains",
                      value: e.currentTarget.value
                        ? e.currentTarget.value
                        : undefined,
                    },
                  ]);
                }}
                placeholder="Search by Title"
                size="small"
                sx={{ width: "50%" }}
              />
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                defaultValue=""
                value={currentFilterValues.propertyType}
                onChange={(e) => {
                  setFilters(
                    [
                      {
                        field: "propertyType",
                        operator: "eq",
                        value: e.target.value,
                      },
                    ],
                    "replace"
                  );
                }}
                sx={{ height: "40px" }}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">All</MenuItem>
                {propertyTypeList.map((type) => (
                  <MenuItem key={type} value={type.toLowerCase()}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Stack
              direction="row"
              justifyContent={{ xs: "flex-start", sm: "flex-end" }}
              alignItems="center"
              width="100%"
              mt={{ xs: 3, sm: 0 }}
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
      {currentPrice ? (
        currentPrice === "asc" ? (
          <Typography variant="body2">
            Properties listed from <strong>cheapest</strong> to{" "}
            <strong>most expensive</strong>
          </Typography>
        ) : (
          <Typography variant="body2">
            Properties listed from <strong>most expensive</strong> to{" "}
            <strong>cheapest</strong>
          </Typography>
        )
      ) : (
        ""
      )}

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
        <Box display="flex" alignItems="center" gap={3} mt={8} flexWrap="wrap">
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

          <Select
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
          </Select>
        </Box>
      )}
    </Box>
  );
};

export default AllProperties;
