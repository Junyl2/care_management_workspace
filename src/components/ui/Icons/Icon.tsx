import UserIcon from "./svg/UserIcon";
import { IconProps } from "./types";

export type IconName = 'user';

type IconWrapperProps = IconProps & {
  backgroundFill?: string;
  name: IconName;
}

const iconMap: Record<IconName, React.ComponentType<IconProps>> = {
  user: UserIcon,
};

export function Icon({ name, ...props }: IconWrapperProps) {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    throw new Error(`Icon "${name}" not found`);
  }
  
  return <IconComponent {...props} />;
}