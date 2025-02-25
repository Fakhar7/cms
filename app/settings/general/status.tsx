import React from "react";
import TitleDescription from "~/components/title-description";
import { Badge } from "~/components/ui/badge";
import { Switch } from "~/components/ui/switch";
import { Tooltip } from "~/components/ui/tooltip";

export default function SiteStatus() {
  return (
    <div className="flex justify-between mb-10">
      <TitleDescription
        title={
          <h1 className="font-bold space-x-2 space-y-2 flex items-center">
            <span>Site status</span>
            <Badge variant="default" className="bg-green-600">
              Running
            </Badge>
          </h1>
        }
        description="Turn off will make your website under maintenance mode."
      />
      <Tooltip>
        <Switch defaultChecked />
      </Tooltip>
    </div>
  );
}
