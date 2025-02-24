import React from "react";
import { Badge } from "~/components/ui/badge";
import { Switch } from "~/components/ui/switch";
import { Tooltip } from "~/components/ui/tooltip";

export default function SiteStatus() {
  return (
    <div className="flex justify-between mb-10">
      <div className="space-y-1">
        <h1 className="font-bold space-x-2 flex items-center">
          <span>Maintenance mode</span>
          <Badge variant="default" className="bg-green-600">
            Running
          </Badge>
        </h1>
        <p className="text-muted-foreground text-sm">
          Your application is currently running.
        </p>
      </div>
      <Tooltip>
      <Switch defaultChecked />
      </Tooltip>
    </div>
  );
}
