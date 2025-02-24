import React from "react";
import { Separator } from "~/components/ui/separator";
import SiteStatus from "./chunks/site-status";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export default function GeneralPage() {
  return (
    <div className="space-y-4 max-w-4xl m-auto">
      <div>
        <h1 className="font-bold">General</h1>
        <p className="text-sm text-muted-foreground">
          Settings and options for your application
        </p>
      </div>
      <Separator className="mb-10" />
      <SiteStatus />
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
          <Separator />
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
      <div>
        <h1 className="text-lg font-bold underline mb-4">
          2. Site language
        </h1>
        <div className="space-y-5 mt-10">
          <div className="space-y-2 flex justify-between items-center">
            <div>
              <h1 className="font-bold">Language</h1>
              <p className="text-sm text-muted-foreground">
                Default language for your site
              </p>
            </div>
            <Input defaultValue="Sultandev" className="max-w-92" />
          </div>
          <Separator />
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
    </div>
  );
}
