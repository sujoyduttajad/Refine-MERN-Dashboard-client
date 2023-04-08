import { useOne } from "@pankod/refine-core";
import { Profile } from "components";
import { useParams } from "@pankod/refine-react-router-v6";
import { Error, Loading } from "components/common/Loading&Error";


const AgentProfile = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: id as string,
  });

  const agentProfile = data?.data ?? [];

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return <div>agent-profile</div>;
};

export default AgentProfile;
