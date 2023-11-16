import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  body: z.string().min(1, "Description is required.").max(65535).optional(),
});

export const patchBlogShema = z.object({
  title: z.string().min(1, "Title is required.").max(255).optional(),
  body: z.string().min(1, "Description is required.").max(65535).optional(),
});
