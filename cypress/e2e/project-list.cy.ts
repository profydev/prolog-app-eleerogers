import mockProjects from "../fixtures/projects.json";
import { ProjectStatus } from "@api/projects.types";

const statusToText = {
  [ProjectStatus.info]: "Stable",
  [ProjectStatus.warning]: "Warning",
  [ProjectStatus.error]: "Critical",
};

describe("Project List", () => {
  it("shows a loading spinner", () => {
    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    cy.get("[data-testid='loading-spinner']").should("be.visible");

    cy.get("[data-testid='project-list']").should("be.visible");
    cy.get("[data-testid='loading-spinner']").should("not.exist");
  });

  it("shows an error message", () => {
    // setup request mock
    cy.intercept(
      { url: "https://prolog-api.profy.dev/project", times: 4 },
      {
        statusCode: 500,
      },
    );

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // check that the error message is shown
    cy.get("[data-testid='error-message']", { timeout: 15000 })
      .should("be.visible")
      .find("button")
      .click();

    cy.get("[data-testid='project-list']").should("be.visible");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      // setup request mock
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        fixture: "projects.json",
      });

      cy.viewport(1025, 900);

      // open projects page
      cy.visit("http://localhost:3000/dashboard");
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];

      // get all project cards
      cy.get("main")
        .find("[data-cy='project']")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          cy.wrap($el).contains(
            statusToText[
              mockProjects[index].status as keyof typeof statusToText
            ],
          );
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});
