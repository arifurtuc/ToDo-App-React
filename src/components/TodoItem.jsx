import styles from "./todoitem.module.css";

export default function TodoItem({ item }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
        {/* Delete button to remove todos */}
        <span>
          <button className={styles.deleteButton}>x</button>
        </span>
      </div>
      {/* Horizontal line for visual separation */}
      <hr className={styles.line} />
    </div>
  );
}
