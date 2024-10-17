import { Client, ID, Account, Databases, Storage, Avatars } from "appwrite";

const client = new Client();
const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);
const avatars = new Avatars(client);

export const appwriteConfig = {
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databasesId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  categoriesCollectionId: import.meta.env
    .VITE_APPWRITE_COLLECTION_CATEGORIES_ID,
};

client
  .setEndpoint(appwriteConfig?.endpoint)
  .setProject(appwriteConfig?.projectId);
export { account, ID, databases, storage, avatars };
