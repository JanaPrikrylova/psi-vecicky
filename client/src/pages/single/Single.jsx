import hracka from '../../assets/hracka.jpg';
import './single.css';

const Single = () => {
  return (
    <section className="section">
      <div className="container">
        <h1>Plyšák</h1>
        <div className="post__container">
          <div className="post__box">
            <img src={hracka} alt="" />
          </div>
          <div className="post__box">
            <span>Popis</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum amet
              eveniet ex? Modi, similique temporibus beatae ut et consectetur
              nihil minima earum, voluptate cupiditate fugiat! Officiis facilis
              nemo voluptate accusantium. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Voluptas, quas ab dolore dicta et
              numquam blanditiis repellat fuga repudiandae fugit libero non,
              iure culpa, a voluptate adipisci sit suscipit mollitia.
            </p>
            <div className="post__bottom">
              <div className="post__item">
                <span>Cena</span>
                <span>Lokalita</span>
              </div>
              <div className="post__item">
                <span>50 Kč</span>
                <span>Praha 4 - Chodov</span>
              </div>
            </div>
          </div>
        </div>

        <div className="form__container">
          <h3 className="form__title">Kontaktujte prodejce</h3>
          <span>Jana Nováková</span>
          <form>
            <label htmlFor="message">Zpráva prodejci</label>
            <textarea
              type="text"
              placeholder="Napiště Vaši zprávu..."
              name="text"
              id="text"
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="email">Váš email</label>
            <input type="text" name="email" placeholder="email" />
            <button className="form__button">Odeslat zprávu prodejci</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Single;
