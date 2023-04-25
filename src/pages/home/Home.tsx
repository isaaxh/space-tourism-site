import Style from './Home.module.css';

const Home = () => {
  return (
    <div className={Style['main-body']}>
      <div className={Style["intro-container"]}>
        <h5 className={Style['sub-heading']}>SO, YOU WANT TO TRAVEL TO</h5>
        <h1 className={Style.heading}>SPACE</h1>
        <p className={Style.description}>
          Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <div className={Style["btn-container"]}>
        <button className={Style['btn-main']}>EXPLORE</button>
      </div>
    </div>
  )
}

export default Home