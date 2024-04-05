import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { LoadingSpinner } from "./loading-spinner";

export default {
  title: "UI/LoadingSpinner",
  component: LoadingSpinner,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof LoadingSpinner>;

const Template: StoryFn<typeof LoadingSpinner> = () => (
  <div style={{ padding: 10 }}>
    <LoadingSpinner />
  </div>
);

export const Default = Template.bind({});
Default.parameters = {
  viewMode: "docs",
};
