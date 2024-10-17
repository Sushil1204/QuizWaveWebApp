import { appwriteConfig, databases } from "./config";

export const getAllCategories = async () => {
  try {
    const categories = await databases?.listDocuments(
      appwriteConfig?.databasesId,
      appwriteConfig?.categoriesCollectionId
    );
    if (!categories) throw Error;
    return categories?.documents;
  } catch (error) {}
};
