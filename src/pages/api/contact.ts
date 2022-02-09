// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { MongoSystemError } from 'mongodb';

import {
  CONTACT_COLLECTION_NAME,
  createDocument,
  readDocument,
  toContact,
} from '@helpers/db';
import { ApiModel } from '@models/api';
import { Contact, ContactCreate, DbContact } from '@models/contact';

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
      try {
        const contact = { email, name, message };
        const insertResult = await createDocument<ContactCreate>(
          CONTACT_COLLECTION_NAME,
          contact,
        );

        const dbContact = await readDocument<DbContact>(
          CONTACT_COLLECTION_NAME,
          {
            _id: insertResult.insertedId,
          },
        );
        if (!dbContact) {
          res.status(404).json({ message: 'contact is not found' });
          return;
        }

        const newContact = toContact(dbContact);
        res
          .status(201)
          .json({ message: 'Successfully stored message!', data: newContact });
      } catch (error) {
        const message =
          error instanceof MongoSystemError
            ? 'Could not connect to database.'
            : 'Storing message failed!';
        res.status(500).json({ message });
      }
      break;
    }
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
