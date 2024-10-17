import {
  Sparkles,
  Library,
  Globe,
  History,
  BookOpenText,
  Music,
  CircleEllipsis,
  Atom,
  Trophy,
  Clapperboard,
  Amphora,
  Utensils,
} from "lucide-react";
import { ReactNode } from "react";

// Define the type for each category
interface Category {
  icon: ReactNode; // Icon should be a valid React node (JSX element)
  title: string;
}

export const categories: Category[] = [
  {
    icon: <Sparkles />,
    title: "Featured",
  },
  {
    icon: <Library />,
    title: "General Knowledge",
  },
  {
    icon: <Globe />,
    title: "Geography",
  },
  {
    icon: <History />,
    title: "History",
  },
  {
    icon: <BookOpenText />,
    title: "Literature",
  },
  {
    icon: <Music />,
    title: "Music",
  },
  {
    icon: <Atom />,
    title: "Science",
  },
  {
    icon: <Trophy />,
    title: "Sports",
  },
  {
    icon: <Clapperboard />,
    title: "Television",
  },
  {
    icon: <Amphora />,
    title: "Art",
  },
  {
    icon: <Utensils />,
    title: "Food & Drink",
  },
];
