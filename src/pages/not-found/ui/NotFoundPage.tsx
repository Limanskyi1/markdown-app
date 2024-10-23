import { useNavigate } from "react-router-dom";

import { Button } from "@/shared/ui/button";

import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.notFound}>
      <h2>Oops we can't find this page : (</h2>
      <Button onClick={() => navigate("/")}>Go to main page</Button>
    </div>
  );
};
