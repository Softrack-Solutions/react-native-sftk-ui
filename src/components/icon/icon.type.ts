import Delete from '../../assets/svgs/trash.svg';
import Plus from '../../assets/svgs/plus.svg';
import Folder from '../../assets/svgs/folder.svg';
import IdCard from '../../assets/svgs/idCard.svg';
import Edit from '../../assets/svgs/pencil.svg';
import Logout from '../../assets/svgs/logout.svg';
import Login from '../../assets/svgs/login.svg';
import FilterAdd from '../../assets/svgs/filterAdd.svg';
import FilterRemove from '../../assets/svgs/filterRemove.svg';
import Eye from '../../assets/svgs/eye.svg';
import EyeHide from '../../assets/svgs/eye-hide.svg';
import UserScan from '../../assets/svgs/userScan.svg';
import View from '../../assets/svgs/view.svg';
import type { SvgProps } from 'react-native-svg';

export type IconName =
  | 'delete'
  | 'plus'
  | 'folder'
  | 'id-card'
  | 'edit'
  | 'view'
  | 'eye'
  | 'eye-hide'
  | 'user-scan'
  | 'filder-add'
  | 'filder-remove'
  | 'logout'
  | 'login';

export const IconMap: Record<IconName, React.FC<SvgProps>> = {
  'delete': Delete,
  'plus': Plus,
  'folder': Folder,
  'id-card': IdCard,
  'edit': Edit,
  'view': View,
  'logout': Logout,
  'login': Login,
  'eye-hide': EyeHide,
  'eye': Eye,
  'filder-remove': FilterRemove,
  'filder-add': FilterAdd,
  'user-scan': UserScan,
};
