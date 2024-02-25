"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  console.log(validatedFields);
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }
  return { success: "Email Sent!" };
};
