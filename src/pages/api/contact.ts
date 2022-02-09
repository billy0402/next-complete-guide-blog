// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { Contact } from '@models/contact';
import { ApiModel } from '@models/api';

type Data = ApiModel<Contact>;

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { method } = req;

  switch (method) {
    case 'POST': {
      const { email, name, message }: Contact = req.body;

      if (
        !email ||
        !email.includes('@') ||
        !name ||
        !name.trim() ||
        !message ||
        !name.trim()
      ) {
        res.status(422).json({ message: 'Invalid input!' });
        return;
      }

      // store into database
      const newContact = { email, name, message };
      console.log(newContact);

      res
        .status(201)
        .json({ message: 'Successfully stored message!', data: newContact });
      break;
    }
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
