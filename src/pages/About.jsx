function About() {
    return (
        <div className="mt-40">
            <h1 className="text-6xl mb-4">Robo Rosewater Masters</h1>
            <p className='mb-4 text-2xl font-light'>
                Magic the Gathering cards created by a recurrent neural network.
            </p>
            <p className='mb-2 text-xl font-light'>
                AI trained by <a href='https://twitter.com/CocoaMix86'><strong> @CocoaMix86</strong></a>,
                Cards posted by <a href='https://twitter.com/roborosewaterm'><strong> @RoborosewaterM</strong></a>,
                Website made by <a href=''><strong> @CapSnCrunch</strong></a>,
                Project inspired by <a href='https://twitter.com/RoboRosewater'><strong> @RoboRosewater</strong></a>
            </p>
            <p className="m-8 leading-loose text-xl font-light">
                Try generating card <em>text</em> yourself on the 
                <a href='https://discord.com/invite/EH4BTDk'><strong> discord. </strong></a>
                <br/>
                Try generating card <em>art</em> yourself with this
                <a href='https://docs.google.com/document/d/1Lu7XPRKlNhBQjcKr8k8qRzUzbBW7kzxb5Vu72GMRn2E/edit'><strong> tutorial. </strong></a>
            </p>
        </div>
    )
}

export default About
