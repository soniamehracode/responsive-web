import "./CardCarosal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../App.css";
const CardCarosal = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="wrs_section_2 section_newpost">
      <div className="wrs_container">
        <div className="cards_container">
          <div className="ebook_card">
            <h2>
              ebooks<span>store</span>
            </h2>
            <div className="carosal_btn">
              <button className="button">
                <span>view all</span>
              </button>
            </div>
          </div>

          <div className="flexbox_container">
            <Slider {...settings}>
              <div className="items">
                <div className="items-img">
                  <img src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg" />
                  <div className="post_heading">
                    <h1>Born to Move</h1>
                    <span>$59.00</span>
                    <h5>Genesis Member : $0</h5>
                  </div>

                  <div className="cardButton">
                    <span>Add to cart</span>
                  </div>
                </div>
              </div>

              <div className="items">
                <div className="items-img">
                  <img src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg" />
                  <div className="post_heading">
                    <h1>Born to Move</h1>
                    <span>$59.00</span>
                    <h5>Genesis Member : $0</h5>
                  </div>

                  <div className="cardButton">
                    <span>Add to cart</span>
                  </div>
                </div>
              </div>
              <div className="items">
                <div className="items-img">
                  <img src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg" />
                  <div className="post_heading">
                    <h1>Born to Move</h1>
                    <span>$59.00</span>
                    <h5>Genesis Member : $0</h5>
                  </div>

                  <div className="cardButton">
                    <span>Add to cart</span>
                  </div>
                </div>
              </div>
              <div className="items">
                <div className="items-img">
                  <img src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg" />
                  <div className="post_heading">
                    <h1>Born to Move</h1>
                    <span>$59.00</span>
                    <h5>Genesis Member : $0</h5>
                  </div>

                  <div className="cardButton">
                    <span>Add to cart</span>
                  </div>
                </div>
              </div>
              <div className="items">
                <div className="items-img">
                  <img src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg" />
                  <div className="post_heading">
                    <h1>Born to Move</h1>
                    <span>$59.00</span>
                    <h5>Genesis Member : $0</h5>
                  </div>

                  <div className="cardButton">
                    <span>Add to cart</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
    // <div className="wrs_section_2 section_newpost">
    //   <div className="wrs_container">
    //     <div className="cards">
    //       <div className="carosal-card">
    //         <div className="newcard-heading">
    //           <h1 className="cols">ebook</h1>
    //           <h1 className="heads">store</h1>
    //         </div>
    //         <div className="butn-card">
    //           <a href="#" className="card-btn">
    //             view all
    //           </a>
    //         </div>
    //       </div>

    //       <div className="flexbox">
    //         <Slider {...settings}>
    //           <div className="items">
    //             <div className="items-img">
    //               <img
    //                 className="carosal-img"
    //                 src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg"
    //               />
    //               <div className="newpost-title">
    //                 <h2>born to move</h2>
    //                 <span>$59.00</span>
    //                 <h3 className="text-span">genesis members: 0</h3>
    //               </div>

    //               <div className="newcardButton">
    //                 <span className="addbtn">Add to cart</span>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="items">
    //             <div className="items-img">
    //               <img
    //                 className="carosal-img"
    //                 src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg"
    //               />
    //               <div className="newpost-title">
    //                 <h1>born to move</h1>
    //                 <span>$59.00</span>
    //                 <h3 className="text-span">genesis members: 0</h3>
    //               </div>

    //               <div className="cardButton">
    //                 <span className="add-btn">Add to cart</span>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="items">
    //             <div className="items-img">
    //               <img
    //                 className="carosal-img"
    //                 src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg"
    //               />
    //               <div className="newpost-title">
    //                 <h1>born to move</h1>
    //                 <span>$59.00</span>
    //                 <h3 className="text-span">genesis members: 0</h3>
    //               </div>

    //               <div className="cardButton">
    //                 <span className="add-btn">Add to cart</span>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="items">
    //             <div className="items-img">
    //               <img
    //                 className="carosal-img"
    //                 src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg"
    //               />
    //               <div className="newpost-title">
    //                 <h1>born to move</h1>
    //                 <span>$59.00</span>
    //                 <h3 className="text-span">genesis members: 0</h3>
    //               </div>

    //               <div className="cardButton">
    //                 <span className="add-btn">Add to cart</span>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="items">
    //             <div className="items-img">
    //               <img
    //                 className="carosal-img"
    //                 src="https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751__480.jpg"
    //               />
    //               <div className="newpost-title">
    //                 <h1>born to move</h1>
    //                 <span>$59.00</span>
    //                 <h3 className="text-span">genesis members: 0</h3>
    //               </div>

    //               <div className="cardButton">
    //                 <span className="add-btn">Add to cart</span>
    //               </div>
    //             </div>
    //           </div>
    //         </Slider>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CardCarosal;
