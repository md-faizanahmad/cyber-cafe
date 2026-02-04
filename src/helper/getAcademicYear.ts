export default function getAcademicYear() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0 = Jan

  // Academic year starts in April (India)
  const startYear = month >= 3 ? year : year - 1;
  const endYear = startYear + 1;

  return {
    label: `${startYear}–${String(endYear).slice(-2)}`,
    startYear,
    endYear,
  };
}
