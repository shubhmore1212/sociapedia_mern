import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import { EditOutlined } from "@mui/icons-material";
import { Formik } from "formik";
import * as yup from "yup";
import { setLogin } from "states";
import Dropzone from "react-dropzone";

import FlexBetween from "components/FlexBetween";

const FIELD_REQUIRED = "Field cannot be blank";

const registerSchema = yup.object.shape({
  firstName: yup.string().trim().required(FIELD_REQUIRED),
  lastName: yup.string().trim().required(FIELD_REQUIRED),
  email: yup.string().email("Invalid Email").required(FIELD_REQUIRED),
  password: yup.string().trim().required(FIELD_REQUIRED),
  location: yup.string().trim().required(FIELD_REQUIRED),
  occupation: yup.string().trim().required(FIELD_REQUIRED),
  picture: yup.string().trim().required(FIELD_REQUIRED),
});

const loginSchema = yup.object.shape({
  email: yup.string().email("Invalid Email").required(FIELD_REQUIRED),
  password: yup.string().trim().required(FIELD_REQUIRED),
});

const Form = () => {
  return <Box>Form</Box>;
};

export default Form;
