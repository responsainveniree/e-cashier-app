import { signIn } from "@/lib/authNode";
import { Button } from "@/components/ui/button";
import { GoogleIcon } from "./ui/google";
const GoogleSignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button className="w-full" variant="outline">
        <GoogleIcon />
        Continue with Google
      </Button>
    </form>
  );
};

export { GoogleSignIn };
