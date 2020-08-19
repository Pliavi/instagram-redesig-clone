const relativeTimeFormatter = new Intl.RelativeTimeFormat("pt-BR", {
  numeric: "auto",
  style: "narrow"
});

const timePeriods = {
  // This have to be from the longest to shorter
  week: 604800,
  day: 86400,
  hour: 3600,
  minute: 60
};

export const secondsToPeriodTime = (seconds, to) =>
  Math.round(seconds / timePeriods[to]);

export const secondsToTimeAndPeriodName = seconds => {
  for (const periodKey in timePeriods) {
    const convertedTime = secondsToPeriodTime(seconds, periodKey);
    if (convertedTime > 1) return [convertedTime * -1, periodKey];
  }
};

export function readableRelativeDate(dateString) {
  const date = Date.parse(dateString);
  const currentDate = new Date();
  const timeDistanceInSeconds = (currentDate - date) / 1000;

  return relativeTimeFormatter.format(
    ...secondsToTimeAndPeriodName(timeDistanceInSeconds)
  );
}
