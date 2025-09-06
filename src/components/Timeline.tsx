import React from 'react';


type ITimeLineProps = {
  title: string;
  subtitle?: string;
  start?: string; // e.g. '2021-12-01'
  end?: string;   // e.g. '2022-08-01' or undefined for ongoing
  children?: React.ReactNode;
};

function getDuration(start?: string, end?: string): string {
  if (!start) return '';
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  let result = [];
  if (years > 0) result.push(`${years} year${years > 1 ? 's' : ''}`);
  if (months > 0) result.push(`${months} month${months > 1 ? 's' : ''}`);
  return result.length ? result.join(' ') : 'Less than a month';
}

const TimeLine = (props: ITimeLineProps) => {
  let subtitleText = props.subtitle || '';
  if (props.start) {
    const endText = props.end ? new Date(props.end).toLocaleString('default', { month: 'long', year: 'numeric' }) : 'Present';
    const startText = new Date(props.start).toLocaleString('default', { month: 'long', year: 'numeric' });
    subtitleText = `${startText} – ${endText} (${getDuration(props.start, props.end)})`;
  }
  return (
    <div className="flex">
      <div className="education__time">
        <span className="mt-1 block size-4 rounded-full bg-primary"></span>
        <span className="education__line block h-full w-[2px] translate-x-[7px] bg-primary"></span>
      </div>
      <div className="px-5 pb-5">
        <h3 className="mb-1 font-semibold">{props.title}</h3>
        <span className="text-sm font-light">{subtitleText}</span>
        <p className="my-2 text-justify">{props.children}</p>
      </div>
    </div>
  );
};

export default TimeLine;
