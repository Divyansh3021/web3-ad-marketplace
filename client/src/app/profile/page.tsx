import { Separator } from "@/components/ui/separator";
import { ProfileForm } from "./profile-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6 ">
      <div className="flex flex-row ">
        <div className="pr-5 py-1">
          <Avatar >
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          {" "}
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-sm text-muted-foreground">
            This is how others will see you on the site.
          </p>
        </div>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  );
}
