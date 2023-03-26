import React from "react";
import Main from "../inc/main";
import Listgrp from "../inc/listgrp";
import Card from "../inc/card";
import Blog from "../inc/blog";
import Testimonilas from "../inc/testimonials";

function Home() {
  return (
    <div>
     
      <Main/>
      <Card />
      <Blog />
      <Listgrp 
        subheading1="1. It's much riskier"
        subheading2="2. Win big or lose all"
        subheading3="3. Hold for the long term"
        text1="Never invest more than you can afford to lose. Startups are hard. Even the best founders fail."
        text2="Startups win big or go bankrupt. Consider investing in them more like socially-good lottery tickets."
        text3="When it works, it takes a long time to earn a return. Expect to hold for years."
      />
      <Listgrp 
        subheading1="4. Build the future"
        subheading2="5. There are often perks"
        subheading3="6. Hold for the long term"
        text1="Your money goes to the company to help create jobs, build products, and grow companies."
        text2="Investors often get perks like VIP access to new products or discounts."
        text3="You can offer more than money. The best angel investors help the companies they invest in to succeed."
      />
      
      <Testimonilas 
        cardtitle="Dhruv Rastogi"
        cardbody="Comparing it to other platforms I've used and even
                      investments that have come from personal recommendations,
                      I can state without reservation that it's one of the
                      greatest venture investing platforms out there."
        cardfooter="1 month ago"
      />
    </div>
  );
}

export default Home;
