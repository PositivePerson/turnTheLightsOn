import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import ParticleEffectButton from 'react-particle-effect-button';

const Seconds = styled.div`
    color: white;
    font-size: 2em;
    font-weight: 600;
    display: inline-flex;
    position: relative;

    margin-bottom: .4em;
`;

const Ms = styled.div`
    font-size: .5em;
    font-weight: 400;
    position: absolute;
    bottom: .3em;
    right: -1.5em;
`;

const ScoreBox = (props) => {
    const [hidden, setHidden] = useState(false);


    // const duration = 2250;
    const duration = 500;

    const firstRender = useRef(null);
    firstRender.current = true;
    useEffect(() => {
        //     const destroyedScoreBoxElements = () => {
        //         return new Promise(resolve => {
        //             if(props.destroyed) resolve('Score Box has been just destroyed');
        //         })
        // }
        firstRender.current ? (firstRender.current = !firstRender.current) : console.log("po useref");;
        console.log("asyncMoveAboutMeUp() tutaj");
        // asyncMoveAboutMeUp();

    }, [props.destroyed])

    function movedUpAboutMe() {
        return new Promise(resolve => {
            document.querySelector(".me").addEventListener('transitionend', () => {
                resolve('ended moving \'about me\'');
            })
        });
    }

    async function asyncMoveAboutMeUp() {
        document.getElementsByClassName("me")[0].style.setProperty('top', '40%');
        console.log('start moving \'about me\'');
        var x = await movedUpAboutMe();
        console.log(x);
    }

    const destroyScoreBox = async (props) => {

        function buttonDisappeared() {
            return new Promise(resolve => {
                document.querySelector(".a").addEventListener('transitionend', () => {
                    resolve('score buttons disappeared');
                })
            });
        }

        async function asynButtonRemove() {
            var y = await buttonDisappeared();
            console.log(y);
        }

        setHidden(true);

        async function remove_and_shuffle() {
            // await props.setDestroyed(true);
            document.getElementsByClassName("endCredits")[0].style.setProperty('display', 'none');
            console.log(document.getElementsByClassName("endCredits"));
            // asyncMoveAboutMeUp();
            document.getElementsByClassName("me")[0].style.setProperty('top', '40%');
        }

        await setTimeout(() => {
            remove_and_shuffle();
            // }, 2250);
        }, 1000);

        await setTimeout(() => { console.log("waiting"); }, 1000);

        // await asynButtonRemove();
        // props.setDestroyed(true);
        // await asyncMoveAboutMeUp();
        console.log('the end of \'Puff\' animations');

        //         document.getElementsByClassName("me")[0].style.setProperty('top', '40%');
        // async () => setTimeout(() => {
        //     // document.getElementsByClassName("me")[0].style.top = "40%";
        //     // document.getElementsByClassName("me")[0].style.setProperty('top', '40%');
        //     return () => {
        //         document.getElementsByClassName("me")[0].style.setProperty('top', '40%');
        //     };
        // }, 1000)
        // .then(() => props.setDestroyed(true)).then(console.log('yay'));
    }

    // useEffect(() => {
    //     if (props.destroyed) asyncMoveAboutMeUp();
    // }, [props.destroyed])

    return (
        <div>
            <ParticleEffectButton color='whitesmoke' type='rectangle' direction='right' hidden={hidden} duration={duration} >
                <Seconds className="b">{props.time}<Ms>ms</Ms></Seconds>
            </ParticleEffectButton>
            <div>
                <ParticleEffectButton color='whitesmoke' type='rectangle' direction='right' hidden={hidden} duration={duration} >
                    <button className="a waves-effect waves-light btn-small mx-1" style={constWidth} type="submit" name="action" onClick={() => props.startGame()}>Play again</button>
                </ParticleEffectButton>
                <ParticleEffectButton color='whitesmoke' type='rectangle' direction='right' hidden={hidden} duration={duration}>
                    <button className="a waves-effect waves-light btn-small mx-1" style={constWidth} type="submit" name="action" onClick={() => destroyScoreBox(props)}>Puff it</button>
                </ParticleEffectButton>
            </div>
        </div >
    )
}

const constWidth = {
    width: "8.5em"
}

export default ScoreBox
