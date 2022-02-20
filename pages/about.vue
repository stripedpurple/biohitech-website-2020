<template>
  <div>
    <!-- HERO -->
    <section class="hero is-info is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="subtitle">BioHiTech</h1>
          <h2 class="title is-size-1-desktop">About Us</h2>

        </div>
      </div>
    </section>

    <section class="section has-background-light">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p class="title">Combining technology solutions with traditional services to create a zero-landfill
              environment</p>
            <p>At BioHiTech Global, we are working to change the future of the waste management services industry by
              creating a technology-driven services company to cost-effectively reduce the environmental impact of waste
              disposal. Our suite of products and services can be used individually or combined to help reduce waste
              generation, virtually eliminate landfill usage, and create a valuable renewable fuel.</p>

            <p>Our technology products and services include food waste digesters, data analytics tools, traditional
              disposal services and sophisticated facilities for processing municipal solid waste. Our customers include
              The Federal Government, Fortune 100 companies, regional grocery chains as well as numerous food service
              and hospitality companies.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-full has-text-centered">
            <h2 class="title">Leadership</h2>
            <br>
          </div>
          <div class="column">
            <h3 class="title has-text-info is-size-4">FRANK E. CELLI</h3>
            <h4 class="subtitle is-size-5 is-normal">Chief Executive Officer</h4>
            <p class="is-size-6">Mr. Celli is a lifelong waste industry veteran. Most recently he was co-founder and CEO
              of Interstate
              Waste Services from October 2000 until November 2006, during which time the company achieved growth of
              over $150 million in revenue. Mr. Celli has leveraged his knowledge of the traditional waste industry to
              facilitate the development of the Eco-Safe Digester and BioHiTech Cloud to begin the transformation of the
              organic waste industry.</p>
          </div>

          <div class="column">
            <h3 class="title has-text-info is-size-4">ROBERT A. JOYCE</h3>
            <h4 class="subtitle is-size-5 is-normal">President</h4>
            <p class="is-size-6">Bob has spent the last 30 years in the technology and engineering workplace. His
              diverse background
              includes design and development of one of the original 3D CAD systems, implementation support of some of
              the worlds largest cable networks, development of patent pending mobile location technologies and
              leadership of Inc 500 listed private companies. Previous employment includes industry leaders Arthur D.
              Little, Inc., Sun Microsystems, Perfect Order and Versatile Systems.</p>
          </div>

          <div class="column">
            <h3 class="title has-text-info is-size-4">BRIAN C. ESSMAN</h3>
            <h4 class="subtitle is-size-5 is-normal">Chief Financial Officer</h4>
            <p class="is-size-6">Mr. Essman has over 30 years of experience as a senior financial executive with a wide
              range of industry
              experiences that have included strategic, operational and financial leadership roles. Most recently, he
              was the CEO of Data Communiqué, Inc. a Havas Company from 1997-2014, where he was responsible for overall
              leadership, including strategy and tactics of the Software-as-a-Service company.</p>
          </div>
        </div>
      </div>
      <div class="container">`
        <div class="columns is-desktop is-multiline">
          <div class="column is-full">
            <h2 class="title">Board of Directors
            </h2>
            <b-tabs v-model="activeTab">
              <b-tab-item :label="tab.label" v-for="(tab, key) in bod" :key="key">
                <div class="content" v-html="tab.content"></div>
              </b-tab-item>
            </b-tabs>
          </div>
        </div>
      </div>
    </section>
    <meta-tags title="About Us" description="At BioHiTech Global, we are working to change the future of the waste management services industry by creating a technology-driven services company to..."/>
  </div>
</template>

<script>
  export default {
    name: "faq",
    data() {
      return {
        bod: [
          {
            label: "Frank E. Celli",
            content: `<p><em>Chairman, Chief Executive Officer</em></p><p>Mr. Celli is a lifelong waste industry veteran. Most recently he was co-founder and CEO of Interstate Waste Services from October 2000 until November 2006, during which time the company achieved growth of over $150 million in revenue. During his time at Interstate Waste he was responsible for all aspects of the business including collection, recycling, landfills and emerging technologies.</p><p>After selling his interests in Interstate Waste he transitioned to BioHiTech America. With over 25 years of Waste Industry experience, Mr. Celli has leveraged his knowledge of the traditional waste industry to facilitate the development of the Eco-Safe Digester and BioHiTech Cloud to begin the transformation of the organic waste industry.</p><p>He also serves as a director and officer of Entsorga West Virginia, the first resource recovery facility currently being constructed in the United States that will utilize Entsorga’s proprietary HEBioT mechanical biological treatment (“MBT”) system. Mr. Celli graduated from Pace University’s Lubin School of Business.</p><ul><li><a href="http://investors.BioHiTechglobal.com/board-committees?item=9" target="_blank" rel="noopener">Board</a></li></ul>`
          }, {
            label: "James Chambers",
            content: `<p>A policy-level senior executive with more than 30 years’ experience in diverse industries, functions, and geographic locations, with a proven track record in challenging environments requiring innovation, analytical problem solving, and leadership skills</p><p>Served as President of Business Services, Senior Vice President of Marketing and Business Development, and Vice President of Administration at Quest Diagnostics, Inc.</p><p>Held several executive positions in the US and abroad at Corning Incorporated</p><p>Serves on the board of Summer Street portfolio companies Willcare, Apple Valley Waste, and Curtis Bay Energy, as well as numerous for profit and not-for-profit organizations, including Dickinson College and Western Reserve Academy.</p><p>Earned his BA at Dickinson College in History and Political Science, and his MBA in Finance at Southern Methodist University, as well as a Masters in International Management from the Thunderbird School of International Management.</p><p>&nbsp;</p><ul><li><a href="http://investors.BioHiTechglobal.com/board-committees?item=9" target="_blank" rel="noopener">Board</a></li><li><a href="http://investors.BioHiTechglobal.com/board-committees?item=5" target="_blank" rel="noopener">Compensation Committee</a></li><li><a href="http://investors.BioHiTechglobal.com/board-committees?item=6" target="_blank" rel="noopener">Nominating and Governance Committee</a></li></ul>`
          }, {
            label: "Anthony Fuller",
            content: `<p>Mr. Fuller recently completed a thirty-year career at Walmart where he last held the position of Senior Vice President. &nbsp;During that tenure, he also served as one of twelve executives on the Walmart’s Global Sustainability Steering Committee providing direction for the company’s sustainability efforts.</p><p>Mr. Fuller’s distinguished service at Walmart spanned over three decades culminating with his role as Senior Vice President. &nbsp;For over 20 years, he led the teams which provided both property management and maintenance for Walmart’s global portfolio. During that time Walmart’s portfolio grew from under 1000 stores in 20 states in the United States, to over 10,000 stores in all fifty states, and 23 countries around the world with capital investment reaching $2 billion per year. Mr. Fuller served as the chairman of the real estate transaction committee and real estate finance committee and led the development of over 100 distribution centers ranging in size from 250,000 to 4 million square feet. &nbsp;He successfully led the creation of an in-house REIT structure for a portfolio in excess of 500 million square feet, resulting in significant cost savings. Mr. Fuller chaired the REIT governance committee for over 15 years, dealing with all aspects of compliance and corporate governance. &nbsp;He also led the restructure of Walmart’s indirect procurement efforts, managing a team responsible for dispersing more than $2 billion per year for items as diverse as supplies and structural steel.</p><p>Beginning in 2008, Mr. Fuller has served as a member of the Board of Advisors of Global Healthcare Capital, a leading healthcare investor and asset manager for opportunities in the US, Europe, Asia and Australia. He also served on the Executive Committee and Board of Directors of REAP (Real Estate Associate Program), an organization opening opportunities for minorities in commercial real estate. Mr. Fuller received his BS in Agricultural Economics from Arkansas State University and his JD from the University of Arkansas.</p><ul><li><p><a href="http://investors.BioHiTechglobal.com/board-committees?item=9" target="_blank" rel="noopener">Board</a></li><li><p><a href="http://investors.BioHiTechglobal.com/board-committees?item=1" target="_blank" rel="noopener">Audit Committee</a></li><li><a href="http://investors.BioHiTechglobal.com/board-committees?item=6" target="_blank" rel="noopener">Nominating and Governance Committee</a></li></ul>`
          }, {
            label: "Bob Graham",
            content: `<p>Mr. Graham is a Managing Director of the Management Company of Penn Venture Partners, L.P. He currently serves on the Board of Directors of CyberPatrol, Inc. Mr. Graham has over 25 years of operational and financial executive management experience including extensive experience in the acquisitions and sales of companies.</p><p>Before joining Penn Ventures, he was President of RG Consulting, a financial and management consulting company. Prior to RG Consulting, Mr. Graham spent eight years as President and Chief Executive Officer of Dorland Healthcare Information. He also served as the Executive Vice-President and Chief Financial Officer of Broadreach Consulting and was Vice President of Finance and Chief Operating Officer of Legal Communications, Ltd.</p><p>He received his Masters of Business Administration with a concentration in Finance from Saint Joseph’s University and a B.A. from LaSalle University.</p><ul><li><a href="http://investors.BioHiTechglobal.com/board-committees?item=9" target="_blank" rel="noopener">Board</a></li><li><a href="http://investors.BioHiTechglobal.com/board-committees?item=1" target="_blank" rel="noopener">Audit Committee</a></li><li><a href="http://investors.BioHiTechglobal.com/board-committees?item=5" target="_blank" rel="noopener">Compensation Committee</a></li><li><a href="http://investors.BioHiTechglobal.com/board-committees?item=6" target="_blank" rel="noopener">Nominating and Governance Committee</a></li></ul>`
          }, {
            label: "Harriet Hentges",
            content: `<p>Harriet Hentges&nbsp;has exceptional international and senior management experience in both public and private sectors. She is President of Hentges Associates, an advisory firm on sustainability and corporate responsibility. She was a principal in Hentges Kahn &amp; Strauss (HKS) LLC, a consulting practice for food producers, manufactures and grocery retailers aimed at fostering a more sustainable food system. HKS partnered with “Supermarket Guru” Phil Lempert to create THE FOOD JOURNAL, a bi-weekly, in-depth look at critical issues for agriculture and the food industry, providing balanced information and commentary.</p><p>Her role in three major retailers arms her with skills and perspectives essential to strategy development and implementation. She has held key posts at all three — Sears Roebuck, Wal-Mart and Ahold USA. At Sears World Trade, she created the Planning and Research capability for the start up company. She joined Wal-Mart at the launch of its sustainability strategy as Senior Director, Stakeholder Engagement. At Ahold USA, she was Vice President of Corporate Responsibility and Sustainability where she drafted and directed the sustainability strategy and led the U.S. effort to meet the global corporate responsibility targets of the parent company, Royal Ahold.</p><p>Harriet&nbsp;has also played a prominent role in sustainability in the food industry as a member of the Food Marketing Institute’s Sustainability Executive Committee, where she chaired the Education and Communication Committee.</p><p>Harriet’s diverse and unique experience working across sectors in various organizations to solve problems led to her focus on corporate responsibility. It has enabled her to help clients integrate business and sustainability goals and to develop public-private partnerships to extend the reach of their organizations.</p><p>Earlier,&nbsp;Harriet&nbsp;was chief operating officer of the U.S. Institute of Peace, an independent Federal agency specializing in international conflict resolution where she created post-conflict stabilization programs in the Balkans, Rwanda, Afghanistan and Iraq. She also served as COO of a financial services firm and of a national grass roots organization, the U.S. League of Women Voters. She has worked with non-profit organizations all over the world. Her government service includes the U.S. Special Trade Representative’s Office and the U.S. Department State Policy Planning Staff.</p><p>She holds a doctorate in international economics and is adjunct professor at Georgetown University, teaching a graduate course in corporate responsibility and sustainability.</p><ul><li><a href="http://investors.BioHiTechglobal.com/board-committees?item=9" target="_blank" rel="noopener">Board</a></li><li><a href="http://investors.BioHiTechglobal.com/board-committees?item=5" target="_blank" rel="noopener">Compensation Committee</a></li><li><a href="http://investors.BioHiTechglobal.com/board-committees?item=6" target="_blank" rel="noopener">Nominating and Governance Committee</a></li></ul>`
          }, {
            label: "Walter Littlejohn lll",
            content: `<p>Mr. Littlejohn has over 29 year’s experience in the travel industry and currently serves as Senior Vice President &amp; Managing Director of Crystal River Cruises, a division of Genting Hong Kong Limited that offers luxury river cruise experiences in the heart of Europe.</p><p>Over the course of his distinguished career, Mr. Littlejohn has served in key executive roles for companies including Expedia and Carnival Cruise Lines, where his responsibilities ranged from brand marketing to revenue line and sales group management. At Expedia, he served as Senior Revenue Manager and North America Telesales manager where he was tasked with providing strategic direction in revenue development for cruise on the Expedia.com website as well as developing and optimizing B2C telesales strategies for eight global call centers that supported the Expedia Affiliate Network. As a Regional Sales Manager for Carnival Cruise Lines, he managed sales for a network of over 1,000 independent travel agents.</p><p>Mr. Littlejohn graduated with a B.S. in Economics from the University of Pennsylvania’s Wharton School of Business.</p>`
          }, {
            label: "Nicholaus Rohleder",
            content: `<p>Mr. Rohleder is the Co Founder and Environmental Technology Portfolio Manager at New American </p><p>Energy. Mr. Rohleder is responsible for the implementation of the firm’s pure play alternative energy and sustainability strategy. In addition to his role at New American Energy, Mr. Rohleder serves as a Senior Advisor at Ardour Capital Investments, an alternative energy and clean technology investment bank. Prior to this, Mr. Rohleder served as the Chief Operating Officer of Merit Holdings Group, an ESG and sustainability focused private investment platform. At Merit, Mr. Rohleder was responsible for risk management and operations across all verticals. Mr. Rohleder began his career at Dwight Capital, a diversified financial services firm encompassing private debt, private equity, a fixed income fund, and an asset based lender.</p><p></p><p>Mr. Rohleder is regularly quoted media outlets such as Forbes, Hedge Fund Monthly, and Energy Trend for commentary on global energy and financial markets. Mr. Rohleder is activelyinvolved with the Earth Institute at Columbia University, The Columbia Center on Global Energy Policy, and The Columbia/Penn Club of New York City, The Tulsa Chamber of Commerce, and Sustainable Tulsa.</p><p></p><p>Mr. Rohleder graduated Summa Cum Laude and Phi Beta Kappa from the University of Oklahoma with degrees in Economics and Political Science. Mr. Rohleder received his Master of Science in Sustainability Management degree from Columbia University with a focus in Environmental Business and Environmental Economics.</p>`
          }, {
            label: "Douglas M. VanOort",
            content: `<p><em>Chairman of the Board of Directors and Chief Executive Officer</em></p><p>Mr. VanOort has served as the Chairman of the Board and Chief Executive Officer of NeoGenomics since October 28, 2009. Prior to that he served as Chairman of the Board, Executive Chairman and Interim Chief Executive Officer from March 2009 to October 2009. He has been an Operating Partner with Summer Street Capital Partners since 2004 and a Founding Partner of Conundrum Capital Partners since 2000. From 1995 to 1999, he served as the Senior Vice President Operations for Quest Diagnostics, Incorporated. During this period Quest Diagnostics grew to approximately $1.5 billion in annual revenues through both organic growth and mergers and acquisitions. From 1982 to 1995, Mr. VanOort served in various positions at Corning Incorporated and ultimately held the position of Executive Vice President and CFO of Corning Life Sciences, Inc. In 1995, Corning Incorporated spun off Corning Life Sciences, Inc. into two companies, Quest Diagnostics and Covance, Inc. Mr. VanOort serves as a member of the board of directors of several privately held companies. In addition, since 2000, Mr. VanOort is the Co-Owner of Vision Ace Hardware, LLC, a retail hardware chain. Mr. VanOort is a graduate of Bentley University.</p><ul><li><a href="http://investors.BioHiTechglobal.com/board-committees?item=9" target="_blank" rel="noopener">Board</a></li><li><p><a href="http://investors.BioHiTechglobal.com/board-committees?item=1" target="_blank" rel="noopener">Audit Committee</a></li></ul>`
          },
        ],
        activeTab: 0,
      }
    }
  }
</script>

<style scoped>

</style>
