import React from "react";
import { SettingsAttribute } from "./page";
import TitleDescription from "~/components/title-description";

interface Props {
  title: string;
  data: SettingsAttribute[];
}

export default function SettingBlock({ title, data }: Props) {
  return (
    <div>
      <h1 className="text-lg font-bold underline mb-4">{title}</h1>
      <div className="space-y-5 mt-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="space-y-2 flex justify-between items-center gap-4"
          >
            <TitleDescription
              title={item.label}
              description={item.description}
            />
            {item.renderInput(item.defaultValue)}
          </div>
        ))}
      </div>
    </div>
  );
}
