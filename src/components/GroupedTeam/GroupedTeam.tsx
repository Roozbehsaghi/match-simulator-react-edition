import React from "react";
import styles from "./GroupedTeam.module.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type GroupedTeamProps = {
  navigateLink: string;
  title: string | undefined;
};

const GroupedTeam: React.FC<GroupedTeamProps> = ({
  navigateLink,
  title = "default title",
}) => {
  const navigate = useNavigate();

  const goToIndividualGroup = () => {
    // Include the title in the navigation link
    navigate(`${navigateLink}/${encodeURIComponent(title)}`);
  };

  return (
    <div>
      <motion.div
        className={styles["container"]}
        // onClick={goToIndividualGroup}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
      >
        {title && <div className={styles["container-title"]}>{title}</div>}
        <div className={styles["container-body"]}>
          <ul>Qatar</ul>
          <ul>Ecuador</ul>
          <ul>Senegal</ul>
          <ul>Netherlands</ul>
        </div>
      </motion.div>
    </div>
  );
};

export default GroupedTeam;
