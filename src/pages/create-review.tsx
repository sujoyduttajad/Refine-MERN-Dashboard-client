import { useState } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
// import { useNavigate } from "@pankod/refine-react-router-v6";
import ReviewForm from "components/common/ReviewForm";

const CreateReviews = () => {
  // const navigate = useNavigate();
  const { data: user } = useGetIdentity();

  const [reviewerImage, setReviewerImage] = useState({ name: "", url: "" });

  const {
    refineCore: { onFinish, formLoading, queryResult },
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
      setReviewerImage({ name: file?.name, url: result })
    );
  };

  //
  const onFinishHandler = async (data: FieldValues) => {
    if (!reviewerImage.name) return alert("Please select an image");

    await onFinish({ ...data, photo: reviewerImage.url, email: user.email });
  };

  // Rendering a reusable form
  return (
    <ReviewForm
      type="Create"
      queryResult={queryResult}
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
      reviewerImage={reviewerImage}
    />
  );
};

export default CreateReviews;
