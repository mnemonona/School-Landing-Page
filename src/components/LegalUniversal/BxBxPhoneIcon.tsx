import { memo, SVGProps } from 'react';

const BxBxPhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.8482 12.3517C18.7369 12.2402 18.6046 12.1517 18.459 12.0913C18.3135 12.031 18.1574 11.9999 17.9998 11.9999C17.8422 11.9999 17.6862 12.031 17.5406 12.0913C17.395 12.1517 17.2628 12.2402 17.1514 12.3517L15.2386 14.2645C14.3518 14.0005 12.6971 13.4005 11.6483 12.3517C10.5995 11.3029 9.99949 9.64814 9.73549 8.76135L11.6483 6.84857C11.7598 6.73723 11.8483 6.60498 11.9087 6.45941C11.969 6.31383 12.0001 6.15778 12.0001 6.00018C12.0001 5.84258 11.969 5.68653 11.9087 5.54095C11.8483 5.39538 11.7598 5.26313 11.6483 5.15179L6.84832 0.351838C6.73698 0.240304 6.60473 0.15182 6.45916 0.0914472C6.31358 0.031075 6.15753 0 5.99993 0C5.84233 0 5.68628 0.031075 5.5407 0.0914472C5.39513 0.15182 5.26288 0.240304 5.15154 0.351838L1.89717 3.60621C1.44118 4.0622 1.18438 4.68859 1.19398 5.32819C1.22158 7.03697 1.67397 12.9721 6.35153 17.6497C11.0291 22.3272 16.9642 22.7784 18.6742 22.8072H18.7078C19.3414 22.8072 19.9402 22.5576 20.3938 22.104L23.6482 18.8497C23.7597 18.7383 23.8482 18.6061 23.9085 18.4605C23.9689 18.3149 24 18.1589 24 18.0013C24 17.8437 23.9689 17.6876 23.9085 17.542C23.8482 17.3965 23.7597 17.2642 23.6482 17.1529L18.8482 12.3517ZM18.6958 20.406C17.1982 20.3808 12.0743 19.9788 8.04831 15.9517C4.00915 11.9125 3.61795 6.77057 3.59395 5.30299L5.99993 2.89701L9.1031 6.00018L7.55152 7.55177C7.41047 7.6927 7.30677 7.86657 7.24978 8.05764C7.19279 8.24872 7.18432 8.45098 7.22512 8.64615C7.25392 8.78415 7.95831 12.0565 9.95029 14.0485C11.9423 16.0405 15.2146 16.7449 15.3526 16.7737C15.5477 16.8156 15.7502 16.8078 15.9414 16.751C16.1327 16.6942 16.3065 16.5901 16.447 16.4485L17.9998 14.8969L21.103 18.0001L18.6958 20.406V20.406Z'
      fill='#7D3E99'
    />
  </svg>
);

const Memo = memo(BxBxPhoneIcon);
export { Memo as BxBxPhoneIcon };
