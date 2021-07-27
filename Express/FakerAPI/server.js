const express = require("express");
const faker = require('faker')
const app = express();
const port = 8000;

class User{
    constructor(){
    this.id = faker.random.number();
    this.firstName = faker.name.firstName();
    this.lasttName = faker.name.lastName();
    this.email = faker.internet.email();
    this.phoneNumber = faker.phone.phoneNumber();
    this.password = faker.internet.password();

    }
    
}

class Company{
    constructor(){
        this.id = faker.random.number();
        this.name = faker.name.findName();
        this.address={
            street : faker.address.streetName(),
            city : faker.address.city(),
           
            zipCode : faker.address.zipCode(),
            county : faker.address.country(),

        }


    }
}

    app.get("/api/users/new", (req, res) => {
        const user1 = new User()
        res.json(user1);
    });

    app.get("/api/compnies/new", (req, res) => {
        const company1 = new Company()
        res.json( company1 );
    });

    app.get("/api/user/company", (req, res) => {
        const user2 = new User();
        const company2 = new Company();
        res.json( {user:user2, company:company2} );
    });

    app.listen( port, () => console.log(`Listening on port: ${port}`) );
