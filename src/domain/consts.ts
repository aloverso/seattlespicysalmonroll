import dayjs from "dayjs";

export const REGISTER_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSeHfNtfWKPwXkBmftylXlxHjW_ldfRj5RdmZXCm5sB059VCRg/viewform?usp=dialog";

export const INSTA_LINK = "https://www.instagram.com/seattle_distance_skating_club/";
export const GOFUNDME_LINK =
  "https://www.gofundme.com/f/roll-with-seattle-distance-skating-club-this-summer";

export const ORDINAL = "2nd";
export const DATE = "2025-07-17 5:00:00";
export const END_DATE = "2025-07-20 11:59:00";

export const CONTROLS = {
  showThanks: true,
  showSponsorship: true,
  registrationLive: true,
  showLiveUpdates: false,
  showGoFundMe: true,
  showEvents: true,
  showVolunteers: false,
  preliminarySchedule: true
};

// calculated values (no need to change)
export const YEAR = dayjs(DATE).year();
export const DATE_STRING = `${dayjs(DATE).format("MMMM DD")}–${dayjs(END_DATE).format(
  "DD"
)}, ${YEAR}`;
