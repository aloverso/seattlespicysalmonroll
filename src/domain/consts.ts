import dayjs from "dayjs";

export const REGISTER_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSeHfNtfWKPwXkBmftylXlxHjW_ldfRj5RdmZXCm5sB059VCRg/viewform?usp=dialog";

export const INSTA_LINK = "https://www.instagram.com/seattle_distance_skating_club/";

export const CONTROLS = {
  showSponsorship: false,
  registrationLive: true,
  showLiveUpdates: false,
  showSpiceLevelFAQ: false,
  showThanks: false,
};

export const ORDINAL = "2nd";
export const DATE = "2025-07-17 5:00:00";
export const END_DATE = "2025-07-20 11:59:00";
export const YEAR = dayjs(DATE).year();
export const DATE_STRING = `${dayjs(DATE).format("MMMM DD")}–${dayjs(END_DATE).format(
  "DD"
)}, ${YEAR}`;
