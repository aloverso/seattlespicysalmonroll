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
  meetingLocationTitle: string;
  meetingLocationAddress: string;
  meetingLocationLink: string;
  spice: number;
  body: string;
};

export type UpdateMessage = {
  message: string;
  timestamp: string;
  id: string;
};

export type TimeOfDay = "Morning" | "Afternoon" | "Afternoon/Evening" | "Evening";

export const SPICE = "🔥";
