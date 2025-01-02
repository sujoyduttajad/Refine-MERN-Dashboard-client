import { useState } from "react";
import { useGetIdentity, useMany } from "@pankod/refine-core";
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
// import { useNavigate } from "@pankod/refine-react-router-v6";
import ReviewForm from "components/common/ReviewForm";
import { PropertyDropdownData } from "interfaces/reviews";

const CreateReviews = () => {
  // const navigate = useNavigate();
  const { data: user } = useGetIdentity();

  //   const [reviewerImage, setReviewerImage] = useState({ name: "", url: "" });

  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
  } = useForm();

  const {
    data: additionalData,
    isLoading: isAdditionalLoading,
    isError: isAdditionalError,
  } = useMany({ resource: "properties", ids: [] });



  // Cloudinary Image file reader
  //   const handleImageChange = (file: File) => {
  //     const reader = (readFile: File) =>
  //       new Promise<string>((resolve, reject) => {
  //         const fileReader = new FileReader();
  //         fileReader.onload = () => resolve(fileReader.result as string);
  //         fileReader.readAsDataURL(readFile);
  //       });

  //     // reader(file).then((result: string) =>
  //     //   setReviewerImage({ name: file?.name, url: result })
  //     // );
  //   };

  //
  const onFinishHandler = async (data: FieldValues) => {
    // if (!reviewerImage.name) return alert("Please select an image");

    await onFinish({ ...data, email: user.email });
  };

  const propertyDropdownData: PropertyDropdownData[] = additionalData?.data?.map((prop) => ({
    id: prop._id,
    propName: prop.title,
    photo: prop.photo,
  })) || [];

  // Rendering a reusable form
  return (
    <ReviewForm
      queryResult={user}
      register={register}
    //   onFinish={onFinish}
      formLoading={formLoading}
    //   handleSubmit={handleSubmit}
      propertyList={propertyDropdownData}
    //   onFinishHandler={onFinishHandler}
    />
  );
};

export default CreateReviews;
