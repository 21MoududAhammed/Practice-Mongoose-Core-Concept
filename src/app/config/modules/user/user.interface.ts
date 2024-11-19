// name type
export type Name = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type User = {
  id: string;
  name: Name;
  role: 'admin' | 'moderator' | 'customer' | 'guest';
  password: string;
};
