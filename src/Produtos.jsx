import {} from 'react'
import Img1 from './assets/kwid_intense_5.png';
import Img2 from './assets/honda-fit-gd-[3308].jpg';
import Img3 from './assets/2015-Volkswagen-Jetta.png';
import Img4 from './assets/download.png';


function Produtos(){
  return(
    <>
      <div className="um">
      <figure>
      <img
        src={Img1}
        alt=""
        width={500}
      />
      <figcaption>
        Renault Kwid - R$ 12.000,00
      </figcaption>
    </figure>
    <figure>
      <img
        src={Img2}
        alt=""
        width={500}
      />
      <figcaption>
        Honda Fit - R$ 25.000,00
      </figcaption>
    </figure>
      </div>
      <div className="dois">
      <figure>
      <img
        src={Img3}
        alt=""
        width={500}
      />
      <figcaption>
        Volkswagen Jetta - R$ 72.000,00
      </figcaption>
    </figure>
    <figure>
      <img
        src={Img4}
        alt=""
        width={500}
      />
      <figcaption>
        BMW M8 - R$ 525.000,00
      </figcaption>
    </figure>

      </div>
    </>
  )
}
export default Produtos