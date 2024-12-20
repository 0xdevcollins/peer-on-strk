import { Moon, Sun } from "lucide-react";
import { MouseEventHandler } from "react";


interface ThemeSwitchProps {
  theme: string;
  action: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  theme,
  action,
  className,
}) => {
  return (
    <button
      id="theme-switcher"
      className={`grid h-[3rem] w-[3rem] place-content-center rounded-full bg-button-secondary transition-[opacity] duration-500 md:h-[3.5rem] md:w-[3.5rem] lg:h-[4rem] lg:w-[4rem] ${className}`}
      onClick={action}
    >
      {theme === "dark" ? (
        <span className="text-l">
          <Sun />
        </span>
      ) : (
        <span className="text-l">
          <Moon />
        </span>
      )}
    </button>
  );
};

export default ThemeSwitch;
