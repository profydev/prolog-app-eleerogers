import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ErrorMessage } from "./error-message";

export default {
  title: "UI/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof ErrorMessage>;

const Template: StoryFn<typeof ErrorMessage> = () => (
  <div style={{ padding: 10 }}>
    <ErrorMessage />
  </div>
);

export const Default = Template.bind({});
Default.parameters = {
  viewMode: "docs",
};
