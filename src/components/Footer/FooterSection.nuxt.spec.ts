import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import FooterSection from "./Section.vue";

describe("FooterSection", () => {
    it("Renders a NuxtLink to GitHub Repository", async () => {
        const wrapper = await mountSuspended(FooterSection, {
            stubs: ["NuxtLink"]
        });

        const link = wrapper.findComponent({ name: "NuxtLink" });

        expect(link.exists()).toBe(true);

        const icon = link.find("svg");
        const text = link.find("span");

        expect(icon.exists()).toBe(true);
        expect(text.text()).toContain("GitHub");
    });
});
