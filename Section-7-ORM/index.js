require('dotenv/config'); // this format is used in the latest update of drizzle ORM
const db = require('./db');
const { usersTable } = require('./drizzle/schema');

// the below line is not required
//dotenv.config();  // this line automatically tries to read a .env file and all the variables present in that .env file are loaded in the dotenv.

async function getAllUsers() {
    const users = await db.select().from(usersTable);
    console.log(`Users in db`, users);
    return users;
}

async function createUser({ id, name, email }) {
    await db.insert(usersTable).values({
        id,
        name,
        email,
    });
}

//createUser({id:1, name:"Piyush", email:"piyush@example.com"});
//createUser({id:2, name:"Ayush", email:"ayush@example.com"});

getAllUsers();