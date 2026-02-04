export function getAdmissionStatus() {
  const now = new Date();
  const month = now.getMonth(); // 0 = Jan

  // Example: admissions active Jan–Aug
  const isOpen = month >= 0 && month <= 7;

  return {
    isOpen,
    message: isOpen
      ? "Admissions are currently open."
      : "Admissions enquiries are accepted for the next academic session.",
  };
}
