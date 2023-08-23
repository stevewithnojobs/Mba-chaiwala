
function Footer(){
function footerLink(element){
    const allFooterLinks=document.querySelectorAll(".footerLink")
    switch(element){
        case 0:
        allFooterLinks.forEach((item, index) =>
          index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 1:
        allFooterLinks.forEach((item, index) =>
          index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 2:
        allFooterLinks.forEach((item, index) =>
          index === 2 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 3:
        allFooterLinks.forEach((item, index) =>
          index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 4:
        allFooterLinks.forEach((item, index) =>
          index === 4 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 5:
        allFooterLinks.forEach((item, index) =>
          index === 5 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;

      default:
        allFooterLinks.forEach((item) => (item.style.opacity = 1));
        break;
    }
  };
   
  function linkBacktoNormal(){
    const allFooterLinks=document.querySelectorAll(".footerLink")
    allFooterLinks.forEach((item) => (item.style.opacity = 1));
  }


    return <>
        <footer>
            <h1>
                Let's
                <br />
                #ConnectOncutting?
            </h1>
            <aside>
                <a href="/" className="footerLink" onMouseLeave={()=>linkBacktoNormal()} onMouseOver={()=>footerLink(0)}>
                    Home
                </a>
                <a href="/story" className="footerLink"onMouseOver={()=>footerLink(1)}onMouseLeave={()=>linkBacktoNormal()}>
                    Story
                </a>
                <a href="/media" className="footerLink"onMouseOver={()=>footerLink(2)}onMouseLeave={()=>linkBacktoNormal()}>
                    Media
                </a>
                <a href="/franchise" className="footerLink"onMouseOver={()=>footerLink(3)}onMouseLeave={()=>linkBacktoNormal()}>
                    Franchise
                </a>
                <a href="/events" className="footerLink"onMouseOver={()=>footerLink(4)}onMouseLeave={()=>linkBacktoNormal()}>
                    Events
                </a>
                <a href="/chaiwalacares" className="footerLink"onMouseOver={()=>footerLink(5)}onMouseLeave={()=>linkBacktoNormal()}>
                    Chai Wala Cares
                </a>
            </aside>
            <div>
                <h5>Email</h5>
                <a href="mailto:swayamkumar409@gmail.com">swayamkumar409@gmail.com</a>
            </div>

            <div>
                <h5>Phone</h5>
                <a href="tel:+2984794">+919327838</a>
            </div>
            <p>copyright 2023 MBA CHAIWALA</p>
        </footer>
        <div className="footer"></div>
         
    </>
}

export default Footer