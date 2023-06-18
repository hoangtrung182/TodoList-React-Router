const About = () => {
    return (
        <div className="app">
            <div className="container">
                <a href="/" className="btn-back">Back</a>
                <h1 style={{color: '#fff', textAlign: 'center', margin: '20px'}}>About me</h1>
                <div className="main">
                    <div className="avatar">
                        <img src="https://picsum.photos/350/400" className="avatar"/>
                    </div>
                    <div className="info">
                        <h2>Hoang Viet Trung</h2>
                        <span>Web developer</span>
                        <p>Description: Im an extrovert. I love to talk. I can tell anyone about almost anything. I am eager to meet new friends and learn everything about them. I am enthusiastic, social, and assertive. I often participate in activities with a lot of people like parties, community activities and I like that. I’m a pretty open-minded person. I can easily communicate with others. However, I am a bit shy about communicating with introverts because we are completely opposite. People often say that Im a “clown”. I find this quite true because I often make jokes that make people happier.I’ve always tried to fix this.</p>
                        <div className="hobby">
                            Hobby: Play football, play games, sometime ride a bycle
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;