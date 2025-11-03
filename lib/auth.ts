import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
        },
        password: {
          type: "password",
          label: "Password",
        },
      },
      // authorize: async (credentials) => {
      //   if (!credentials.email && !credentials.password) {
      //     throw new Error("All filed must be filled");
      //   }
      // },
    }),
  ],
});
