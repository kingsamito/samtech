import { BuildingOffice2Icon, BriefcaseIcon, BanknotesIcon, ComputerDesktopIcon, ClipboardDocumentIcon, UserIcon, PaintBrushIcon,  } from '@heroicons/react/24/outline';
import { IconKey } from '../types/icon';

export const iconMap: Record<IconKey, React.ElementType> = {
    development: ComputerDesktopIcon,
    business: BriefcaseIcon,
    finance:  BanknotesIcon,
    IT: BuildingOffice2Icon,
    office: ClipboardDocumentIcon,
    personal: UserIcon,
    design: PaintBrushIcon,
};