import React from "react";
import "./RightSlider.scss";

class RightSlider extends React.Component {

  constructor(){
    super();
    this.state = {
      // activeId: 1,
    }
  }
  // OpenPage = (id)=>{
  //   this.setState({activeId:id});
  // }
  render(){
    console.log(this.state.activeId);
    // const{activeId} = this.state;
    return(
      <div className='RightSlider'>
        <div className='ProductName'>
          <h1>
            combo goals
            <div>lip'n'cheek</div>
          </h1>
        </div>
        <div className='Details'>
          <ul>
            <li>description</li>
            <li>notes&ingredients</li>
            <li>shipping&returns</li>
          </ul>
          <p className='description'>A true multi-tasker.

On-the-go two-in-one stick for lips and cheeks that blends in seamlessly for an instant flushed effect, with zero effort.

Buildable and weightless cream-to-powder formula ready to give us a pearlescent pop of color!</p>
          <p className='ingredients'>
          6 gr / 0.21 oz

GOOD TO KNOW: Vegan, cruelty free, talc free, parabens free, no D4/D5/D6, mineral oils free, hypoallergenic

CONTAINS: C12-15 ALKYL BENZOATE, DICALCIUM PHOSPHATE, ISONONYL ISONONANOATE, POLYMETHYLSILSESQUIOXANE, MICA, SYNTHETIC WAX, PHENYL TRIMETHICONE, PHENYLPROPYLDIMETHYLSILOXYSILICATE, TRIMETHYLOLPROPANE TRIISOSTEARATE, POLYETHYLENE, HDI/TRIMETHYLOL HEXYLLACTONE CROSSPOLYMER, OCTYLDODECANOL, SORBITAN ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, ETHYL VANILLIN, STEARALKONIUM BENTONITE, OCTYLDODECYL PCA, PENTAERYTHRITYL TETRA-DI-T-BUTYL HYDROXYHYDROCINNAMATE, PROPYLENE CARBONATE, DISTEARDIMONIUM HECTORITE. MAY CONTAIN/ (+/-): CI 77891(TITANIUM DIOXIDE),CI 77491(IRON OXIDES),CI77492 (IRON OXIDES),CI 77742(MANGANESE VIOLET),CI 15850(RED 6),CI 15850(RED 7 LAKE),CI 45410(RED 28 LAKE),CI 73360(RED 30 LAKE),CI 19140(YELLOW 5 LAKE),CI15985(YELLOW 6 LAKE),CI 42090( BLUE 1 LAKE)
          </p>
          <p className='shipping'>
          We ship throughout Europe and the UK;

We speeded up delivery times, check your Country here.

Our boxes are 100% recyclable, FSC and Green Dot certified.

30 days return period;

We accept Credit/Debit card, PayPal and Bank Transfer;

For more information, visit our FAQs.
          </p>
        </div>
        <div className='AddToCart'>
          <div className='ColorSelection'>
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div>
            <div className='Adding'>
              <button>-</button>
              <div>1</div>
              <button>+</button>
            </div>
            <button>19.00<span>€-ADD TO CART</span></button>
          </div>
          <div className='Subscribe!'>
            <p>Awesome!!! Subscribe!!! To News Letter!!!</p>
          </div>
          <div className='Philosophy'>
            <div className='Humane'>
              <img alt='Humane'src='https://i.ibb.co/0X07wRq/Image-from-i-OS-2.jpg'></img>
              <p>Humane</p>
            </div>
            <div className='Vegan'>
              <img alt='Vegan' src='https://i.ibb.co/b3Yz4Ff/Image-from-i-OS-1.jpg'></img>
              <p>Vegan</p>
            </div>
            <div className='Inclusive'>
              <img alt='Inclusive' src='https://i.ibb.co/RYCT9W7/Image-from-i-OS.jpg'></img>
              <p>Inclusive</p>
            </div>
          </div>
        </div>
        <div className='PairWith'>
          <a href='http://www.naver.com'>
            <img alt='product' src='https://images.ctfassets.net/vnxry7jc7f2k/7EtX4lxmITWCGLCDU6X3Re/4eedd4a78a76f91c81f3bdc44a3c2250/03_SUPERFLUID_200421_0005_-_5-4.png?w=150&h=431&q=80&fm=webp'></img>
            <p>ProductName|Hahahahaha</p>
            <div>Price<span>€</span></div>
          </a>
        </div>
      </div>
    );
  }
}

const MAPPING_OBJ = {
  // 1: <First/>,
  // 2: <Second/>,
  // 3: <Third/>,
}

const MAPPING_MENU = ["First", "Second", "Third"];

export default RightSlider;
{/* <div className='wrapper'>
  <ul className='tabs'>
    {MAPPING_MENU.map(
      (menu, idx) => (
        <li onClick={()=> this.OpenPage(idx+1)}>{menu}</li>
      )
    )}
  </ul>
  <div className='Contents'>
    {MAPPING_OBJ[activeId]}
  </div>
</div> */}