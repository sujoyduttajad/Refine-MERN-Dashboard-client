import { useOne } from "@pankod/refine-core";
import { AgentProfile } from "components";
import { useParams } from "@pankod/refine-react-router-v6";
import { Error, Loading } from "components/common/Loading&Error";
import Toasts from "components/common/Toasts";

const AgentProfilePage = () => {
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
    <AgentProfile
      id={id}
      type="Agent"
      name={agentProfile.name}
      email={agentProfile.email}
      avatar={agentProfile.avatar}
      properties={agentProfile.allProperties}
    />
  );
};

export default AgentProfilePage;
