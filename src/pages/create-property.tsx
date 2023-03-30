import React, { useState } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
import { useNavigate } from "@pankod/refine-react-router-v6";
import Form from "components/common/Form";

const CreateProperty = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();

  const [propertyImage, setPropertyImage] = useState({ name: "", url: "" });

  // Details type toggle button
  const [alignment, setAlignment] = useState<string>("sale");
  const handleDetailsChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    console.log(event, newAlignment);
    setAlignment(newAlignment);
  };

  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
  } = useForm();

  // Cloudinary Image file reader
  const handleImageChange = (file: File) => {
    const reader = (readFile: File) =>
      new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result as string);
        fileReader.readAsDataURL(readFile);
      });

    reader(file).then((result: string) =>
      setPropertyImage({ name: file?.name, url: result })
    );
  };

  //
  const onFinishHandler = async (data: FieldValues) => {
    if (!propertyImage.name) return alert("Please select an image");

    await onFinish({ ...data, photo: propertyImage.url, email: user.email });
  };

  // Rendering a reusable form
  return (
    <Form
      type="Create"
      register={register}
      onFinish={onFinish}
      alignment={alignment}
      handleDetailsChange={handleDetailsChange}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
      propertyImage={propertyImage}
    />
  );
};

export default CreateProperty;
