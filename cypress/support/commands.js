Cypress.Commands.add("login",(user)=>{
    cy.request({
        url:"https://mern-amazon12.herokuapp.com/api/auth/login",
        method:"POST",
        body:user
    })
}) //luego para usar el comando uso cy.login()