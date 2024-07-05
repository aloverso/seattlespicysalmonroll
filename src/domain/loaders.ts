import fs from "fs";
import path from "path";
import { Category, Event, TimeOfDay } from "./types";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type PathParams<P> = { params: P; locale?: string };
export type EventIdParam = {
  eventId: string;
};

const eventsDir = path.join(process.cwd(), "content", "events");

export const loadAllEventIds = (): PathParams<EventIdParam>[] => {
  const eventFilenames = fs.readdirSync(eventsDir);

  return eventFilenames.map((filename) => ({
    params: { eventId: filename.split(".md")[0] },
  }));
};

export const loadEventById = async (id: string): Promise<Event> => {
  const fullPath = path.join(eventsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return convertEventMd(fileContents);
};

export const convertEventMd = async (eventMdContents: string): Promise<Event> => {
  const matterResult = matter(eventMdContents);
  const taskGrayMatter = matterResult.data as EventGrayMatter;

  const processedContent = await remark().use(html).process(matterResult.content);

  return {
    body: processedContent.toString(),
    ...taskGrayMatter,
  };
};

type EventGrayMatter = {
  id: string;
  date: string;
  name: string;
  spice: number;
  timeOfDay: TimeOfDay;
  type: "Skate" | "Event";
  description: string;
  meetingTime: string;
  startTime: string;
  distance: string;
  meetingLocationTitle: string;
  meetingLocationAddress: string;
  meetingLocationLink: string;
  category: Category;
};
