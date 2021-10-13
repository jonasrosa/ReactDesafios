import React from "react";
import {createClient} from 'urql'



export const client= createClient({
    url:'https://spotify-graphql-server.herokuapp.com/graphql'
})
