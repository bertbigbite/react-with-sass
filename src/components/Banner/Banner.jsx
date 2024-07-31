
import './Banner.scss'
import { TypeAnimation } from 'react-type-animation';

function Banner() {
    return (
        <>
        <div className="banner">
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Hi, i'm Michael",

      ]}
      speed={70}
      style={{ fontSize: '8em', display: 'inline-block' }}
      repeat={0}
    />
    <br></br>
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "A Developer",
        1000,
        'A Mentor',
        1000,
        'A Teacher',
        1000
      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '5em', display: 'inline-block' }}
      repeat={Infinity}
    />
        </div>



{/*Skills Banner*/}

        <div className="">
      <div className="">
        <h2 className="">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="<FontAwesomeIcon icon='fa-brands fa-css3-alt'/>"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>


        </>
    )
}
export default Banner
