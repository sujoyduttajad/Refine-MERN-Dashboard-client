import { useOne } from "@pankod/refine-core";
import { Profile } from "components";
import { useParams } from "@pankod/refine-react-router-v6";
import { Error, Loading } from "components/common/Loading&Error";
import Toasts from "components/common/Toasts";

const AgentProfile = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: id as string,
  });

  const agentProfile = data?.data;

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  if (!agentProfile) {
    return <Toasts message="Agent Not found" />;
  }

  return (
    <Profile
      type="Agent"
      name={agentProfile.name}
      email={agentProfile.email}
      avatar={agentProfile.avatar}
      properties={agentProfile.allProperties}
    />
  );
};

export default AgentProfile;
