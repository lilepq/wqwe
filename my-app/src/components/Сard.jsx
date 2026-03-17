import styles from "./Card.module.css"
function Card({ id, name }) {
  return (
    <>
      <div
        className={styles.photo}
        style={{
          width: "416px",
          height: "416px",
          backgroundColor: "#86A1A9",
        }}
      >
        <h1>{id}</h1>
        <h2>{name}</h2>
          
      </div>

     
    </>
  );
}

export default Card;