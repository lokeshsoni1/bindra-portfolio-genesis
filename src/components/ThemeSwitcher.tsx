
import { useTheme } from "@/contexts/ThemeContext";
import { Check, ChevronDown } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const themes = [
  { name: "Blue", value: "blue" },
  { name: "Purple", value: "purple" },
  { name: "Teal", value: "teal" },
  { name: "Rose", value: "rose" },
  { name: "Green", value: "green" },
  { name: "Amber", value: "amber" },
  { name: "Red", value: "red" },
];

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <span className={`h-4 w-4 rounded-full bg-primary`}></span>
          <span>{capitalizeFirstLetter(theme)}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.value}
            onClick={() => setTheme(t.value as any)}
            className="flex items-center gap-2"
          >
            <div className={`h-3 w-3 rounded-full ${t.value === 'blue' ? 'bg-[hsl(222,47%,35%)]' : `bg-${t.value}-500`}`} />
            <span>{t.name}</span>
            {theme === t.value && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
