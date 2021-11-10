import { cyan } from "@material-ui/core/colors"

context("test cases for Header",()=>{

    beforeEach(()=>{
        cy.visit("/")
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    it("Should have 🅵🅸🅻🅼&🅲🅷🅸🅻🅻 Content" ,()=>{
        cy.get("#brandName").should("have.text", "🅵🅸🅻🅼&🅲🅷🅸🅻🅻")
    })

    it("Should have Login Button" ,()=>{
        cy.get(".btn").should("have.text", "Login")
    })

    it("Should have Movies Content" ,()=>{
        cy.get("#Movies").should("have.text", "Movies")
    })

    it("Should have AboutUs Content" ,()=>{
        cy.get("#AboutUs").should("have.text", "AboutUs")
    })

    it("Should have Filter Content" ,()=>{
        cy.get("#Filter").should("have.text", "Filter")
    })
})

context("test cases for Footer",()=>{

    beforeEach(()=>{
        cy.visit("/")
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    it("Should have Location" ,()=>{
        cy.get("#location").should("have.text", " Noida , Uttar Pradesh ")
    })

    it("Should have Email" ,()=>{
        cy.get("#mail").should("have.text", " info@filmchill.com ")
    })

    it("Should have Contact Number" ,()=>{
        cy.get("#mobile").should("have.text", " +91 9876543210 ")
    })

})

context("test cases for AboutUs",()=>{

    beforeEach(()=>{
        cy.visit("/about")
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    it("Should Have AboutUs", () => {
        cy.get("#about").should("have.text", "About Us")
    })

    it("Should Have Our Team", () => {
        cy.get("#team").should("have.text", "Our Team")
    })

})

context("test cases for Search Movie",()=>{

    beforeEach(()=>{
        cy.visit("/")
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    it("Movie Not Found", () => {
        cy.visit("/ghfd")
        cy.get("#noData").should("have.text", "No Data Found")
        cy.wait(1000)
    })

})

context("test cases for Register a User",()=>{

    beforeEach(()=>{
        cy.visit("/register")
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    it("Empty email During Registration", () => {
        cy.get("#name").type("ram")
        cy.get("#email").type(" ")
        cy.get("#pswd").type("Ram@123")
        cy.get("#confirm").type("Ram@123")
        cy.get("#buttonRegister").click()
        cy.wait(1000)
        cy.get("#msg").should("have.text", "Email Can't be Empty")
    })

    it("Password not Matched During Registration", () => {
        cy.get("#name").type("ram")
        cy.get("#email").type("ram@gl.com")
        cy.get("#pswd").type("Ram@123")
        cy.get("#confirm").type("Ram@1234")
        cy.get("#buttonRegister").click()
        cy.wait(1000)
        cy.get("#msg").should("have.text", "password and Confirm Password not Matched")
    })

    it("Password Validation During Registration", () => {
        cy.get("#name").type("ram")
        cy.get("#email").type("film@chill.com")
        cy.get("#pswd").type("Ram")
        cy.get("#confirm").type("Ram")
        cy.get("#buttonRegister").click()
        cy.wait(1000)
        cy.get("#msg").should("have.text", "password should contain atleast one number and one special character")
    })

    it("User Already Exist", () => {
        cy.get("#name").type("ram")
        cy.get("#email").type("ram@gmail.com")
        cy.get("#pswd").type("Ram@123")
        cy.get("#confirm").type("Ram@123")
        cy.get("#buttonRegister").click()
        cy.wait(1000)
        cy.get("#msg").should("have.text", "Already Registered !")
    })

    it("Successful Register", () => {
        cy.get("#name").type("ram")
        cy.get("#email").type("ram@gl.com")
        cy.get("#pswd").type("Ram@1234")
        cy.get("#confirm").type("Ram@1234")
        cy.get("#buttonRegister").click()
        cy.wait(1000)
    })

})

context("test cases for Forget Password",()=>{

    beforeEach(()=>{
        cy.visit("/password")
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

      it("Not An Existing User", () => {
        cy.get("#user").type("xyz")
        cy.get("#email").type("xyz@gmail.com")
        cy.get("#pass").type("xyz@123")
        cy.get("#confirm").type("xyz@123")
        cy.get("#forgetPass").click()
        cy.wait(1000)
        cy.get("#msg").should("have.text", "Not a Registered User !")
    })

    it("Reset Password", () => {
        cy.get("#user").type("ram")
        cy.get("#email").type("ram@gl.com")
        cy.get("#pass").type("ram@12345")
        cy.get("#confirm").type("ram@12345")
        cy.get("#forgetPass").click()
        cy.wait(1000)
        cy.get("#msg").should("have.text", "Password Updated Successfully !")
    })
 
})

context("test cases for Login",()=>{

    beforeEach(()=>{
        cy.visit("/login")
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

      it("Empty Email During Login", () => {
        cy.get("#email").type(" ")
        cy.get("#password").type("Ram@123")
        cy.get("#buttonLogin").click()
        cy.wait(1000)
        cy.get("#invalid").should("have.text", "Enter UserName")
    })

    it("Invalid Credential During Login", () => {
        cy.get("#email").type("ram@gmail.com")
        cy.get("#password").type("Ram")
        cy.get("#buttonLogin").click()
        cy.wait(1000)
        cy.get("#invalid").should("have.text", "Invalid UserName & Password !")
    })

    it("User Login working", () => {
        cy.get("#email").type("ram@gmail.com")
        cy.get("#password").type("Ram@123")
        cy.get("#buttonLogin").click()
        cy.wait(1000)
        cy.get("#logout").should("have.text", "ram@gmail.com")
        cy.visit("/details/438631")
        cy.wait(2000)
    })
})

context("test cases for Logout",()=>{
    beforeEach(()=>{
        cy.visit("/")
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    it("Logout", () => {
        cy.visit("/logout")
    })
})

context("test cases for 🅵🅸🅻🅼&🅲🅷🅸🅻🅻 Application",()=>{
    beforeEach(()=>{
        cy.visit("/login")
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    it("See flow of Application", () => {
        cy.get("#email").type("ram@gmail.com")
        cy.get("#password").type("Ram@123")
        cy.get("#buttonLogin").click()
        cy.wait(1000)
        cy.visit("/favorites")
        cy.wait(1000)
        cy.get("#book").click()
        cy.wait(1000)
        cy.get("#theatre").click()
        cy.wait(1000)
        cy.get("#seat1").click()
        cy.wait(1000)
        cy.get("#seat").click()
        cy.wait(5000)
    })
})
