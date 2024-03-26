describe("PetClinic Veterinaries Check", () => {
  it("successfully see the veterinaries", () => {
    // Step 1: Visit the homepage
    cy.visit("http://localhost:8080");

    // Step 2: Navigate to the Add New Pet form
    // This step depends on the structure of your application.
    // For instance, if there's a link to the form:
    cy.contains("Add New Pet").click(); // Adjust based on the actual text/link

    // Step 3: Fill in the form
    // Replace the selectors with the actual form field identifiers
    cy.get('input[name="name"]').type("Buddy");
    cy.get('input[name="birthDate"]').type("2022-01-01");
    cy.get('select[name="type"]').select("Dog");
    cy.get('input[name="owner"]').type("John Doe");

    // Step 4: Submit the form
    cy.get("form").submit();

    // Step 5: Verify the addition
    // Adjust the verification step based on how your application confirms the addition
    cy.contains("Pet Buddy has been added").should("be.visible");
  });
});
