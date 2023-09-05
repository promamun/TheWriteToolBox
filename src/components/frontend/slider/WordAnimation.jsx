import React, { useEffect, useState} from "react";

function WordAnimation(){
    const words = ['Blogs.', 'Books.', 'Articles.', 'Guest Blog Posts.', 'Website Contents.', 'Email Campaigns.', 'Social Media Posts.'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Change the word every 2 seconds (adjust as needed)

        return () => clearTimeout(timeout);
    }, [currentWordIndex]);
    return(
        <>
            <h1 className="title">
                We Help You Write
                <br />
                <span className="header-caption">
                    <span className="cd-headline clip is-full-width">
                      <span className="cd-words-wrapper">
                        {words.map((word, index) => (
                            <b
                                key={index}
                                className={`theme-gradient ${index === currentWordIndex ? 'is-visible' : 'is-hidden'}`}
                            >
                                {word}
                            </b>
                        ))}
                      </span>
                    </span>
                </span>
            </h1>
        </>
    )
}
export default WordAnimation