import { User } from "@prisma/client";

interface Global {
  user: User;
}

declare let user: Global["user"];
