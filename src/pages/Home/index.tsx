// node_modules
import React from "react";

import "./home.css";
import slide1Img from "../../assets/images/slide1.jpg";
import slide2Img from "../../assets/images/slide2.jpg";
import starImg from "../../assets/images/star.svg";
import { ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const HomePage = () => {
    return (
        <>
            <div className="home-container">
                <div className="page-container">
                    <div className="home-section">
                        <div className="slide-section">
                            <div className="slide-one">
                                <img src={slide1Img} alt="" />
                                <div className="slide-content">
                                    <div className="img-description">
                                        <h3 className="desc-sub-title">editor's pick</h3>
                                        <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                        <p className="desc-content">Lorem ipsum dolor sit amet, consectetur adipissicing elit. 
                                        Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis.
                                        enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, 
                                        iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?</p>
                                        <div className="desc-info">
                                            <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                            <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide-page-change">
                                <button type="button" className="slide-left-arrow"><ArrowBackIcon /></button>
                                <button type="button" className="slide-right-arrow"><ArrowForwardIcon /></button>
                            </div>
                        </div>
                        <div className="slide-page-nav">
                            <ul>
                                <li><a href=""></a></li>
                                <li className="active"><a href=""></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="home-section">
                        <div className="trend-section">
                            <div className="trend-left">
                                <h2 className="section-title">Editor's Pick</h2>
                                <div className="trend-content">
                                    <div className="trend-content-left">
                                        <img src={slide2Img} alt="" />
                                        <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                        <p className="desc-content">Lorem ipsum dolor sit amet, consectetur adipissicing elit. 
                                        Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis.
                                        enim praesentium magni delectus cum.</p>
                                        <div className="desc-info">
                                            <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                            <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                        </div>
                                    </div>
                                    <div className="trend-content-right">
                                        <div className="trend-content-right-item">
                                            <img src={ slide2Img } alt="" />
                                            <div className="desc-side">
                                                <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                                <div className="desc-info">
                                                    <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                                    <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="trend-content-right-item">
                                            <img src={ slide2Img } alt="" />
                                            <div className="desc-side">
                                                <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                                <div className="desc-info">
                                                    <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                                    <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="trend-content-right-item">
                                            <img src={ slide2Img } alt="" />
                                            <div className="desc-side">
                                                <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                                <div className="desc-info">
                                                    <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                                    <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trend-right">
                                <h2 className="section-title">Trending</h2>
                                <div className="trend-right-content">
                                    <div className="trend-content-right-item">
                                        <h2 className="item-number">01</h2>
                                        <div className="desc-side">
                                            <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                            <div className="desc-info">
                                                <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                                <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trend-content-right-item">
                                        <h2 className="item-number">02</h2>
                                        <div className="desc-side">
                                            <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                            <div className="desc-info">
                                                <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                                <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trend-content-right-item">
                                        <h2 className="item-number">03</h2>
                                        <div className="desc-side">
                                            <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                            <div className="desc-info">
                                                <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                                <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trend-content-right-item">
                                        <h2 className="item-number">04</h2>
                                        <div className="desc-side">
                                            <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                            <div className="desc-info">
                                                <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                                <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="see-all">see all trends {'>'}</a>
                            </div>
                        </div>
                    </div>
                    <div className="home-section">
                        <div className="no-section">
                            <div className="slide-one">
                                <img src={slide1Img} alt="" />
                                <div className="slide-content">
                                    <div className="img-description">
                                        <h3 className="desc-sub-title">editor's pick</h3>
                                        <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                        <p className="desc-content">Lorem ipsum dolor sit amet, consectetur adipissicing elit. 
                                        Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis.
                                        enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, 
                                        iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?</p>
                                        <div className="desc-info">
                                            <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                            <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-section">
                        <div className="pb-section">
                            <div className="p-side">
                                <h2 className="section-title">Politics</h2>
                                <div className="pb-side-item">
                                    <img src={slide2Img} alt="" />
                                    <div className="item-content">
                                        <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                        <p className="desc-content">Lorem ipsum dolor sit amet, consectetur adipissicing elit. 
                                        Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis.
                                        enim praesentium magni delectus cum.</p>
                                        <div className="desc-info">
                                            <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                            <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pb-side-item">
                                    <img src={slide2Img} alt="" />
                                    <div className="item-content">
                                        <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                        <p className="desc-content">Lorem ipsum dolor sit amet, consectetur adipissicing elit. 
                                        Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis.
                                        enim praesentium magni delectus cum.</p>
                                        <div className="desc-info">
                                            <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                            <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pb-side-item">
                                    <img src={slide2Img} alt="" />
                                    <div className="item-content">
                                        <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                        <p className="desc-content">Lorem ipsum dolor sit amet, consectetur adipissicing elit. 
                                        Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis.
                                        enim praesentium magni delectus cum.</p>
                                        <div className="desc-info">
                                            <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                            <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="b-side">
                                <h2 className="section-title">Business</h2>
                                <div className="pb-side-item">
                                    <img src={slide2Img} alt="" />
                                    <div className="item-content">
                                        <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                        <p className="desc-content">Lorem ipsum dolor sit amet, consectetur adipissicing elit. 
                                        Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis.
                                        enim praesentium magni delectus cum.</p>
                                        <div className="desc-info">
                                            <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                            <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pb-side-item">
                                    <img src={slide2Img} alt="" />
                                    <div className="item-content">
                                        <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                        <p className="desc-content">Lorem ipsum dolor sit amet, consectetur adipissicing elit. 
                                        Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis.
                                        enim praesentium magni delectus cum.</p>
                                        <div className="desc-info">
                                            <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                            <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pb-side-item">
                                    <img src={slide2Img} alt="" />
                                    <div className="item-content">
                                        <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                        <p className="desc-content">Lorem ipsum dolor sit amet, consectetur adipissicing elit. 
                                        Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis.
                                        enim praesentium magni delectus cum.</p>
                                        <div className="desc-info">
                                            <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                            <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-section">
                        <div className="rp-section">
                            <div className="rn-side">
                                <h2 className="section-title">Recent News</h2>
                                <div className="rn-side-content">
                                    <div className="rn-side-item">
                                        <div className="item-content">
                                            <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                            <p className="desc-content">Lorem ipsum dolor sit amet, consectetur adipissicing elit. 
                                            Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis.
                                            enim praesentium magni delectus cum.</p>
                                            <div className="desc-info">
                                                <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                                <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                            </div>
                                        </div>
                                        <img src={slide2Img} alt="" />
                                    </div>
                                    <div className="rn-side-item">
                                        <div className="item-content">
                                            <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                            <p className="desc-content">Lorem ipsum dolor sit amet, consectetur adipissicing elit. 
                                            Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis.
                                            enim praesentium magni delectus cum.</p>
                                            <div className="desc-info">
                                                <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                                <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                            </div>
                                        </div>
                                        <img src={slide2Img} alt="" />
                                    </div>
                                    <h2 className="sub-rn-title">Editor's Pick</h2>
                                    <div className="rn-side-item">
                                        <div className="item-content">
                                            <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                            <p className="desc-content">Lorem ipsum dolor sit amet, consectetur adipissicing elit. 
                                            Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis.
                                            enim praesentium magni delectus cum.</p>
                                            <div className="desc-info">
                                                <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                                <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                            </div>
                                        </div>
                                        <img src={slide2Img} alt="" />
                                    </div>
                                </div>
                                <div className="pagination-bar">
                                    <ul className="pagination-menu">
                                        <li className=""><button>1</button></li>
                                        <li className="active"><button>2</button></li>
                                        <li className=""><button>3</button></li>
                                        <li className=""><button>4</button></li>
                                    </ul> 
                                </div>
                            </div>
                            <div className="pp-side">
                                <h2 className="section-title">Popular Posts</h2>
                                <div className="trend-right-content">
                                    <div className="trend-content-right-item">
                                        <h2 className="item-number">01</h2>
                                        <div className="desc-side">
                                            <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                            <div className="desc-info">
                                                <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                                <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trend-content-right-item">
                                        <h2 className="item-number">02</h2>
                                        <div className="desc-side">
                                            <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                            <div className="desc-info">
                                                <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                                <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trend-content-right-item">
                                        <h2 className="item-number">03</h2>
                                        <div className="desc-side">
                                            <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                            <div className="desc-info">
                                                <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                                <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trend-content-right-item">
                                        <h2 className="item-number">04</h2>
                                        <div className="desc-side">
                                            <h2 className="desc-main-title">News Needs to Meet Its Audiences Where They Are</h2>
                                            <div className="desc-info">
                                                <h4 className="desc-info-user">Dave Rogers <span>in</span> Food</h4>
                                                <span className="desc-info-date">Jun 14 <b></b>3 min read <img src={ starImg }></img></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="see-all">see all populars {'>'}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
