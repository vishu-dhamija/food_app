"use server";

import { redirect } from "next/dist/server/api-utils";
import { SaveMeal } from "./meals";

export async function ShareMeal(formData) {
  const image = formData.get("image");

  // Validate the image is a File
  if (!(image instanceof File)) {
    throw new Error("Invalid image upload. Please upload a valid image file.");
  }

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: image,
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  console.log("Meal data:", meal);

  // Save the meal
  await SaveMeal(meal);
  // redirect("/meals");
}
