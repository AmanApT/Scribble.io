import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getFile = query({
    args:{
        teamId:v.string()
    },
    handler:async(ctx, args_0)=> {
        const result = await ctx.db.query('files').filter((q)=>q.eq(q.field('teamId'),args_0.teamId)).collect();
        return result;
    },
})

export const createFile = mutation({
    args:{
        fileName:v.string(),
        createdBy:v.string(),
        teamId: v.string(),
        archived: v.boolean(),
        document: v.string(),
        whiteboard: v.string(),
    },
    handler:async (ctx,args)=>{
        return await ctx.db.insert('files', args)
    }
})
