import dayjs from "dayjs";

export const REGISTER_LINK =
  "https://forms.gle/VE3kaLyU8G76jfMEA";

export const INSTA_LINK = "https://www.instagram.com/rollsalmon";
export const GOFUNDME_LINK =
  "https://www.gofundme.com/f/roll-with-seattle-distance-skating-club-this-summer";

export const ORDINAL = "3rd";
export const DATE = "2026-07-16 6:00:00";
export const END_DATE = "2026-07-19 11:59:00";

export const CONTROLS = {
  showThanks: false,
  showSponsorship: false,
  registrationLive: true,
  showLiveUpdates: false,
  showGoFundMe: false,
  showEvents: false,
  showVolunteers: false,
  preliminarySchedule: false,
  showPNWFest: true,
};

// calculated values (no need to change)
export const YEAR = dayjs(DATE).year();
export const DATE_STRING = `${dayjs(DATE).format("MMMM DD")}–${dayjs(END_DATE).format(
  "DD"
)}, ${YEAR}`;
