import jwt from 'jsonwebtoken';

const JWT_SECRET = "This_is_my_secret_key";


export const verifyToken = (token: string): {userId: string} => {
  try{
   const decoded = jwt.verify(token, JWT_SECRET) as {userId: string};
   return  decoded
  }catch(error){
    throw new Error('Invalid token')
  }
}