import React, {useRef,useEffect} from "react";

function WordAnimation(){
    const animationDelay = 2500;
    const barAnimationDelay = 3800;
    const barWaiting = barAnimationDelay - 3000;
    const lettersDelay = 50;
    const typeLettersDelay = 150;
    const selectionDuration = 500;
    const typeAnimationDelay = selectionDuration + 800;
    const revealDuration = 600;
    const revealAnimationDelay = 1500;

    const headlineRef = useRef(null);

    useEffect(() => {
        const animateHeadline = (headlines) => {
            let duration = animationDelay;
            headlines.forEach((headline) => {
                if (headline.classList.contains('loading-bar')) {
                    duration = barAnimationDelay;
                    setTimeout(() => {
                        headline.querySelector('.cd-words-wrapper').classList.add('is-loading');
                    }, barWaiting);
                } else if (headline.classList.contains('clip')) {
                    const spanWrapper = headline.querySelector('.cd-words-wrapper');
                    const newWidth = spanWrapper.offsetWidth + 10;
                    spanWrapper.style.width = `${newWidth}px`;
                } else if (!headline.classList.contains('type')) {
                    const words = headline.querySelectorAll('.cd-words-wrapper b');
                    let width = 0;
                    words.forEach((word) => {
                        const wordWidth = word.offsetWidth;
                        if (wordWidth > width) width = wordWidth;
                    });
                    headline.querySelector('.cd-words-wrapper').style.width = `${width}px`;
                }

                setTimeout(() => {
                    hideWord(headline.querySelector('.is-visible'));
                }, duration);
            });
        };

        const hideWord = (word) => {
            const nextWord = takeNext(word);

            if (word.closest('.cd-headline').classList.contains('type')) {
                const parentSpan = word.parentElement;
                parentSpan.classList.add('selected');
                parentSpan.classList.remove('waiting');
                setTimeout(() => {
                    parentSpan.classList.remove('selected');
                    word.classList.remove('is-visible');
                    word.classList.add('is-hidden');
                    word.querySelector('i').classList.remove('in');
                    word.querySelector('i').classList.add('out');
                }, selectionDuration);
                setTimeout(() => {
                    showWord(nextWord, typeLettersDelay);
                }, typeAnimationDelay);
            } else if (word.closest('.cd-headline').classList.contains('letters')) {
                const bool = word.querySelectorAll('i').length >= nextWord.querySelectorAll('i').length;
                hideLetter(word.querySelector('i'), word, bool, lettersDelay);
                showLetter(nextWord.querySelector('i'), nextWord, bool, lettersDelay);
            } else if (word.closest('.cd-headline').classList.contains('clip')) {
                const wordsWrapper = word.closest('.cd-words-wrapper');
                wordsWrapper.animate({ width: '2px' }, revealDuration, () => {
                    switchWord(word, nextWord);
                    showWord(nextWord);
                });
            } else if (word.closest('.cd-headline').classList.contains('loading-bar')) {
                word.closest('.cd-words-wrapper').classList.remove('is-loading');
                switchWord(word, nextWord);
                setTimeout(() => {
                    hideWord(nextWord);
                }, barAnimationDelay);
                setTimeout(() => {
                    word.closest('.cd-words-wrapper').classList.add('is-loading');
                }, barWaiting);
            } else {
                switchWord(word, nextWord);
                setTimeout(() => {
                    hideWord(nextWord);
                }, animationDelay);
            }
        };

        const showWord = (word, duration) => {
            if (word.closest('.cd-headline').classList.contains('type')) {
                showLetter(word.querySelector('i'), word, false, duration);
                word.classList.add('is-visible');
                word.classList.remove('is-hidden');
            } else if (word.closest('.cd-headline').classList.contains('clip')) {
                const wordsWrapper = word.closest('.cd-words-wrapper');
                const newWidth = word.offsetWidth + 10;
                wordsWrapper.animate({ width: `${newWidth}px` }, revealDuration, () => {
                    setTimeout(() => {
                        hideWord(word);
                    }, revealAnimationDelay);
                });
            }
        };

        const hideLetter = ($letter, $word, $bool, $duration) => {
            $letter.classList.remove('in');
            $letter.classList.add('out');

            if (!$letter.is(':last-child')) {
                setTimeout(() => {
                    hideLetter($letter.nextElementSibling, $word, $bool, $duration);
                }, $duration);
            } else if ($bool) {
                setTimeout(() => {
                    hideWord(takeNext($word));
                }, animationDelay);
            }

            if ($letter.is(':last-child') && !document.documentElement.classList.contains('no-csstransitions')) {
                const nextWord = takeNext($word);
                switchWord($word, nextWord);
            }
        };

        const showLetter = ($letter, $word, $bool, $duration) => {
            $letter.classList.add('in');
            $letter.classList.remove('out');

            if (!$letter.is(':last-child')) {
                setTimeout(() => {
                    showLetter($letter.nextElementSibling, $word, $bool, $duration);
                }, $duration);
            } else {
                if ($word.closest('.cd-headline').classList.contains('type')) {
                    setTimeout(() => {
                        $word.closest('.cd-words-wrapper').classList.add('waiting');
                    }, 200);
                }
                if (!$bool) {
                    setTimeout(() => {
                        hideWord($word);
                    }, animationDelay);
                }
            }
        };

        const takeNext = ($word) => {
            return !$word.is(':last-child') ? $word.nextElementSibling : $word.parentElement.children[0];
        };

        const switchWord = ($oldWord, $newWord) => {
            $oldWord.classList.remove('is-visible');
            $oldWord.classList.add('is-hidden');
            $newWord.classList.remove('is-hidden');
            $newWord.classList.add('is-visible');
        };

        const headlines = Array.from(headlineRef.current.querySelectorAll('.cd-headline'));
        animateHeadline(headlines);
    }, []);
    return(
        <>
            <h1 className="title">
                We Help You Write
                <br />
                <span className="header-caption">
                        <span ref={headlineRef} className="cd-headline clip is-full-width">
                          <span className="cd-words-wrapper">
                            <b className="is-visible theme-gradient">Blogs.</b>
                            <b className="is-hidden theme-gradient">Books.</b>
                            <b className="is-hidden theme-gradient">
                              Articles.
                            </b>
                            <b className="is-hidden theme-gradient">
                              Guest Blog Posts.
                            </b>
                            <b className="is-hidden theme-gradient">
                              Website Contents.
                            </b>
                            <b className="is-hidden theme-gradient">
                              Email Campaigns.
                            </b>
                            <b className="is-hidden theme-gradient">
                              Social Media Posts.
                            </b>
                          </span>
                        </span>
                      </span>
            </h1>
        </>
    )
}
export default WordAnimation