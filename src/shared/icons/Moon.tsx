import classNames from "classnames";

interface MoonProps extends React.SVGProps<SVGSVGElement> {
  width: number;
  height: number;
  className?: string;
}
export const Moon = (props: MoonProps) => {
  const { width, height, className } = props;
  return (
    <svg
      className={classNames(className)}
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Moon">
        <path
          id="Shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.2774 8.68879C15.5637 8.55901 15.8989 8.6037 16.1411 8.80395C16.4053 9.00561 16.5221 9.34637 16.4373 9.66766C15.4983 13.4521 12.0626 16.0811 8.16423 15.9981C4.26587 15.9151 0.945195 13.1423 0.16809 9.32131C-0.609014 5.50029 1.36484 1.65074 4.92111 0.0516606C5.20021 -0.0522001 5.51366 0.00290056 5.7406 0.195721C5.96755 0.388541 6.07256 0.688966 6.01515 0.98118C5.88228 1.5196 5.81325 2.07179 5.8095 2.62635C5.8321 6.30962 8.82199 9.28482 12.5053 9.28927C13.4619 9.29168 14.4076 9.08682 15.2774 8.68879ZM2.05332 9.82159C2.98704 12.4917 5.49798 14.2871 8.32661 14.307V14.3399C10.8022 14.343 13.0759 12.975 14.2328 10.7864C13.6652 10.9088 13.086 10.9695 12.5053 10.9673C7.9006 10.9628 4.16887 7.23107 4.16433 2.62635V2.40425C1.96456 4.18258 1.1196 7.15144 2.05332 9.82159Z"
        />
      </g>
    </svg>
  );
};
