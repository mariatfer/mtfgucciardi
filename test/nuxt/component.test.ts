import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import SkillsSection from "@/components/views/about/SkillsSection.vue";

describe("SkillsSection", () => {
  it("renders the title correctly", async () => {
    const wrapper = await mountSuspended(SkillsSection, {
      props: {
        title: "Skills",
        image: { url: "/img/skills.svg", alt: "Skills" },
        skills: [
          {
            id: 1,
            title: "Frontend",
            items: [
              { id: 1, title: "JavaScript", name: "javascript" },
              { id: 2, title: "TypeScript", name: "typescript" },
            ],
          },
        ],
      },
    });

    expect(wrapper.text()).toContain("Frontend");
    expect(wrapper.find(".skills__grid").exists()).toBe(true);
    expect(wrapper.findAll(".skills__icon").length).toBe(2);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
