import * as React from 'react';

function SvgPauseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="pause-icon_svg__bi pause-icon_svg__bi-pause-fill"
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      aria-hidden="true"
      {...props}
    >
      <path d="M5.5 3.5A1.5 1.5 0 017 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5zm5 0A1.5 1.5 0 0112 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5z" />
    </svg>
  );
}

export default SvgPauseIcon;
