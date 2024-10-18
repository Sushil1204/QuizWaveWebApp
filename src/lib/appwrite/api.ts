import { account, appwriteConfig, databases, ID } from "./config";

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

export const registerUser = async (phoneNumber?: string) => {
  try {
    const token = await account.createPhoneToken(
      ID.unique(),
      "+91" + phoneNumber || ""
    );
    return token;
  } catch (error) {}
};

export const updateName = async (userName: string) => {
  try {
    const result = await account.updateName(userName);
    return result;
  } catch (error) {}
};

type ILoginCred = {
  userID?: string;
  OTP?: string;
};

export const loginUser = async ({ userID, OTP }: ILoginCred) => {
  try {
    const session = await account.createSession(userID || "", OTP || "");
    return session;
  } catch (error) {}
};
