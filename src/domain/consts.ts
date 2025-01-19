import dayjs from "dayjs";

export const REGISTER_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSdy-0_QEnYiVXqt2Zqmc6ZdWPq8RsmTI6pTW6zpLYFD9-QZhw/viewform?usp=sf_link";

export const INSTA_LINK = "https://www.instagram.com/seattle_distance_skating_club/"

export const CONTROLS = {
  showSponsorship: false,
  registrationLive: false,
  showLiveUpdates: false,
  showSpiceLevelFAQ: false,
  showThanks: false
}

export const DATE = "2025-07-17 5:00:00";
export const END_DATE = "2025-07-20";
export const YEAR = dayjs(DATE).year()
export const DATE_STRING = `${dayjs(DATE).format('MMMM DD')}–${dayjs(END_DATE).format('DD')}, ${YEAR}`
export const ORDINAL = "2nd"