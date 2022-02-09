import { Filter, MongoClient, OptionalUnlessRequiredId } from 'mongodb';

import { Contact, DbContact } from '@models/contact';

const dbUrl = process.env.DB_CONN_STRING || '';
const client = new MongoClient(dbUrl);
const dbName = process.env.DB_NAME || '';
const CONTACT_COLLECTION_NAME = 'contact';

const connectDb = async () => {
  await client.connect();
  return client.db(dbName);
};

const toContact = ({ _id, ...dbContact }: DbContact): Contact => ({
  ...dbContact,
  id: _id.toString(),
});

const createDocument = async <T>(
  collectionName: string,
  document: OptionalUnlessRequiredId<T>,
) => {
  try {
    const db = await connectDb();
    const ContactCollection = db.collection<T>(collectionName);
    return await ContactCollection.insertOne(document);
  } finally {
    client.close();
  }
};

const readDocument = async <T>(collectionName: string, filter: Filter<T>) => {
  try {
    const db = await connectDb();
    const meetupCollection = db.collection<T>(collectionName);
    return await meetupCollection.findOne<T>(filter);
  } finally {
    client.close();
  }
};

export { CONTACT_COLLECTION_NAME, toContact, createDocument, readDocument };
