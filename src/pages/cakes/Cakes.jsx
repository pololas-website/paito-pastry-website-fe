import SmallCake from '/img/small-cake.jpg';
import MediumCake from '/img/medium-cake.jpg';
import LargeCake from '/img/large-cake.jpg';
import ExtraLargeCake from '/img/extra-large-cake.jpg';
import './cakes.css';

import { Card } from '../../components';

function Cakes() {
  return (
    <section className="size-presentation">
      <h1 className="heading-1 size-presentation__title">Cakes</h1>
      <p className="p size-presentation__description">
        Our irresistible range of cakes are ready to be picked up in store or
        delivered straight to your door. Including our range of cakes available
        for nationwide delivery. All of our cakes are handmade, fresh and baked
        to order.
      </p>
      <div className="size-presentation__cards">
        <Card>
          <img
            src={SmallCake}
            alt="small cake"
            className="size-presentation__img"
          />
          <span className="size-presentation__card-title">Smalll</span>
          <span className="size-presentation__portions">(Serves 8)</span>
        </Card>
        <Card>
          <img
            src={MediumCake}
            alt="Medium cake"
            className="size-presentation__img"
          />
          <span className="size-presentation__card-title">Medium</span>
          <span className="size-presentation__portions">(Serves 14)</span>
        </Card>
        <Card>
          <img
            src={LargeCake}
            alt="Large cake"
            className="size-presentation__img"
          />
          <span className="size-presentation__card-title">Large</span>
          <span className="size-presentation__portions">(Serves 24)</span>
        </Card>
        <Card>
          <img
            src={ExtraLargeCake}
            alt="Extra large cake"
            className="size-presentation__img"
          />
          <span className="size-presentation__card-title">Extra Large</span>
          <span className="size-presentation__portions">(Serves 40)</span>
        </Card>
      </div>
    </section>
  );
}

export default Cakes;
