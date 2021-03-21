import data from "../../about.json";

import fabian from "../../assets/imgs/fabian.png";
import david from "../../assets/imgs/david.png";
import yan from "../../assets/imgs/yan.png";
import gonzalo from "../../assets/imgs/gonzalo.png";

const About = () => {
  const imgs = { fabian, david, yan, gonzalo };

  // const getContributionsData = useCallback(
  //   (contributions) => ({
  //     labels: Object.keys(contributions),
  //     datasets: [
  //       {
  //         label: `Contributions to the project`,
  //         data: Object.values(contributions),
  //         backgroundColor: (chart) =>
  //           Object.values(COUNTRY_COLORS)[chart.dataIndex],
  //         borderColor: (chart) =>
  //           Object.values(COUNTRY_COLORS)[chart.dataIndex],
  //         borderWidth: 1,
  //       },
  //     ],
  //   }),
  //   []
  // );

  // const options = {
  //   legend: {
  //     display: false,
  //     labels: {
  //       fontColor: "white",
  //     },
  //   },
  //   scales: {
  //     xAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true,
  //         },
  //       },
  //     ],
  //   },
  // };

  return (
    <div className="sidebar">
      <div className="countryNameContainer">
        <h2>The Eurotransit project</h2>
      </div>
      <div className="aboutSidebarContent">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "20px",
            paddingLeft: "10px",
          }}
        >
          <h3>About us</h3>
          {data.people.map((person) => (
            <div key={person.name} className="people-container">
              <div>
                <div className="img-container">
                  <img alt="profile" src={imgs[person.image]} />
                </div>
                <div className="info-container">
                  <div className="name">{person.name}</div>
                  <a className="mail link" href={`mailto: ${person.email}`}>
                    <u>{person.email}</u>
                  </a>
                </div>
              </div>
              {/* <HorizontalBar
              data={getContributionsData(person.contributions)}
              options={options}
            /> */}
            </div>
          ))}
          <h3>About the project</h3>
          <div className="text">
            Travelling within the European Union has become a major part of
            citizen’s lives. With more and more routes and connections being
            available, it has become very easy for people to travel from and to
            different countries. Eurotransit is an interactive web application
            that visualizes this air and rail passenger data between EU
            countries. The goal of this project not only was to explore
            different correlations and relationships among states within the
            European Union in regard to travel preferences but also to display
            changes in international passenger flows over the course of the last
            couple of years.
          </div>
          <h3>Contributions</h3>
          {/* @TODO delete */}
          <div className="text">
            <ul>
              <li>
                <b>Fabian: </b>UI Design, data cleaning, front-end.
              </li>
              <li>
                <b>Yan: </b>Statistics, data cleaning, front-end.
              </li>
              <li>
                <b>David: </b>UX Design & development, data cleaning, project management, deployment.
              </li>
              <li>
                <b>Gonzalo: </b>Data cleaning, frontend, React Simple Maps.
              </li>
            </ul>
          </div>
          <h3>Demo Video</h3>
          <div className="text">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=4q7Ijjh7vIM"
            >
              Watch it on YouTube
            </a>
          </div>
          <h3>Data provenance</h3>
          <p>From Eurostat, the European Statistical Office: <br />
            <a href="https://ec.europa.eu/eurostat/web/transport/data/database">https://ec.europa.eu/eurostat/web/transport/data/database</a><br /><br /></p>
          <div className="text">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://ec.europa.eu/eurostat/estat-navtree-portlet-prod/BulkDownloadListing?file=data/avia_paocc.tsv.gz"
            >
              Air passenger transport (TSV)
            </a>
            <p>
              The first dataset that was utilized consists of data regarding transportation by air between different countries within the European Union. Overall, this dataset consists of 3128542 values. Variables include for example units of measurement, country of origin, country of destination, or different years ranging from 2020 all the way back to 1993 as well as specific countries. However, data is only available starting from 2003. Within the cells, the number of passengers is displayed.
            </p>
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://ec.europa.eu/eurostat/estat-navtree-portlet-prod/BulkDownloadListing?file=data/rail_pa_intgong.tsv.gz"
            >
              Rail passenger transport (TSV)
            </a>
            <p>
              The second dataset is quite similar to the first one, except it represents data in relation to the transportation of passengers within the European Union with trains. It consists of 9321 values; the variables include for example unit of measurement, country of origin, country of destination, or years ranging from 2019 back to 2004. The number of passengers is displayed within the cells.
            </p>
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://ec.europa.eu/eurostat/estat-navtree-portlet-prod/BulkDownloadListing?file=data/rail_pa_quartal.tsv.gz"
            >
              Rail passenger transport 2020 (TSV)
            </a>
            <p>
              The third dataset is used to complete the train trips with data for 2020 which was missing in the aforementioned. It contains 4398 rows but only a few were used for our purpose. This dataset served as a patch to have some information to show for 2020 in terms of trains but it hasn’t been the perfect match. We therefore are not able to display links between countries of origin and countries of destination for trains 2020 in the website.
            </p>
          </div>
          <h3>Achieved learning objectives</h3>
          <div className="text">
            <ul>
              <li>Finding applicable datasets.
              </li>
              <li>Cleaning, sorting, and optimizing datasets so that they can be utilized.
              </li>
              <li>Understanding user needs and designing prototypes accordingly.
              </li>
              <li>Determining distinct and appropriate ways to visualize specific data.
              </li>
              <li>Identifying and developing adequate interactions to effectively visualize large amounts of data.
              </li>
              <li>Working with React to build an interactive web application that enables users to gain a good understanding of the data at hand through visual mappings, data transformations, and view transformations.
              </li>
              <li>Utilizing and understanding the visualization pipeline and libraries.
              </li>
              <li>Taking external feedback and implementing fixes.
              </li>
            </ul>
          </div>
          <h3>Other references</h3>
          <div className="text">
            <ul>
              <li>
                Tirachini, Alejandro {"&"} Cats, Oded. 2020. COVID-19 and Public Transportation: Current Assessment, Prospects, and Research Needs. Journal of Public Transportation, 22 (1): <a href="https://doi.org/10.5038/2375-0901.22.1.1"> https://doi.org/10.5038/2375-0901.22.1.1</a>
              </li>
              <li>
                Nižetić, S. Impact of coronavirus (COVID‐19) pandemic on air transport mobility, energy, and environment: A case study. Int J Energy Res. 2020; 44: 10953– 10961. <a href="https://doi.org/10.1002/er.5706"> https://doi.org/10.1002/er.5706</a>
              </li>
              <li>
                Rich Harris, Blacki Migliozzi, and Niraj Chokshi. 2020. 13,000 missing Flights: The global consequences of THE CORONAVIRUS. Retrieved from <a href="https://www.nytimes.com/interactive/2020/02/21/business/coronavirus-airline-travel.html">The New York Times</a>.
              </li>
              <li>
                European Commission. 2018. Atlas of the Sky. Retrieved from <a href="https://ec.europa.eu/transport/modes/air/aos/aos_public.html">European Commission</a>.
              </li>
            </ul>
          </div>
          <h3>Repository</h3>
          <div className="text">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/dvcarrillo/eurotransit"
            >
              github.com/dvcarrillo/eurotransit
            </a>
          </div>
          <h3>Third party libraries</h3>
          <div className="text">
            <span>Made with </span>
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://reactjs.org/"
            >
              React.js
            </a>
            <span>, </span>
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://www.chartjs.org/docs/latest/"
            >
              Chart.js
            </a>
            <span> and </span>
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://www.react-simple-maps.io/"
            >
              React Simple Maps
            </a>
            .<span> You can fork Eurotransit on our repository above :)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
