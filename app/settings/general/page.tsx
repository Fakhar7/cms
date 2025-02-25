import React from "react";
import SiteStatus from "./status";
import SettingBlock from "./block";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import TitleDescription from "~/components/title-description";
import { Textarea } from "~/components/ui/textarea";

export type SettingsAttribute = {
  id: string;
  label: string;
  defaultValue: string;
  description: string;
  renderInput: (defaultValue: string) => React.JSX.Element;
};

const settings = {
  siteDetails: {
    title: "Site Information",
    data: [
      {
        id: "01",
        label: "Site Name",
        defaultValue: "Sultandev",
        description: "Changes will update all URLs.",
        renderInput: (defaultValue: string) => (
          <Input defaultValue={defaultValue} className="max-w-92" />
        ),
      },
      {
        id: "02",
        label: "Tagline",
        description: "A quick snapshot for your site.",
        defaultValue: "I am a software developer and researcher",
        renderInput: (defaultValue: string) => (
          <Textarea defaultValue={defaultValue} className="max-w-92" />
        ),
      },
    ],
  },
  credentials: {
    title: "Credentials",
    data: [
      {
        id: "01",
        label: "Email",
        description: "Change your description",
        defaultValue: "umerfakhar5@gmail.com",
        renderInput: (defaultValue: string) => (
          <Input
            type="email"
            className="max-w-96"
            defaultValue={defaultValue}
          />
        ),
      },
      {
        id: "02",
        label: "Password",
        description: "You can change your credientials.",
        defaultValue: "123123123",
        renderInput: (defaultValue: string) => (
          <Input
            type="password"
            className="max-w-96"
            defaultValue={defaultValue}
          />
        ),
      },
    ],
  },
};

export default function GeneralPage() {
  return (
    <div className="space-y-4 max-w-4xl m-auto">
      <TitleDescription
        title="General"
        description="Settings and options for your application"
      />
      <Separator className="my-10" />
      <SiteStatus />
      <Separator className="my-10" />
      <SettingBlock
        title={settings.siteDetails.title}
        data={settings.siteDetails.data}
      />
      <Separator className="my-10" />
      <SettingBlock
        title={settings.credentials.title}
        data={settings.credentials.data}
      />
      <Separator className="my-10" />
      <Button>Save Changes</Button>
    </div>
  );
}
