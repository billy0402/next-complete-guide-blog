import { ObjectId } from 'mongodb';

type Contact = {
  id: string;
  email: string;
  name: string;
  message: string;
};

type ContactCreate = Omit<Contact, 'id'>;

type DbContact = Omit<Contact, 'id'> & {
  _id: ObjectId;
};

export type { Contact, ContactCreate, DbContact };
