import { useOne, useGetIdentity } from "@pankod/refine-core";
import { Profile } from "components";
import { Error, Loading } from "components/common/Loading&Error";


const AgentProfile = () => {
  const { data: user } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userid,
  });

  const myProfile = data?.data ?? [];

  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  
  return <div>agent-profile</div>;
};

export default AgentProfile;
