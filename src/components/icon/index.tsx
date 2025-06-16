import { useTheme } from 'styled-components/native';
import { IconMap, type IconName } from './icon.type';

export interface IconProps {
  icon: IconName;
  size?: number;
  color?: string;
}

const Icon = ({ icon, size = 24, color }: IconProps) => {
  const Icon = IconMap[icon];
  const { colors } = useTheme();

  return <Icon width={size} height={size} fill={color ?? colors.text} />;
};

export default Icon;
