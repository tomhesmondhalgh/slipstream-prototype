import { test, expect } from "@playwright/test";

test.describe("Slipstream Happy Path", () => {
  test("Admin track: Dashboard → Review → Send", async ({ page }) => {
    // Screen 1: Dashboard
    await page.goto("/dashboard");
    await expect(page.locator("text=Good morning, Sarah")).toBeVisible();
    await expect(page.locator("text=Safeguarding Adults at Risk")).toBeVisible();
    await expect(page.locator("text=Total Courses")).toBeVisible();
    await expect(page.locator("text=Learners Trained")).toBeVisible();
    await expect(page.locator("text=Avg Completion")).toBeVisible();

    // Verify all 3 course cards visible
    await expect(page.locator("h3:has-text('Lone Worker Safety')")).toBeVisible();
    await expect(page.locator("h3:has-text('Data Protection & GDPR')")).toBeVisible();
    await expect(page.locator("h3:has-text('Safeguarding Adults at Risk')")).toBeVisible();

    // Verify banners
    await expect(page.locator("text=Your GDPR policy has been updated")).toBeVisible();
    await expect(page.locator("text=Draft — ready to review and publish")).toBeVisible();

    // Verify activity feed
    await expect(page.locator("text=Emma Davies").first()).toBeVisible();
    await expect(page.locator("text=Recent Activity")).toBeVisible();

    // Click Course 3 (Safeguarding) → Screen 2
    await page.locator("text=Safeguarding Adults at Risk").first().click();
    await page.waitForURL("**/courses/3/review");

    // Screen 2: BUILD Review
    await expect(page.locator("text=Ready to review")).toBeVisible();
    await expect(page.locator("text=Generated from Safeguarding Policy 2025")).toBeVisible();
    await expect(page.getByRole("heading", { name: "What is adult safeguarding?" })).toBeVisible();
    await expect(page.locator("text=This course was generated from your Safeguarding Policy 2025")).toBeVisible();

    // Verify section nav
    await expect(page.locator("text=The six safeguarding principles")).toBeVisible();
    await expect(page.locator("text=Recognising signs of abuse")).toBeVisible();

    // Click "Publish & send" → Screen 3
    await page.locator("text=Publish & send").click();
    await page.waitForURL("**/courses/3/send");

    // Screen 3: Send Invites
    await expect(page.locator("text=Send Safeguarding Adults at Risk")).toBeVisible();
    await expect(page.locator("text=Published")).toBeVisible();
    await expect(page.locator("text=emma.davies@brightfieldcare.co.uk")).toBeVisible();
    await expect(page.locator("text=Send training to 12 learners")).toBeVisible();
    await expect(page.locator("text=Learners click one link")).toBeVisible();
    await expect(page.locator("text=Your safeguarding training is ready")).toBeVisible();
  });

  test("Admin track: Completion Dashboard", async ({ page }) => {
    // Screen 4: Completion Dashboard
    await page.goto("/courses/1/completions");
    await expect(page.locator("h1:has-text('Lone Worker Safety')")).toBeVisible();
    await expect(page.locator("text=5 of 9 completed")).toBeVisible();

    // Verify filter tabs
    await expect(page.getByRole("button", { name: "All 9" })).toBeVisible();
    await expect(page.getByRole("button", { name: /^Completed/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /^In progress/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /^Not started/i })).toBeVisible();

    // Verify table content
    await expect(page.locator("text=Emma Davies").first()).toBeVisible();
    await expect(page.locator("text=92%").first()).toBeVisible();
    await expect(page.locator("text=Tom Gallagher")).toBeVisible();

    // Test filter: click "Completed"
    await page.getByRole("button", { name: /Completed/i }).click();
    await expect(page.locator("text=Tom Gallagher")).not.toBeVisible();
    await expect(page.locator("text=Emma Davies").first()).toBeVisible();
  });

  test("Learner track: Content → Quiz → Certificate", async ({ page }) => {
    // Screen 5: Course Content
    await page.goto("/learn/abc123");
    await expect(page.getByText("Brightfield Care", { exact: true })).toBeVisible();
    await expect(page.getByText("Lone Worker Safety", { exact: true })).toBeVisible();
    await expect(page.locator("text=Section 3 of 5")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Recognising lone worker risks" })).toBeVisible();
    await expect(page.locator("text=Powered by Slipstream")).toBeVisible();

    // Click "Section 4 →" → Screen 6
    await page.getByRole("link", { name: "Section 4" }).click();
    await page.waitForURL("**/learn/abc123/assessment");

    // Screen 6: Assessment
    await expect(page.locator("text=Question 2 of 20")).toBeVisible();
    await expect(page.locator("text=Within how many hours")).toBeVisible();
    await expect(page.locator("text=24 hours").first()).toBeVisible();
    await expect(page.locator("text=48 hours")).toBeVisible();
    await expect(page.locator("text=SafeLog incident management system")).toBeVisible();

    // Click "Next question →" → Screen 7
    await page.locator("text=Next question").click();
    await page.waitForURL("**/learn/abc123/complete");

    // Screen 7: Certificate
    await expect(page.locator("text=You've completed this training")).toBeVisible();
    await expect(page.getByRole("main").getByText("Lone Worker Safety")).toBeVisible();
    await expect(page.locator("text=92%")).toBeVisible();
    await expect(page.locator("text=Your score")).toBeVisible();
    await expect(page.locator("text=Emma Davies")).toBeVisible();
    await expect(page.locator("text=BC-LW-2026-0014")).toBeVisible();
    await expect(page.locator("text=Download your certificate")).toBeVisible();
    await expect(page.locator("text=Your completion has been recorded")).toBeVisible();
  });

  test("Root redirects to dashboard", async ({ page }) => {
    await page.goto("/");
    await page.waitForURL("**/dashboard");
    await expect(page.locator("text=Good morning, Sarah")).toBeVisible();
  });
});
