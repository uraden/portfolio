const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema')
const mongoose = require("mongoose") 
const cors = require('cors');


const app= express();

//allow cross platform to use

app.use(cors())

mongoose.connect("mongodb+srv://gql-jamal:jamfaznod@cluster0.oxngn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

mongoose.connection.once('open', () => {
    console.log('--------------------Connected to library database--------------------')
})





app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(5000, ()=>{
    console.log('--------------------now listening for port on 5000-------------------')
})