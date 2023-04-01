import React from 'react'
import { Typography, Box, Stack } from '@pankod/refine-mui'
import { useDelete, useGetIdentity, useShow } from '@pankod/refine-core'
import { useParams, useNavigate } from '@pankod/refine-react-router-v6';
import { ChatBubble, Delete, Edit, Phone, Place, Star } from '@mui/icons-material';
import { CustomButton } from 'components';

const PropertyDetails = () => {

  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  // ID of the current resource we are trying to view
  const { id } = useParams();
  // To quickly delete a resource
  const { mutate } = useDelete();
  const { queryResult } = useShow();

  const { data, isLoading, isError } = queryResult;

  const propertyDetails = data?.data ?? {};
  console.log(propertyDetails);

  

  return (
    <div>PropertyDetails</div>
  )
}

export default PropertyDetails