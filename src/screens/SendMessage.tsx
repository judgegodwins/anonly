import React, { Component, FC, useEffect, useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";

import FullscreenWrapper from "components/FullscreenWrapper";
import Header from "components/Header";
import { Link, useParams, useNavigate } from "react-router-dom";
import SlideInCard from "components/SlideInCard";
import Typography from "components/Typography";
import Padding from "components/Padding";
import { styleConfig } from "config";
import TextArea from "components/TextArea";
import Button from "components/Button";
import SuccessResponse from "components/SendMessageComponents/SuccessResponseComponent";
import MessageService from "services/MessageService";
import LoadingButton from "components/LoadingButton";

const Schema = Yup.object().shape({
  text: Yup.string().required("Text is required"),
});

const SendMessage: FC<{}> = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const params = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    MessageService.checkUser(params.username as string)
      .catch(e => {
        navigate('/login', { replace: true });
      })
  }, [params.username])

  const formik = useFormik({
    initialValues: {
      text: "",
    },
    validationSchema: Schema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      MessageService.sendMessage(values, params.username as string)
        .then(({ data: resData }) => {
          setIsSubmitted(true);
          resetForm();
        })
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      <FullscreenWrapper color="secondary">
        <Header
          noSidePaddingDesktop
          height="25%"
          type="secondary"
          firstText="You're sending a message to"
          outstandingText={params.username as string}
        />
        {!isSubmitted ? (
          <SlideInCard>
            <Form
              autoComplete="off"
              noValidate
              onSubmit={handleSubmit}
              style={{ width: "inherit", height: "inherit" }}
            >
              <Padding padding={[0, 0, 15, 0]}>
                <Typography
                  type="outstand-p"
                  color={styleConfig.color.textSecondary}
                >
                  Your message
                </Typography>
              </Padding>
              <TextArea
                height="200px"
                width="100%"
                {...getFieldProps("text")}
                error={Boolean(touched.text && errors.text)}
                helperText={touched.text && errors.text}
              />
              <LoadingButton
                type="submit"
                isLoading={isSubmitting}
                style={{ float: "right", marginTop: "15px" }}
              >
                Send
              </LoadingButton>
            </Form>
          </SlideInCard>
        ) : (
          <SlideInCard>
            <SuccessResponse />
          </SlideInCard>
        )}
      </FullscreenWrapper>
    </FormikProvider>
  );
};

export default SendMessage;
