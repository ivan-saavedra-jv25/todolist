// src/services/auth.ts
export const loginUser = async (email: string, password: string): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
      if (email === 'ivanandres.hj@gmail.com' && password === '123456') {
        resolve({ success: true });
      } else {
        resolve({ success: false });
      }
    
  });
};
