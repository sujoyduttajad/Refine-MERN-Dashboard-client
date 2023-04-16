import { useOne, useGetIdentity } from "@pankod/refine-core";
import { Profile } from "components";
import { Error, Loading } from "components/common/Loading&Error";
import Toasts from "components/common/Toasts";

const MyProfile = () => {
  const { data: user } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userid,
  });

  const myProfile = data?.data;

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  if (!myProfile) {
    return <Toasts message="User Not found" />;
  }

  return (
    <Profile
      type="My"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  );
};

export default MyProfile;
