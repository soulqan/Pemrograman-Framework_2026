// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { retrieveProducts, retrieveDataByID, addProduct, retrieveProductsByCategory } from "../../utils/db/servicefirebase";

type Data = {
  status: boolean;
  status_code: number;
  data?: any;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { nama, price, image, size, category, description } = req.body;
    
    if (!nama || !price || !image || !size || !category) {
      return res.status(400).json({ 
        status: false, 
        status_code: 400, 
        message: "Missing required fields"
      });
    }

    const result = await addProduct({
      nama,
      price: parseFloat(price),
      image,
      size,
      category,
      description,
    });

    if (result.status) {
      return res.status(201).json({ 
        status: true, 
        status_code: 201, 
        data: result,
        message: result.message
      });
    } else {
      return res.status(500).json({ 
        status: false, 
        status_code: 500, 
        message: result.message
      });
    }
  }

  if (req.query.produk![1]) {
    const data = await retrieveDataByID("products", req.query.produk![1]);
    res.status(200).json({ status: true, status_code: 200, data });
  } else if (req.query.category) {
    const data = await retrieveProductsByCategory("products", req.query.category as string);
    res.status(200).json({ status: true, status_code: 200, data });
  } else {
    const data = await retrieveProducts("products");
    res.status(200).json({ status: true, status_code: 200, data });
  }
}
