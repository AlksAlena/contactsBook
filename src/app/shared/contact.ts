import { Address } from './address';
import { Company } from './company';
import { Post } from './post';
import { Session } from './session';

export class Contact {
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  posts: Post[];
  accountHistory: Session[];
  favorite: boolean;
  avatar: string;
  id: number;
}