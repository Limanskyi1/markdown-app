import { Switch as HeadLessSwitch } from "@headlessui/react";

import styles from "./Switch.module.scss";

export const Switch = ({ enabled }: { enabled: boolean }) => {
  return (
    <HeadLessSwitch checked={enabled} className={styles.switch}>
      <span aria-hidden="true" className={styles.ball} />
    </HeadLessSwitch>
  );
};
