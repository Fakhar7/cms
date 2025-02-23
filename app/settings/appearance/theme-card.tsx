import { Label } from "~/components/ui/label";
import { RadioGroupItem } from "~/components/ui/radio-group";

import Image, { StaticImageData } from "next/image";
import { useTheme } from "next-themes";

interface ThemeCardProps {
  title: string;
  value: string;
  checked?: boolean;
  image: StaticImageData | string;
}

export default function ThemeCard({
  title,
  image,
  checked,
  value,
}: ThemeCardProps) {
  const { setTheme } = useTheme();

  return (
    <Label htmlFor={value} className="flex flex-col space-x-2 gap-4 relative">
      <Image
        src={image}
        width={160}
        height={120}
        alt="dark-mode"
        className={`rounded-lg ${checked ? "border-2 border-primary" : ""}`}
      />
      <div className="flex gap-4">
        <RadioGroupItem
          onClick={({ currentTarget }) => setTheme(currentTarget.value)}
          value={value}
          id={value}
          checked={checked}
        />
        <h1>{title}</h1>
      </div>
    </Label>
  );
}
