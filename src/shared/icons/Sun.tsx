import classNames from "classnames";

interface SunProps extends React.SVGProps<SVGSVGElement> {
  width: number;
  height: number;
  className?: string;
}

export const Sun = (props: SunProps) => {
  const { width, height, className } = props;
  return (
    <svg
      className={classNames(className)}
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2.7C9.49706 2.7 9.9 2.29706 9.9 1.8V0.9C9.9 0.402944 9.49706 0 9 0C8.50294 0 8.1 0.402944 8.1 0.9V1.8C8.1 2.29706 8.50294 2.7 9 2.7ZM1.8 8.1C2.29706 8.1 2.7 8.50294 2.7 9C2.7 9.49706 2.29706 9.9 1.8 9.9H0.9C0.402944 9.9 0 9.49706 0 9C0 8.50294 0.402944 8.1 0.9 8.1H1.8ZM2.637 14.139L3.276 13.5C3.63308 13.1942 4.16537 13.2148 4.49781 13.5472C4.83024 13.8796 4.8508 14.4119 4.545 14.769L3.906 15.408C3.55497 15.757 2.98803 15.757 2.637 15.408C2.28805 15.057 2.28805 14.49 2.637 14.139ZM14.724 4.545C14.5564 4.71127 14.3301 4.80501 14.094 4.806C13.8704 4.79588 13.6587 4.70283 13.5 4.545C13.151 4.19397 13.151 3.62703 13.5 3.276L14.094 2.637C14.314 2.38016 14.6593 2.26829 14.9881 2.34737C15.3168 2.42646 15.5735 2.68315 15.6526 3.01192C15.7317 3.34069 15.6198 3.68605 15.363 3.906L14.724 4.545ZM3.294 4.545C3.46163 4.71127 3.68789 4.80501 3.924 4.806C4.16322 4.80738 4.39315 4.71347 4.563 4.545C4.91195 4.19397 4.91195 3.62703 4.563 3.276L3.924 2.637C3.69732 2.4071 3.3652 2.3156 3.05276 2.39696C2.74031 2.47833 2.49501 2.7202 2.40926 3.03146C2.3235 3.34273 2.41032 3.6761 2.637 3.906L3.294 4.545ZM16.2 8.1H17.1C17.5971 8.1 18 8.50294 18 9C18 9.49706 17.5971 9.9 17.1 9.9H16.2C15.7029 9.9 15.3 9.49706 15.3 9C15.3 8.50294 15.7029 8.1 16.2 8.1ZM14.724 13.5C14.3727 13.3046 13.9344 13.3659 13.6501 13.6501C13.3659 13.9344 13.3046 14.3727 13.5 14.724L14.139 15.363C14.49 15.712 15.057 15.712 15.408 15.363C15.757 15.012 15.757 14.445 15.408 14.094L14.724 13.5ZM4.05 9C4.05 6.26619 6.26619 4.05 9 4.05C11.7318 4.05495 13.945 6.26824 13.95 9C13.95 11.7338 11.7338 13.95 9 13.95C6.26619 13.95 4.05 11.7338 4.05 9ZM9 12.15C7.72594 12.15 6.57734 11.3825 6.08978 10.2055C5.60222 9.02838 5.87172 7.67351 6.77261 6.77261C7.67351 5.87172 9.02838 5.60222 10.2055 6.08978C11.3825 6.57734 12.15 7.72594 12.15 9C12.15 10.7397 10.7397 12.15 9 12.15ZM8.1 16.2C8.1 15.7029 8.50294 15.3 9 15.3C9.49706 15.3 9.9 15.7029 9.9 16.2V17.1C9.9 17.5971 9.49706 18 9 18C8.50294 18 8.1 17.5971 8.1 17.1V16.2Z"
      />
    </svg>
  );
};
