import { DateTime } from "luxon";

export function getClosestMidTimestamp(now: DateTime) {
  if (now.hour < 12) {
    // If it's before noon, return today's midnight
    return now
      .set({ hour: 12, minute: 0, second: 0, millisecond: 0 })
      .toMillis();
  } else {
    return now.plus({ days: 1 }).startOf("day").toMillis();
  }
}

export function getPersistenceValue() {
  const now = DateTime.local();
  const targetTimestamp = getClosestMidTimestamp(now);
  const secondsUtilNextRefresh = Math.floor(
    (targetTimestamp - now.toMillis()) / 1000
  );
  return secondsUtilNextRefresh;
}
