export type Ticket = {
  id: string;
  priority: number;
  tag: string[];
  userId: string;
  status: string;
  title: string;
};

export type User = {
  id: string;
  name: string;
  available: boolean;
};
