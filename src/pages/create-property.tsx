import { useState } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
import { useNavigate } from "@pankod/refine-react-router-v6";
import Form from "components/common/Form";

const CreateProperty = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();

  const [propertyImage, setPropertyImage] = useState({ name: "", url: "" });
  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
  } = useForm();

  return <div>Create Property</div>;
};

export default CreateProperty;
