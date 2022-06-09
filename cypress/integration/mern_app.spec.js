/* global cy */

describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.request("POST", "https://redux-sv.herokuapp.com/api/test/reset");
    const user = {
      username: "tomas1368",
      password: "ESCALERA",
      email: "tomi1368@gmail.com",
    };
    cy.request(
      "POST",
      "https://redux-sv.herokuapp.com/api/auth/register",
      user
    );
  });
  it("test minimo", () => {
    cy.contains("Best Sellers");
  });
  it("login", () => {
    cy.contains("Hello, Guest, Sign in").click();
    cy.get("input[name=email]").type("tomi1368@gmail.com");
    cy.get("input[name=password]").type("ESCALERA");
    cy.get("button[type=submit]").click();
    cy.contains("Hello tomas1368").should("be.visible");
  });
  it.only("failed login", () => {
    //only es para ejecutar solo este
    cy.contains("Hello, Guest, Sign in").click();
    cy.get("input[name=email]").type("tomi1368@gmail.com");
    cy.get("input[name=password]").type("ESCALERA2");
    cy.get("button[type=submit]").click();
    cy.contains("New to Amazon");
  });
});

describe("Logged User", () => {
  beforeEach(() => {
    cy.request("POST", "https://redux-sv.herokuapp.com/api/test/reset");
    const user = {
      username: "tomas1368",
      password: "ESCALERA",
      email: "tomi1368@gmail.com",
    };
    cy.request(
      "POST",
      "https://redux-sv.herokuapp.com/api/auth/register",
      user
    );
    cy.visit("http://localhost:3000/");
    cy.contains("Hello, Guest, Sign in").click();
    cy.get("input[name=email]").type("tomi1368@gmail.com");
    cy.get("input[name=password]").type("ESCALERA");
    cy.get("button[type=submit]").click(); //Esto es lo mismo que testee arriba es mejor usar la API directamente
  });

  it("Add Manteca", () => {
    cy.get("button[type=submit]").click();
    cy.contains("Manteca").click();
    cy.contains("Add to Cart").click();
    cy.contains("Cart").click();
    cy.contains("Manteca").should("be.visible");
  });
  it.only("Add Product", () => {
    const product = {
      title: "Papel Higenico",
      description: "Increiblemente suave",
      categories: ["Cloth"],
      price: 220,
      rating: 3,
      image:
        "https://onlinepngtools.com/images/examples-onlinepngtools/purple-flowers.png",
      quantity: 23,
    };
    const user = {
      password: "ESCALERA",
      email: "tomi1368@gmail.com",
    };
    cy.request({
      url: "https://redux-sv.herokuapp.com/api/auth/login",
      method: "POST",
      body: user,
    }).then((res) => {
      cy.request({
        url: "https://redux-sv.herokuapp.com/api/product",
        method: "POST",
        headers: {
          authorization: `Bearer ${res.body.token}`,
        },
        body: product,
      });
    });

    cy.get("button[type=submit]").click();
    cy.contains("Papel Higenico");
    //Si quiero guardar un elemento como en una variable para reutilizar se usa as.  cy.contain("Papel Higenico").as("papel card")
  }); //Luego para agarrar el elemento ponemos cy.get("@papel card")
  //Antes de cada test vamos a limpiar nuetra base de datos de test
});
