import React from 'react'
import { Typography, Box, Stack } from '@pankod/refine-mui'
import { useDelete, useGetIdentity, useShow } from '@pankod/refine-core'
import { useParams, useNavigate } from '@pankod/refine-react-router-v6';
import { ChatBubble, Delete, Edit, Phone, Place, Star } from '@mui/icons-material';
import { CustomButton } from 'components';

const PropertyDetails = () => {
  const navigate = useNavigate();
  return (
    <div>PropertyDetails</div>
  )
}

export default PropertyDetails