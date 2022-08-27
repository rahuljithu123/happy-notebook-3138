function navbar() {

    return `<div id="navbarRP">

    <div id="navleftRP">
        <div id="logoRP">
        <a href="./homepage/index.html"> <img src="data:image/png;base64,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"alt="error"> </a>  
        </div>
        <ul>
            <li> <a href="#">New </a>
                <div class="mm1RP">
                    <div class="mmitemsRP">
                        <h3> Shop New Arrivals </h3>
                        <ul>
                            <li> For Women</li>
                            <li> For Men</li>
                            <li> For Girls</li>
                            <li> For Boys</li>
                        </ul>
                    </div>
                    <div class="mmitemsRP">
                        <h3> What to Shop Now</h3>
                        <ul>
                            <li><a href="women.html">Womens  </a> </li>
                            <li> Olympia’s Picks</li>
                            <li> The Work Remix </li>
                            <li> Best-dressed Guest</li>
                            <li> Sweater-blazers</li>
                            <li> FormKnit</li>
                            <li> Animal Prints</li>
                            <li> Color Crush: Hot Pink</li>
                        </ul>
                    </div>
                    <div class="mmitemsRP">
                        <h3> <a href="mens.html">  MEN </a>  </h3>
                        <ul>
                            <li> The Cashmere Shop </li>
                            <li> Best-dressed Guest </li>
                            <li> Varsity Style </li>
                            <li> Corduroy </li>
                            <li> Relaxed Fits </li>
                            <li> Source Materials </li>
                            <li> Fall 2022 Lookbook </li>
                        </ul>
                    </div>
                    <div class="mmitemsRP">
                        <h3> Bookmark these </h3>
                        <div class="mmimageRP"> <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/2022sep_0816_flyouts_new_img0.jpg" alt="error"></div>
                        <p>Best-dressed guest</p>
                    </div>
                    <div class="mmitemsRP">
                        <div class="mmimageRP"> <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/2022sep_0816_flyouts_new_img1.jpg" alt="error"> </div>
                        <p> Animal prints</p>
                    </div>
                </div>
            </li>
            <li>
                <a href="women.html">Women </a>
                <div class="mm2RP">
                    <div class="mmitemsRP">
                        <h3> Women </h3>
                        <ul>
                            <li>New Arrivals</li>
                            <li> Best Sellers</li>
                            <li> Top Rated</li>
                            <li> Brands We Love</li>
                            <li> The Re-Imagined Shop</li>
                            <li> Shop All</li>
                            <li> Sale </li>
                        </ul>
                        <h3> What to Shop Now</h3>
                        <ul>
                            <li> Olympia’s Picks</li>
                            <li> The Work Remix</li>
                            <li> Fall 2022 Lookbook</li>
                            <li> Best-dressed Guest</li>
                            <li> Sweater-Blazers</li>
                            <li> Animal Prints</li>
                            <li> Color Crush: Hot Pink </li>
                        </ul>
                    </div>
                    <div class="mmitemsRP">
                        <h3> Clothing </h3>
                        <ul>
                            <li> All Clothing</li>
                            <li> Dresses & Jumpsuits</li>
                            <li> Shirts & Tops</li>
                            <li> Sweaters</li>
                            <li> Blazers</li>
                            <li> Pants</li>
                            <li> Denim</li>
                            <li> T-Shirts & Tank Tops</li>
                            <li> Coats & Jackets</li>
                            <li> Shorts</li>
                            <li> Skirts</li>
                            <li> Swimwear</li>
                            <li> Sweatshirts & Sweatpants</li>
                            <li> Active</li>
                            <li> Matching Sets</li>
                            <li> Pajamas & Intimates</li>
                            <li> Suiting</li>
                            <li> Maternity </li>
                        </ul>
                    </div>
                    <div class="mmitemsRP">
                        <h3>Shoes & Boots</h3>
                        <ul>
                            <li>All Shoes & Boots</li>
                            <li> Boots</li>
                            <li> Flats</li>
                            <li> Clogs</li>
                            <li> Heels </li>
                            <li>Sneakers </li>
                            <li> Sandals </li>
                        </ul>
                        <h3> Accessories </h3>
                        <ul>
                            <li> All </li>
                            <li> Jewelry </li>
                            <li> Bags</li>
                            <li> Hats</li>
                            <li> Scarves & Wraps</li>
                            <li> Accessories & More</li>
                            <li> Candles, Beauty, & Home</li>
                            <li> Hair</li>
                            <li> Socks & Tights </li>
                            <li>Belts </li>
                        </ul>
                    </div>
                    <div class="mmitemsRP">
                        <h3>Shops, stories & more</h3>
                        <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/v2/2022sep_0823_flyout_w_img0.jpg" alt="error">
                        <p> Introducing Italian city wool</p>
                        <br>
                        <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/v2/2022sep_0823_flyout_w_img2.jpg" alt="error">
                        <p>Fresh cashmere shades </p>
                    </div>
                    <div class="mmitemsRP">
                        <br>
                        <br>
                        <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/v2/2022sep_0823_flyout_w_img1.jpg" alt="error">
                        <p>New fall arrivals </p>
                        <br>
                        <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/v2/2022sep_0823_flyout_w_img3.jpg" alt="error">
                        <p> Lightweight, luxe merino wool </p>
                    </div>
                </div>
            </li>
            <li>
                <a href="mens.html">Men </a>
                <div class="mm2RP">
                    <div class="mmitemsRP">
                        <h3>Men </h3>
                        <ul>
                            <li> New Arrivals</li>
                            <li> Best Sellers</li>
                            <li> Top Rated</li>
                            <li> Brands We Love</li>
                            <li> The Re-Imagined Shop</li>
                            <li> Shop All</li>
                            <li> Sale</li>
                        </ul>
                        <h3>What to Shop Now</h3>
                        <ul>
                            <li> The Cashmere Shop</li>
                            <li> Best-Dressed Guest</li>
                            <li> Varsity Style</li>
                            <li> Corduroy</li>
                            <li> Source Materials</li>
                            <li> Fall 2022 Lookbook</li>
                        </ul>
                    </div>
                    <div class="mmitemsRP">
                        <h3>Clothing</h3>
                        <ul>
                            <li>All Clothing</li>
                            <li> Casual Shirts</li>
                            <li> Dress Shirts</li>
                            <li> Pants & Chinos</li>
                            <li> Denim</li>
                            <li> Suits & Tuxedos</li>
                            <li> Polos & Rugby</li>
                            <li> T-Shirts</li>
                            <li> Sweatshirts & Sweatpants</li>
                            <li> Sweaters</li>
                            <li> Coats & Jackets</li>
                            <li> Shorts</li>
                            <li> Swim</li>
                            <li> Pajamas & Loungewear</li>
                            <li> Underwear & Boxers </li>
                        </ul>
                    </div>
                    <div class="mmitemsRP">
                        <h3> Shoes & Sneakers </h3>
                        <ul>
                            <li> All Shoes & Sneakers</li>
                            <li> Sneakers</li>
                            <li>Boots</li>
                            <li> Dress Shoes</li>
                            <li> Sandals & Flip-Flops</li>
                        </ul>
                        <h3> Accessories </h3>
                        <ul>
                            <li> All Accessories</li>
                            <li> Hats</li>
                            <li> Belts</li>
                            <li> Socks</li>
                            <li> Watches & Jewelry</li>
                            <li> Bags & Wallets</li>
                            <li> Sunglasses & Eyewear</li>
                            <li> Candles, Grooming & Home </li>
                        </ul>
                    </div>
                    <div class="mmitemsRP">
                        <h3> Shops, stories & more </h3>
                        <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/2022sep_0823_flyout_m_img0.jpg" alt="error">
                        <p>Introducing heritage 14 oz. fleece </p>
                        <br>
                        <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/2022sep_0823_flyout_m_img2.jpg" alt="error">
                        <p> The evolution of suiting</p>
                    </div>
                    <div class="mmitemsRP">
                        <br>
                        <br>
                        <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/2022sep_0823_flyout_m_img1.jpg" alt="error">
                        <p>The September Collection </p>
                        <br>
                        <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/2022sep_0823_flyout_m_img4.jpg" alt="error">
                        <p>Varsity style </p>
                    </div>

                </div>
            </li>
            <li>
                <a href="kids.html">Kids </a>
                <div class="mm2RP">
                    <div class="mmitemsRP">
                        <h3>Kids </h3>
                        <ul>
                            <li>Girls' New Arrivals</li>
                            <li> Girls' Best </li>
                            <li>Girls' Top Rated</li>
                            <li> Girls' Brands We Love</li>
                            <li>Girls' Re-Imagined Shop</li>
                            <li>Shop All Girls</li>
                            <li> Girls' Sale</li>
                            <li> Boys' New Arrivals</li>
                            <li> Boys' Best Sellers</li>
                            <li> Boys' Top Rated </li>
                            <li> Boys' Brands We Love </li>
                        </ul>
                        <h3>What to Shop Now </h3>
                        <ul>
                            <li>Mini-Me Moments</li>
                            <li> Our Tween Edit</li>
                            <li> Back-To-School</li>
                            <li> Picture Day</li>
                            <li> School Uniform Shop</li>
                        </ul>
                    </div>
                    <div class="mmitemsRP">
                        <h3> Girls </h3>
                        <ul>
                            <li>All Clothing</li>
                            <li> Dresses & Jumpsuits</li>
                            <li> Tops & Tees</li>
                            <li> Graphics Shop</li>
                            <li> Sweaters</li>
                            <li> Leggings & Pants</li>
                            <li> Skirts</li>
                            <li> Sweatshirts & Sweatpants</li>
                            <li> Active</li>
                            <li> Pajamas</li>
                            <li> Matching Sets</li>
                            <li>Denim</li>
                            <li> Shorts</li>
                            <li> Swim & Rash Guards</li>
                            <li> Coats & Jackets</li>
                            <li> Baby</li>
                            <li> All Accessories</li>

                        </ul>
                    </div>
                    <div class="mmitemsRP">
                        <h3> Boys </h3>
                        <ul>
                            <li>All Clothing</li>
                            <li> Shirts</li>
                            <li> T-Shirts & Polos</li>
                            <li> Graphics Shop</li>
                            <li> Sweaters</li>
                            <li> Sweatshirts & Sweatpants</li>
                            <li> Chinos & Pants</li>
                            <li> Denim</li>
                            <li> Suiting</li>
                            <li> Coats & Jackets</li>
                            <li> Shorts</li>
                            <li> Active</li>
                            <li> Swim & Rash Guards</li>
                            <li> Matching Sets</li>
                            <li> Baby</li>
                            <li> All Accessories</li>
                            <li> All Shoes & Sneakers </li>
                        </ul>
                    </div>
                    <div class="mmitemsRP">
                        <h3>Shops, stories & more </h3>
                        <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/2022sep_0816_flyouts_cc_img0.jpg" alt="error">
                        <p>new arrivals </p>
                        <br>
                        <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/2022sep_0816_flyouts_cc_img2.jpg" alt="error">
                        <p>new kids’ cashmere </p>
                    </div>
                    <div class="mmitemsRP">
                        <br>
                        <br>
                        <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/2022sep_0816_flyouts_cc_img1.jpg" alt="error">
                        <p> the mini-me shop</p>
                        <br>
                        <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/2022sep_0816_flyouts_cc_img3.jpg" alt="error">
                        <p>color crush: pink </p>
                    </div>
                </div>
            </li>
            <li> <a href="#">Swim </a>
                <div class="mm1RP">
                    <div class="mmitemsRP">
                        <h3> Swim </h3>
                        <ul>
                            <li> Women’s swim</li>
                            <li> Shop all women’s </li>
                            <li> Tops</li>
                            <li> Bottoms</li>
                            <li> One-pieces</li>
                            <li> Rash guards</li>
                            <li> Cover-ups</li>
                            <li> Featured</li>
                            <li> Fresh florals</li>
                            <li> Ruched swim</li>
                            <li> Textured swim </li>
                        </ul>
                    </div>
                    <div class="mmitemsRP">
                        <h3> Men’s swim </h3>
                        <ul>
                            <li> Shop all men’s swim</li>
                            <li> 6” trunks</li>
                            <li> 7” board shorts</li>
                            <li> 8” trunks</li>
                        </ul>
                    </div>
                    <div class="mmitemsRP">
                        <h3> Kid’s swim </h3>
                        <ul>
                            <li>Shop all girls’ swim</li>
                            <li> Girls’ one-pieces</li>
                            <li> Girls’ two-pieces</li>
                            <li> Girls’ rash guards</li>
                            <li> Girls’ cover-ups</li>

                            <li> Shop all boys’ swim</li>
                            <li> Boys’ trunks</li>
                            <li> Boys’ rash guards </li>
                        </ul>
                    </div>
                    <div class="mmitemsRP">
                        <h3> Featured this month </h3>
                        <br>
                        <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0712_flyouts_swim_img0.jpg" alt="error">
                        <p> Fresh floral swim</p>
                    </div>
                    <div class="mmitemsRP">
                        <br>
                        <br>
                        <br>
                        <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0628_flyouts_swim_img1.jpg" alt="error">
                        <p>Vintage-inspired swim </p>
                    </div>
                </div>
            </li>
            <li> <a href="#">Cashmere </a>
                <div class="mm3RP">
                    <div class="mmitems2RP">
                        <h3> Shop Cashmere</h3>
                        <ul>
                            <li> For Women</li>
                            <li>For Men</li>
                            <li>For </li>
                            <li>For </li>
                            <li> For Baby</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li> <a href="/homepage/index.html">Home </a>
            <div class="mm1RP">
                <div class="mmitemsRP">
                    <h3> Home </h3>
                    <ul>
                        <li> Shop All</li>
                        <li> New Arrivals </li>
                        <li> Brands We Love </li>
                    </ul>
                </div>
                <div class="mmitemsRP">
                    <h3> Shop Home </h3>
                    <ul>
                        <li> Bedding & Bath</li>
                        <li> Dining & Entertainment</li>
                        <li> Candles & Fragrance</li>
                        <li> Decor & Gifts</li>
                        <li> Beauty & Wellness</li>
                        <li> Home Office & Tech</li>
                        <li> Travel & Gear</li>
                        <li> Pets </li>
                    </ul>
                </div>

                <div class="mmitemsRP">
                    <h3> Shop the latest </h3>
                    <img src="https://www.jcrew.com/brand_creative/2022/202204-Apr/flyout/2022apr_0405_flyouts_home_img0.jpg" alt="error">
                    <p> Bedding in Liberty® fabrics </p>

                </div>
                <div class="mmitemsRP">
                    <br>
                    <br>
                    <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0712_flyouts_home_img1.jpg" alt="error">
                    <p>Apotheke X J.Crew candles </p>
                </div>

            </div>
        </li>
        <li> <a href="#">Stories </a>
            <div class="mm1RP">
                <div class="mmitemsRP">
                    <img src="https://www.jcrew.com/brand_creative/interface/logo_jc_collective_sm_nav.png?imformat=generic" alt="error">
                    <h4>Meet the J.Crew Collective </h4>
                </div>
                <div class="mmitemsRP">
                    <h3> Women’s Stories </h3>
                    <ul>
                        <li> THE J.CREW COLLECTIVE</li>
                        <li> A Print Remix with Marjon Carlos</li>
                        <li> The Work Remix with Lucy Williams</li>
                        <li> COMMUNITY</li>
                        <li> Eveliina Vintage X J.Crew </li>
                    </ul>
                </div>
                <div class="mmitemsRP">
                    <h3> Men’s Stories </h3>
                    <ul>
                        <li> STYLE
                            <li> Introducing Brendon Babenzien</li>
                            <li> Suiting up with Paul Dally</li>
                            <li> Summer seafood shacks</li>
                            <li> Old Soldier X J.Crew</li>
                            <li> Source materials</li>
                            <li> Limited edition: BEAMS PLUS </li>
                    </ul>
                </div>
                <div class="mmitemsRP">
                    <h3> Bookmark these </h3>
                    <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/2022sep_0816_flyouts_stories_img2.jpg" alt="error">
                    <p> The Work Remix with Lucy Williams</p>
                </div>
                <div class="mmitemsRP">
                    <br>
                    <img src="https://www.jcrew.com/brand_creative/2022/202209-Sep/flyout/2022sep_0816_flyouts_stories_img1.jpg" alt="error">
                    <p> Suiting up with Paul Dally</p>
                </div>
            </div>
            </li>
            <li> <a href="sale.html">Sale </a>
                <div class="mm1RP">
                    <div class="mmitemsRP">
                        <h3> Sale</h3>
                        <ul>
                            <li> Shop Women's Sale</li>
                            <li> Shop Men's Sale</li>
                            <li> Shop Girls' Sale</li>
                            <li> Shop Boys' Sale </li>
                        </ul>
                    </div>
                    <div class="mmitemsRP">
                        <h3> Women</h3>
                        <ul>
                            <li> Shop All</li>
                            <li> New To Sale</li>
                            <li> Over 60% Off </li>
                        </ul>
                        <h3> Girls</h3>
                        <ul>
                            <li> Shop All </li>
                            <li> New To Sale </li>
                            <li> Over 60% Off </li>
                        </ul>
                    </div>
                    <div class="mmitemsRP">
                        <h3> Men </h3>
                        <ul>
                            <li>Shop All</li>
                            <li> New To Sale</li>
                            <li> Over 60% Off </li>
                        </ul>
                        <h3>Boys </h3>
                        <ul>
                            <li> Shop All</li>
                            <li> New To Sale</li>
                            <li> Over 60% Off </li>
                        </ul>
                    </div>
                    <div class="mmitemsRP"> </div>
                    <div class="mmitemsRP"> </div>
                </div>
            </li>
        </ul>
    </div>
    <div id="rightnavRP">
        </i> <input type="search" class="nosubmit" placeholder="Search J.Crew">
        <label for="show"> <a href="signin.html">  Sign In </a>  </label> 
       <a href="cart.html">  <i style="font-size:20px" class="fa">&#xf290;</i></a> 
        
    </div>
</div>`;

}

export default navbar;
