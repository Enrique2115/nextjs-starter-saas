import CryptoJS from 'crypto-js';

const SECRET = process.env.JWT_SECRET || 'default-secret';

export const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(data, SECRET).toString();
};

export const decryptData = (ciphertext: string): string => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET);
  return bytes.toString(CryptoJS.enc.Utf8);
};
