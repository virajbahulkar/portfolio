import React from 'react';

type ITimeLineProps = {
  title: string;
  subtitle?: string;
  start?: string; // e.g. '2021-12-01'
  end?: string; // e.g. '2022-08-01' or undefined for ongoing
  children?: React.ReactNode;
  showLine?: boolean;
};

function getDuration(start?: string, end?: string): string {
  if (!start) return '';
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  const result = [];
  if (years > 0) result.push(`${years} year${years > 1 ? 's' : ''}`);
  if (months > 0) result.push(`${months} month${months > 1 ? 's' : ''}`);
  return result.length ? result.join(' ') : 'Less than a month';
}

const TimeLine = (props: ITimeLineProps) => {
  let subtitleText = props.subtitle || '';
  if (props.start) {
    const endText = props.end
      ? new Date(props.end).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        })
      : 'Present';
    const startText = new Date(props.start).toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    });
    subtitleText = `${startText} – ${endText} (${getDuration(
      props.start,
      props.end
    )})`;
  }
  return (
    <div className="flex gap-3 sm:gap-4">
      <div
        data-timeline-marker
        className="relative flex w-4 shrink-0 justify-center"
      >
        <span className="mt-1 block size-4 rounded-full bg-primary"></span>
        {props.showLine !== false && (
          <span
            data-timeline-line
            className="absolute bottom-0 left-1/2 top-5 block w-px -translate-x-1/2 bg-primary"
          ></span>
        )}
      </div>
      <div className="min-w-0 pb-5 pr-0 sm:pr-2">
        <h3 className="mb-1 break-words font-semibold leading-6">
          {props.title}
        </h3>
        <span className="block break-words text-sm font-light leading-6">
          {subtitleText}
        </span>
        <div className="mt-3 space-y-3 break-words text-sm leading-6">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
