export type Ticket = {
  _id: string;
  priority: number;
  tag: string[];
  userId: string;
  status: string;
  title: string;
};

export type User = {
  _id: string;
  name: string;
  available: boolean;
};
