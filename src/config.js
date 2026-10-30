// Single source of truth for anything that changes between cohorts.
export const REGISTER_URL = "https://bit.ly/equicate";

// Lagos time (UTC+1). Nov 15, 2026 is a Sunday.
export const PYTHON_START = new Date("2026-11-15T00:00:00+01:00");
export const PYTHON_START_LABEL = "Sunday, November 15, 2026";

export const MONTHLY_FEE = 5000; // charged after the free first month

export const CONTACT = {
  instagramHandle: "@equi.cate",
  instagram: "https://instagram.com/equi.cate",
  linkedinLabel: "Equicate Academy",
  linkedin: "", // TODO: paste your LinkedIn page URL here; renders as plain text if empty
  phones: [
    { display: "08126559940", tel: "+2348126559940" },
    { display: "07059079561", tel: "+2347059079561" },
  ],
};

export const formatNaira = (n) => "₦" + n.toLocaleString("en-NG");