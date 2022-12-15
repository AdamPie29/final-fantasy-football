import "./AboutPage.scss";

function AboutPage () {

    return (
        <div className="about">
            <div className="about-con">
               <h1 className="about-con__title">ABOUT</h1> 
            </div>
            <div className="about-info">
                <p className="about-info__text">This app was built out of a passion for football.</p>
                <p className="about-info__text">Specifically, the competitive spirit that comes with playing fantasy football.</p>
                <p className="about-info__text">Create an account, browse and compare your favorite players,</p>
                <p className="about-info__text">and create unlimited fantasy football teams with no restrictions!</p>
            </div>
            <div className="about-info2">
                <p className="about-info2__text">And I mean no restrictions! Make a team of 6 Quarterbacks if you'd like.</p>
                <p className="about-info2__text">Have fun being creative and saving your teams.</p>
                <p className="about-info2__text">And when you're ready...</p>
                <p className="about-info2__text">Challenge your teams in Season Mode.</p>
                <p className="about-info2__text">See if you really are the legendary Coach you think you are!</p>
            </div>
        </div>
    )
}

export default AboutPage;