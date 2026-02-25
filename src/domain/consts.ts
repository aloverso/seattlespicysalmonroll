import dayjs from "dayjs";

export const REGISTER_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSeHfNtfWKPwXkBmftylXlxHjW_ldfRj5RdmZXCm5sB059VCRg/viewform?usp=dialog";

export const INSTA_LINK = "https://www.instagram.com/rollsalmon";
export const GOFUNDME_LINK =
  "https://www.gofundme.com/f/roll-with-seattle-distance-skating-club-this-summer";

export const ORDINAL = "3rd";
export const DATE = "2026-07-16 6:00:00";
export const END_DATE = "2026-07-19 11:59:00";

export const CONTROLS = {
  showThanks: false,
  showSponsorship: false,
  registrationLive: false,
  showLiveUpdates: false,
  showGoFundMe: false,
  showEvents: false,
  showVolunteers: false,
  preliminarySchedule: false,
};

// calculated values (no need to change)
export const YEAR = dayjs(DATE).year();
export const DATE_STRING = `${dayjs(DATE).format("MMMM DD")}–${dayjs(END_DATE).format(
  "DD"
)}, ${YEAR}`;
