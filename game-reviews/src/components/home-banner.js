import "./home-banner.css";

const HomeBanner = () => {
   return (
      <div className="banner banner-home">
         <div className="banner-home-content">
            <h1>Parental Guidance Tips</h1>
            <p>Access hundreds of game reviews, reviewed and vetted by parents like you so your children can play safely.</p>
            <a href="/Signup" className="btn btn-primary">Sign up now</a>
         </div>
      </div>
   )
}

export default HomeBanner;