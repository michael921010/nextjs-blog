import styles from "./index.module.scss";
import c from "classnames";

export default function Alert({ children, type }) {
  return (
    <div
      className={c({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
}
