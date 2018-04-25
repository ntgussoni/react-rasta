import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import BlueSquare from "../__storybook__/BlueSquare";
import Story from "../__storybook__/Story";
import Title from "../__storybook__/Title";

import { Column, Container, Row } from "..";

storiesOf("RowJustifyContent", module)
  .add("center", () => (
    <Story>
      <Title>center</Title>
      <Container>
        <Row justifyContent={"center"}>
          <Column size={2}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("flex-end", () => (
    <Story>
      <Title>flex-end</Title>
      <Container>
        <Row justifyContent={"flex-end"}>
          <Column size={2}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("flex-start", () => (
    <Story>
      <Title>flex-start</Title>
      <Container>
        <Row justifyContent={"flex-start"}>
          <Column size={2}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("space-around", () => (
    <Story>
      <Title>space-around</Title>
      <Container>
        <Row justifyContent={"space-around"}>
          <Column size={2}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("space-between", () => (
    <Story>
      <Title>space-between</Title>
      <Container>
        <Row justifyContent={"space-between"}>
          <Column size={2}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ));