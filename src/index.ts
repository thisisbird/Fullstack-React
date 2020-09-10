import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import microConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolvers } from "./resolvers/hello";
import { PostResolvers } from "./resolvers/post";
import { Post } from "./entities/Post";
const main = async () =>{
    console.log("__dirname",__dirname);
    
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();

    const app = express();
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers:[HelloResolvers,PostResolvers],
            validate: false,
        }),
        context:()=>({ em: orm.em })
    })
    apolloServer.applyMiddleware({app});
    app.get('/',(_,res)=>{
        res.send('hello');
    })
    app.listen(4000,() =>{
        console.log('server started');
    })
    // const post = orm.em.create(Post,{title:'my first post'});//有寫入資料庫
    // await orm.em.persistAndFlush(post);
    console.log('---------------sql 2 -----------------');
    // await orm.em.nativeInsert(Post,{title:'my first post 2'});
    const posts = await orm.em.find(Post,{});//讀取
    console.log(posts);
    
}
console.log("hello world11");
main().catch((err)=>{
    console.log(err);
    
});