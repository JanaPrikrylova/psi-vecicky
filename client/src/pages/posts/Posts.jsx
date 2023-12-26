import hracka from '../../assets/hracka.jpg';
import { Link } from 'react-router-dom';
import './posts.css';

const Posts = () => {
  return (
    <section className="section">
      <div className="container">
        <h1>Hračky</h1>
        <div className="posts__container">
          <div className="posts__cat">
            <label htmlFor="">Lokalita</label>
            <input />

            <label htmlFor="">Cena</label>
            <input />
          </div>
          <div className="posts__cards">
            <div className="posts__card">
              <img src={hracka} alt="" />
              <div className="posts__detail">
                <h2>Plyšák pro psa</h2>
                <p>Krásný téměř nepouživaný plyšák</p>
                <div className="posts__price">
                  <p>50 Kč</p>
                  <p>Praha 4</p>
                </div>
                <Link to={`/post/1`}>
                  <button className="posts__button">Detail</button>
                </Link>
              </div>
            </div>
            <div className="posts__card">
              <img src={hracka} alt="" />
              <div className="posts__detail">
                <h2>Plyšák pro psa</h2>
                <p>Krásný téměř nepouživaný plišák</p>
                <div className="posts__price">
                  <p>50 Kč</p>
                  <p>Praha 4</p>
                </div>
                <Link to={`/post/1`}>
                  <button className="posts__button">Detail</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
