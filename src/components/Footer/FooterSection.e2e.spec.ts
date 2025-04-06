import { describe, test } from "vitest";
import { setup } from "@nuxt/test-utils/e2e";

describe("My test", async () => {
    await setup({});

    test("my test", () => {
        return true;
    });
});
