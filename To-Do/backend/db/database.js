import mysql from 'mysql';

//creating the connection between database 
export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    port:3300,
    password:"******",
    database:"todo"
});

//open the mysql connection
db.connect(error=>{
    if(error) throw error;
    console.log("DB connected!");
});