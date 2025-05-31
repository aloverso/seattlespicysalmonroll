export type Event = {
  id: string;
  date: string;
  type: "Skate" | "Event";
  name: string;
  description: string;
  meetingTime: string;
  startTime: string;
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

export const SPICE = "🔥";
