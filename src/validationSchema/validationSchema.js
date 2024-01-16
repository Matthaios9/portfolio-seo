import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  metaTitle: z.string().min(1, "Title is required.").max(255),
  metaDescription: z
    .string()
    .min(1, "Description is required.")
    .max(65535)
    .optional(),

  body: z.string().min(1, "Description is required.").max(65535).optional(),
  imageId: z.string().min(1, "image is required.").max(255).optional(),
});

export const patchBlogShema = z.object({
  title: z.string().min(1, "Title is required.").max(255).optional(),
  metaTitle: z.string().min(1, "Title is required.").max(255),
  metaDescription: z.string().min(1, "Description is required.").max(65535),
  body: z.string().min(1, "Description is required.").max(65535).optional(),
  imageId: z.string().min(1, "image is required.").max(255).optional(),
});

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  category: z.string().min(1, "Category is required").max(255),
  description: z.string().min(1, "Description is required").max(65535),
  projectLink: z
    .string()
    .trim()
    .url({ message: "Project link must be url" })
    .or(z.literal(""))
    .optional(),
  githubLink: z
    .string()
    .trim()
    .url({ message: "Github link must be url" })
    .or(z.literal(""))
    .optional(),
  imageId: z.string().min(1, "Image is required").max(255).optional(),
});

export const patchProjectShema = z.object({
  title: z.string().min(1, "Title is required").max(255).optional(),
  category: z.string().min(1, "Category is required").max(255).optional(),
  description: z
    .string()
    .min(1, "Description is required")
    .max(65535)
    .optional(),
  projectLink: z
    .string()
    .trim()
    .url({ message: "Project link must be url" })
    .or(z.literal(""))
    .optional(),
  githubLink: z
    .string()
    .trim()
    .url({ message: "Github link must be url" })
    .or(z.literal(""))
    .optional(),
  imageId: z.string().min(1, "Image is required").max(255).optional(),
});
