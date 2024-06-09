import { Category } from "@material-ui/icons";

export type Event = {
  id: string;
  date: string;
  type: "Skate" | "Event";
  name: string;
  description: string;
  meetingTime: string;
  startTime: string;
  timeOfDay: TimeOfDay;
  distance: string;
  meetingLocation: string;
  meetingLocationLink: string;
  spice: number;
  body: string;
};

export type TimeOfDay = "Morning" | "Afternoon" | "Afternoon/Evening" | "Evening";

export const SPICE = "🔥";

/* disregard below for now, not using animal scale */

export type Category = "hedgehog" | "bunny" | "elephant" | "mammoth" | "panther";

export type CategoryDescription = {
  description: string;
  difficulty: string;
  speed: string;
  distance: string;
  hills: string;
  emoji: string;
};

export const CategoryMap: Record<Category, CategoryDescription> = {
  hedgehog: {
    description: "Flatland skate focused on spins, slides, and building skills.",
    difficulty: "Any level",
    speed: "0 to infinity mph",
    distance: "Variable",
    hills: "None",
    emoji: "🦔",
  },
  bunny: {
    description: "Participants can stride & turn, perform at least one basic stop.",
    difficulty: "Beginner",
    speed: "6+ mph (pace of the slowest)",
    distance: "3–15 mi",
    hills: "Mild to none",
    emoji: "🐇",
  },
  elephant: {
    description:
      "Participants can control speed, brake, and deal with rough surfaces and city streets.",
    difficulty: "Intermediate",
    speed: "8+ mph",
    distance: "15–20 mi",
    hills: "Moderate",
    emoji: "🐘",
  },
  mammoth: {
    description:
      "Participants can control at fast speed, brake, and deal with all surfaces and traffic.",
    difficulty: "Intermediate/advanced",
    speed: "10+ mph",
    distance: "20–30 mi",
    hills: "Yes",
    emoji: "🦣",
  },
  panther: {
    description:
      "Participants can control at high speeds, deal with all surfaces, traffic, and obstacles, and maintain focus and stamina.",
    difficulty: "Advanced+",
    speed: "10–15+ mph",
    distance: "25–30+ mi",
    hills: "Many",
    emoji: "🐈‍⬛",
  },
};
