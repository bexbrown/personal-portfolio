import "./Profile.scss";



function Profile() {
    return (
        <section className="profile" id="profile">
            <div className="profile__container">
                <h1 className="profile__hello">Hello world!</h1>
                <div className="profile__bio">
                    <span className="profile__text--top">My name is <span className="profile__bold">Rebecca Brown.</span></span>
                    <span className="profile__text--top">I am a <span className="profile__bold">front end developer</span> with a passion for <span className="profile__bold">design.</span></span>
                </div>
                <div className="profile__img"></div>
                <span className="profile__text">I am a lover of <span className="profile__bold">learning</span> and <span className="profile__bold">developing.</span>  <span className="profile__bold">Creative</span> and <span className="profile__bold">curious</span> in providing <span className="profile__bold">efficient solutions</span> and <span className="profile__bold">seamless designs</span>.</span>
            </div>
        </section>

    )
}

export default Profile;