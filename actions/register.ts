"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  console.log(validatedFields);
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }
  return { success: "Registered And Email Sent!" };
};
