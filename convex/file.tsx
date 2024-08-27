import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getFile = query({
  args: {
    teamId: v.string(),
  },
  handler: async (ctx, args_0) => {
    const result = await ctx.db
      .query("files")
      .filter((q) => q.eq(q.field("teamId"), args_0.teamId))
      .order("desc")
      .collect();
    return result;
  },
});

export const createFile = mutation({
  args: {
    fileName: v.string(),
    createdBy: v.string(),
    teamId: v.string(),
    archived: v.boolean(),
    document: v.string(),
    whiteboard: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("files", args);
  },
});
export const updateFile = mutation({
  args: {
    _id: v.id("files"),
    document: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args._id, { document: args.document });
  },
});
export const updateWhiteboard = mutation({
  args: {
    _id: v.id("files"),
    whiteboard: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args._id, { whiteboard: args.whiteboard });
  },
});
// when we want multiple files, we use query, but to get only a single file then we use get

export const getFileById = query({
  args:{
    _id: v.id("files")
  },
 handler: async(ctx,args)=>{
  const result = await ctx.db.get(args._id);
  return result;
 }
})