import CryptoJS from "crypto-js";

const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;

export function encryptPassword(password: string) {
  if (!SECRET_KEY) {
    throw new Error("SECRET_KEY is not defined");
  }

  const key = CryptoJS.enc.Utf8.parse(SECRET_KEY);
  const iv = CryptoJS.lib.WordArray.random(16);

  const encrypted = CryptoJS.AES.encrypt(password, key, {
    iv,
    node: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return iv.toString(CryptoJS.enc.Base64) + ":" + encrypted.toString();
}
