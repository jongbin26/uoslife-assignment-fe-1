import type { Meta, StoryObj } from "@storybook/react";
import Cafeteria from "./Cafeteria";

const meta: Meta<typeof Cafeteria> = {
  title: "Components/Cafeteria",
  component: Cafeteria,
  parameters: {
    layout: "fullscreen",
    componentSubtitle: "",
    docs: {
      description: {
        component: "Cafeteria 속성을 설정해주세요",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Cafeteria>;

export const Default: Story = {
  args: {
    cafeteria: {
      location: "학생회관 1층",
      mainMenu: "참치김치덮밥",
      detailMenu: "수제야채튀김",
      nutritionalInfo: "칼로리: 907Kcal / 단백질: 42g",
      openingHours: "17:00~18:30",
      price: "3,800원",
    },
  },
};
export const NaturalScience: Story = {
  args: {
    cafeteria: {
      location: "자연과학관",
      mainMenu: "순한똠양꿍탕",
      detailMenu: "소시지야채볶음, 배추겉절이, 마늘쫑지, 요구르트",
      nutritionalInfo: "칼로리: 950Kcal / 단백질: 51g",
      openingHours: "17:30~18:30",
      price: "6,000원",
    },
  },
};
export const MainBuilding: Story = {
  args: {
    cafeteria: {
      location: "본관 8층",
      mainMenu: "마파두부덮밥",
      detailMenu: "오징어무국, 만두튀김, 마늘쫑락교무침",
      nutritionalInfo: "칼로리: 907Kcal / 단백질: 42g",
      openingHours: "17:30~18:30",
      price: "6,000원",
    },
  },
};
