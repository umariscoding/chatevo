import {
  X,
  Send,
  Edit,
  Trash,
  MoreVertical,
  LogOut,
  User as UserIcon,
  LogIn,
  MessageSquarePlus,
  Search,
  ChevronDown,
  Hash,
  Sparkles,
  ArrowUp,
  PanelLeftClose,
  PanelLeft,
  Settings,
  Moon,
  Sun,
} from "lucide-react";

interface IconProps {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

export const Icons = {
  Close: ({ className = "h-6 w-6", size, style }: IconProps) => (
    <X className={className} size={size} style={style} />
  ),
  Send: ({ className = "h-5 w-5", size, style }: IconProps) => (
    <Send className={className} size={size} style={style} />
  ),
  ArrowUp: ({ className = "h-5 w-5", size, style }: IconProps) => (
    <ArrowUp className={className} size={size} style={style} />
  ),
  Edit: ({ className = "h-5 w-5", size, style }: IconProps) => (
    <Edit className={className} size={size} style={style} />
  ),
  Trash: ({ className = "h-5 w-5", size, style }: IconProps) => (
    <Trash className={className} size={size} style={style} />
  ),
  MoreVertical: ({ className = "h-5 w-5", size, style }: IconProps) => (
    <MoreVertical className={className} size={size} style={style} />
  ),
  LogOut: ({ className = "h-5 w-5", size, style }: IconProps) => (
    <LogOut className={className} size={size} style={style} />
  ),
  User: ({ className = "h-5 w-5", size, style }: IconProps) => (
    <UserIcon className={className} size={size} style={style} />
  ),
  LogIn: ({ className = "h-5 w-5", size, style }: IconProps) => (
    <LogIn className={className} size={size} style={style} />
  ),
  MessageSquarePlus: ({ className = "h-5 w-5", size, style }: IconProps) => (
    <MessageSquarePlus className={className} size={size} style={style} />
  ),
  Search: ({ className = "h-5 w-5", size, style }: IconProps) => (
    <Search className={className} size={size} style={style} />
  ),
  ChevronDown: ({ className = "h-5 w-5", size, style }: IconProps) => (
    <ChevronDown className={className} size={size} style={style} />
  ),
  Hash: ({ className = "h-5 w-5", size, style }: IconProps) => (
    <Hash className={className} size={size} style={style} />
  ),
  Sparkles: ({ className = "h-5 w-5", size, style }: IconProps) => (
    <Sparkles className={className} size={size} style={style} />
  ),
  PanelLeftClose: ({ className = "h-5 w-5", size, style }: IconProps) => (
    <PanelLeftClose className={className} size={size} style={style} />
  ),
  PanelLeft: ({ className = "h-5 w-5", size, style }: IconProps) => (
    <PanelLeft className={className} size={size} style={style} />
  ),
  Settings: ({ className = "h-5 w-5", size, style }: IconProps) => (
    <Settings className={className} size={size} style={style} />
  ),
  Moon: ({ className = "h-5 w-5", size, style }: IconProps) => (
    <Moon className={className} size={size} style={style} />
  ),
  Sun: ({ className = "h-5 w-5", size, style }: IconProps) => (
    <Sun className={className} size={size} style={style} />
  ),
};
