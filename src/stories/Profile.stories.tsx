import { type Meta, type StoryObj } from "@storybook/react";
import Profile from "../components/Profile";

const meta: Meta<typeof Profile> = {
  title: "Profile",
  component: Profile,
  tags: ["autodocs"],
};
type Story = StoryObj<typeof Profile>;

export const FileType: Story = {
  args: {},
};

export default meta;
