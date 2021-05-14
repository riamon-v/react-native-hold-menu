import { TransformOriginAnchorPosition } from '../../utils/calculations';

export type MenuItemProps = {
  text: string;
  icon?: () => React.ReactNode;
  onPress?: (arg?: string | number) => void;
  isTitle?: boolean;
  isDestructive?: boolean;
  withSeperator?: boolean;
};

export type MenuListProps = {
  items: MenuItemProps[];
};

export type MenuInternalProps = {
  items: MenuItemProps[];
  itemHeight: number;
  itemWidth: number;
  itemY: number;
  itemX: number;
  anchorPosition: TransformOriginAnchorPosition;
  menuHeight: number;
  transformValue: number;
  actionParams: {
    [name: string]: (string | number)[];
  };
};