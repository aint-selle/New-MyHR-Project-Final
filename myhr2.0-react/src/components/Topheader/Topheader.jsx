/* Code generated with AutoHTML Plugin for Figma */
import styles from "./TopHeader.module.css";
import dashboardlogo  from '../../images/Horizontal-FlatWhite1.png';
import avatar  from '../../images/Normal.svg';


export const TopHeader = ({ property1 = "default", ...props }) => {
  return (
    <div className={styles["top-header"] + " " + "col-sm-12"}>
      <div className={styles["logo-horizontal"]}>
        <img
          className={styles["horizontal-flat-white-1"]}
          src={dashboardlogo}
        />
      </div>
      <div className={styles["frame-8129"]}>
        <div className={styles["input-element-text-field"]}>
          <div className={styles["input-element-content"]}>
            <div className={styles["text"]}>Search here </div>
          </div>
          <div className={styles["trailing-icon"]}>
            <svg
              className={styles["search-2"]}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.197 11.4696C11.9042 11.1767 11.4293 11.1767 11.1364 11.4696C10.8435 11.7625 10.8435 12.2373 11.1364 12.5302L12.197 11.4696ZM13.803 15.1969C14.0959 15.4898 14.5707 15.4898 14.8636 15.1969C15.1565 14.904 15.1565 14.4291 14.8636 14.1362L13.803 15.1969ZM11.1364 12.5302L13.803 15.1969L14.8636 14.1362L12.197 11.4696L11.1364 12.5302ZM6.33333 11.9165C3.43384 11.9165 1.08333 9.566 1.08333 6.6665H-0.416666C-0.416666 10.3944 2.60541 13.4165 6.33333 13.4165V11.9165ZM11.5833 6.6665C11.5833 9.566 9.23283 11.9165 6.33333 11.9165V13.4165C10.0613 13.4165 13.0833 10.3944 13.0833 6.6665H11.5833ZM6.33333 1.4165C9.23283 1.4165 11.5833 3.76701 11.5833 6.6665H13.0833C13.0833 2.93858 10.0613 -0.0834961 6.33333 -0.0834961V1.4165ZM6.33333 -0.0834961C2.60541 -0.0834961 -0.416666 2.93858 -0.416666 6.6665H1.08333C1.08333 3.76701 3.43384 1.4165 6.33333 1.4165V-0.0834961Z"
                fill="#BBBBBB"
              />
            </svg>
          </div>
        </div>
        <div className={styles["frame-249"]}>
          <div className={styles["content"]}>
            <div className={styles["frame-224"]}>
              <div className={styles["frame-223"]}>
                <div className={styles["frame-247"]}>
                  <div className={styles["avatar"]}>
                    <div className={styles["avatar2"]}>
                      <div className={styles["x-large-64-px"]}>
                        <img className={styles["normal"]} src={avatar} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["frame-222"]}>
                  <div className={styles["label"]}>Alan Zboncak </div>
                  <div className={styles["label2"]}>Super Admin </div>
                </div>
              </div>
              <svg
                className={styles["fluent-chevron-down-12-filled"]}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.95999 5.95993C3.1475 5.77267 3.40166 5.66748 3.66666 5.66748C3.93166 5.66748 4.18583 5.77267 4.37333 5.95993L8 9.5866L11.6267 5.95993C11.8162 5.78329 12.067 5.68713 12.326 5.6917C12.5851 5.69627 12.8323 5.80122 13.0155 5.98444C13.1987 6.16766 13.3037 6.41484 13.3082 6.6739C13.3128 6.93297 13.2166 7.1837 13.04 7.37327L8.70666 11.7066C8.51916 11.8939 8.265 11.9991 8 11.9991C7.73499 11.9991 7.48083 11.8939 7.29333 11.7066L2.95999 7.37327C2.77273 7.18577 2.66754 6.9316 2.66754 6.6666C2.66754 6.4016 2.77273 6.14743 2.95999 5.95993Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles["group-21"]}>
          <div className={styles["frame-253"]}>
            <div className={styles["icon"]}>
              <svg
                className={styles["notification-1"]}
                width="17"
                height="22"
                viewBox="0 0 17 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.18336 19.5L5.48336 19.9C6.83336 21.7 9.53336 21.7 10.8834 19.9L11.1834 19.5M0.366192 14.0496L0.469543 14.2627C1.13331 15.6311 2.52054 16.5 4.04144 16.5H12.2623C13.5656 16.5 14.7785 15.8342 15.4783 14.7347C16.4661 13.1826 16.2045 11.1465 14.8564 9.89453L14.8125 9.85377C13.8972 9.00376 13.4466 7.76543 13.6015 6.52598L13.6662 6.00905C14.0318 3.08379 11.7509 0.5 8.80286 0.5H7.09995C4.15552 0.5 1.87737 3.08064 2.24258 6.00234L2.32194 6.63719C2.46808 7.80631 2.04102 8.9741 1.17514 9.77313C-0.00757968 10.8645 -0.336173 12.6016 0.366192 14.0496Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className={styles["frame-252"]}>
              <div className={styles["frame-251"]}>
                <div className={styles["_2"]}>2 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}