import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Dummy authentication logic
        const user = { id: "1", name: "User", email: credentials?.email };

        if (credentials?.email === "test@example.com" && credentials?.password === "password") {
          return user; // Successful login
        } else {
          return null; // Invalid credentials
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", // Redirect to your login page
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
