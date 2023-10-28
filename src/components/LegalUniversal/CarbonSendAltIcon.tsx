import { memo, SVGProps } from 'react';

const CarbonSendAltIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 26' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_13_752)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M-0.91875 5.717C-0.75492 4.98074 -0.352185 4.32336 0.223498 3.85252C0.79918 3.38168 1.51369 3.12528 2.25 3.12534H21.75C22.4863 3.12528 23.2008 3.38168 23.7765 3.85252C24.3522 4.32336 24.7549 4.98074 24.9187 5.717L12 13.8153L-0.91875 5.717ZM-1 7.62034V19.4603L8.42988 13.5303L-1 7.62034ZM9.98663 14.5087L-0.689625 21.2203C-0.425844 21.7908 -0.00951922 22.2727 0.510895 22.61C1.03131 22.9472 1.63441 23.1259 2.25 23.1253H21.75C22.3655 23.1255 22.9684 22.9464 23.4885 22.6088C24.0086 22.2713 24.4246 21.7892 24.688 21.2187L14.0118 14.507L12 15.7687L9.98663 14.507V14.5087ZM15.5701 13.532L25 19.4603V7.62034L15.5701 13.5303V13.532Z'
        fill='#7D3E99'
      />
    </g>
    <defs>
      <clipPath id='clip0_13_752'>
        <rect width={24} height={26} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(CarbonSendAltIcon);
export { Memo as CarbonSendAltIcon };
