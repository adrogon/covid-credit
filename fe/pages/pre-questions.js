import React from "react";
import {
  Box,
  RadioButtonGroup,
  Heading,
  FormControl,
  FormLabel,
} from "@chakra-ui/core";
import FormControls from "../components/form/Controls";
import { CustomRadio } from "../components/form/CustomRadio";
import { Wrapper } from "../components/Wrapper";

export default function PreQuestions() {
  return (
    <Wrapper>
      <Box>
        <Heading as="h2" fontSize="4xl" margin="30px 0 40px">
          Let’s check we can help you
        </Heading>

        <Box display="flex" justifyContent="space-between" mb="10">
          <FormControl isRequired>
            <FormLabel htmlFor="email">Are you self-employed?</FormLabel>
            <RadioButtonGroup
              defaultValue="rad2"
              onChange={val => console.log(val)}
              isInline
              flexShrink="0"
              flexWrap="nowrap"
              alignSelf="center"
            >
              <CustomRadio value="rad1">No</CustomRadio>
              <CustomRadio value="rad2">Yes</CustomRadio>
            </RadioButtonGroup>
          </FormControl>
        </Box>

        <Box display="flex" justifyContent="space-between" mb="10">
          <FormControl isRequired>
            <FormLabel htmlFor="email">
              Do you trade under your own LTD company?
            </FormLabel>
            <RadioButtonGroup
              defaultValue="rad1"
              onChange={val => console.log(val)}
              isInline
              flexShrink="0"
              flexWrap="nowrap"
              alignSelf="center"
            >
              <CustomRadio value="rad1">No</CustomRadio>
              <CustomRadio value="rad2">Yes</CustomRadio>
            </RadioButtonGroup>
          </FormControl>
        </Box>

        <Box display="flex" justifyContent="space-between" mb="10">
          <FormControl isRequired>
            <FormLabel htmlFor="email">
              How long have you been self employed?
            </FormLabel>
            <RadioButtonGroup
              defaultValue="rad1"
              onChange={val => console.log(val)}
              isInline
              flexShrink="0"
              flexWrap="nowrap"
              alignSelf="center"
            >
              <CustomRadio value="rad1">No</CustomRadio>
              <CustomRadio value="rad2">Yes</CustomRadio>
            </RadioButtonGroup>
          </FormControl>
        </Box>
        <FormControls nextChunk="industry" />
      </Box>
    </Wrapper>
  );
}
