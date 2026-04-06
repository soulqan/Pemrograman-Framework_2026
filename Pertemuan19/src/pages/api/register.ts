import { signUp } from '@/utils/db/servicefirebase';
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    name: string
    alamat : string
}

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>
) {
    if(req.method === "POST"){
        const { email, fullname, password } = req.body;
        
        if (!email || email.toString().trim() === '') {
            res.status(400).json({name: "Email wajib diisi", alamat: ""});
            return;
        }
        
        if (!password || password.toString().length < 6) {
            res.status(400).json({name: "Password minimal 6 karakter", alamat: ""});
            return;
        }
        
        await signUp(req.body, (result: {status: string, message: string}) => {
            if(result.status === "success"){
                res.status(200).json({name: result.message, alamat: ""});
            }else{
                res.status(400).json({name: result.message, alamat: ""});
            }
        });
    }
    else{
        res.status(405).json({name: "Method Not Allowed", alamat: ""});
    }
    
}
