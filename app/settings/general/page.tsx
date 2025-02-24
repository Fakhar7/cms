import React from "react";
import { Separator } from "~/components/ui/separator";
import SiteStatus from "./chunks/site-status";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { LanguageSelect } from "~/components/combo-select";
import { Button } from "~/components/ui/button";
import { Switch } from "~/components/ui/switch";

export default function GeneralPage() {
  return (
    <div className="space-y-4 max-w-4xl m-auto">
      <div>
        <h1 className="font-bold">General</h1>
        <p className="text-sm text-muted-foreground">
          Settings and options for your application
        </p>
      </div>
      <Separator className="my-10" />
      <SiteStatus />
      <Separator className="my-10" />
      <div className="mb-20">
        <h1 className="text-lg font-bold underline mb-4">
          1. Basic Information
        </h1>
        <div className="space-y-5 mt-10">
          <div className="space-y-2 flex justify-between items-center">
            <div>
              <h1 className="font-bold">Site name</h1>
              <p className="text-sm text-muted-foreground">
                Changes will update all URLs
              </p>
            </div>
            <Input defaultValue="Sultandev" className="max-w-92" />
          </div>
          <div className="space-y-2 flex justify-between">
            <div>
              <h1 className="font-bold">Tagline</h1>
              <p className="text-sm text-muted-foreground">
                A quick snapshot for your site.
              </p>
            </div>
            <Textarea defaultValue="I am software developer and researcher" className="max-w-92" />
          </div>
        </div>
      </div>
      <Separator className="my-10" />
      <div>
        <h1 className="text-lg font-bold underline mb-4">
          3. Comments
        </h1>
        <div className="space-y-5 mt-10">
          <div className="space-y-2 flex justify-between items-center gap-4">
            <div>
              <h1 className="font-bold">Enable</h1>
              <p className="text-sm text-muted-foreground">
                You can disable or enable comments on your site
              </p>
            </div>
            <Switch />
          </div>
        </div>
      </div>
      <Separator className="my-10" />
      <Button>Save Changes</Button>
    </div>
  );
}
