import { useOne, useGetIdentity } from "@pankod/refine-core";
import { Box } from "@pankod/refine-mui";
import { Profile } from "components";
import { Error, Loading } from "components/common/Loading&Error";


const MyProfile = () => {
  const { data: user } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userid,
  });

  const myProfile = data?.data ?? [];

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Box>
      <Profile />
    </Box>
  )
}

export default MyProfile