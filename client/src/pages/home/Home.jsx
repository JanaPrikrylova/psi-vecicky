import './home.css';
import { Categories } from '../../Data';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="home__banner">
          {/*<h1 className="home__title">
            Máte doma vybavení pro pejska, které byste chtěli darovat nebo
            prodat, tak jste na správném místě.
  </h1>*/}
        </div>

        <div className="home__categories">
          {Categories.map((cat) => {
            return (
              <Link
                key={cat.id}
                className="home__category"
                to={`/posts/?cat=${cat.category}`}
              >
                <img src={cat.img} alt={cat.title} />
                <h4>{cat.title}</h4>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;

{
  /**/
}
