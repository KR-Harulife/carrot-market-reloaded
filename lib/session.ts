import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
  id?: number;
}

export default function getSession() {
  return getIronSession<SessionContent>(cookies(), {
    cookieName: "delicious-karrot",
    password: process.env.COOKIE_PASSWORD!,
    cookieOptions: {
      // maxAge: 60 * 60 * 24, // 24시간 = 86400초
      maxAge: undefined,
    },
  });
}
