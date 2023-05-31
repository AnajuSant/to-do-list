import style from "./index.module.css";
import img from "../../assets/Todo.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className={style.section_container}>
      <div className={style.home_container}>
        <div>
          <Link to="/to-do">
            <p>ToDo List</p>
          </Link>
        </div>
      </div>
      <div className={style.img_container}>
        <img className={style.img} src={img}></img>
      </div>
    </section>
  );
};
