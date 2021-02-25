import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const style = {
  background: "rgba(0,0,0,0.5)",
};

export default class About extends React.Component {
  render() {
    return (
      <Container id="about">
        <h1>About / Bio</h1>
        <Row className="show-grid" style={style}>
          <Col xs={12} sm={6}>
            <h3>Where it all started...</h3>
            <h5>
              <p>
                It all started in the tiny Munford, 40 minutes north of Memphis,
                Paluso played music with his older brother Keegan, who remains a
                partner in sonic crime to this day.
              </p>
              <p>
                Keith is a natural resource manager in Germantown, Tennessee,
                which means he oversees 29 nearby parks and all their park
                rangers. Keith and his wife used to live in a state park and
                worked as animal rehabilitators. When he's not roaming the
                woods, Keith is singing and playing music. He has always loved
                music, but he put his dreams on the back burner to take a more
                sensible route. After he and his wife, Bethany, welcomed their
                son, Keith decided he wanted to be an example of someone who
                goes after his dreams. So, while on paternity leave, he dusted
                off his old guitars and started playing again. Keith is now
                chasing his childhood dreams on "The Voice."
              </p>
              <p>
                Paluso’s education and his work as a park ranger, environmental
                educator and wildlife rehabilitator bring a special meaning to
                the 30-year-old’s relationship with Breedlove. He is, not
                surprisingly, a big fan of the brand’s commitment to bringing
                greater sustainability to guitars made and designed in Bend.
                “That philosophy is actually one of the main things that I’ve
                been talking about when people ask about Breedlove Guitars. Our
                natural systems are so much more delicate than you would think.
                Those ecological communities almost have their own language.
                They’re so different everywhere you go. There’s so much more
                going on in any one spot than you might normally think. It’s a
                constant struggle.”
              </p>
              <p>
                There’s usually not a guitar in his hands when he’s leading the
                Grammy Award-winning brass band, but Paluso played a
                cedar-topped Breedlove Pursuit Concert CE throughout his Voice
                appearances, as well as on solo dates and work with the
                inspiring Wolf River Gospel project he shares with Keegan.
                Paluso, who knows his way around an instrument enough to have
                created his own “Frankenstrat,” chose a Breedlove for one simple
                reason—the sound.
              </p>
              <p>
                By day, Keith Paluso is in the woods, keeping tabs on minks,
                short-eared owls and spider lilies. By night, he’s onstage with
                Blood, Sweat and Tears, belting out eternal AM radio classics
                like “You’ve Made Me So Very Happy,” “And When I Die” and
                “Spinning Wheel.”
              </p>
              
            </h5>
          </Col>
          <Col xs={12} sm={6}>
            <h3>Where that took me...</h3>
            <h5>
              <p>
                After graduating college, I was determined to finally release
                some form of music on a physical medium, you know; something
                other than just a few songs on a myspace. The switch to acoustic
                stuff may have come as a shock to some, as I dove pretty deep
                into the depths of heavy rock and metal during my late teens.
                Without a serious band together, it just felt right to play
                create and atleast attempt to put out something meaningful.
              </p>
              <p>
                Leaving all of my older material at the door -- I worked on
                writing acoustic specific tracks that could be expanded upon. I
                continued to play a good deal of open mics, small acoustic
                shows, and slowly built a 5 track EP -- that I stupidly named
                Runaway. The album was recorded with Jayson Whitmore @ Penumbra
                Recordings. It was just the two of us for most of the sessions.
                I vividly remember how very humbling it also how unsure I was of
                many textures and bass lines. Much of the instrumentals were
                improvisation -- which was possible thanks to the patience of
                the engineer and my infinite stubborn-ness. Although I wish I
                had a drummer and a full band - I contined to try to positively
                make music that I could support solo and enjoyed playing.
              </p>
              <p>
                Despite the insanity, the call, in May, from BS&T management,
                asking if he wanted to fill the big shoes of not only the
                legendary David Clayton-Thomas, but also American Idol runner-up
                Bo Bice, who held the band’s vocal chair from 2013–2018, was
                pretty easy for Paluso to answer. The conclusion would keep
                coming to, was that; I love making music. I told myself if I
                can't find other like minded people to make music with, I would
                continue to play and write music solo. Easier said than done!
              </p>
              <p>
                The 2017 birth of Paluso’s son led to a new outlook, with the
                singer using the life landmark as a reason to pursue dormant
                dreams, eventually becoming a true contender on season 15 of
                NBC’s singing competition The Voice. “Realizing that I didn’t
                want to be an example to him of somebody that just settled, I
                started playing again. Within six months, I was on The Voice,
                quit Tennessee State Parks, moved back to Memphis and then,
                within the next six months, went on tour with Blood, Sweat &
                Tears. We’re just now starting to feel a sense of normalcy. The
                past two years have been so, so wild. It’s been great. You learn
                a lot when things are that crazy. You kind of learn what
                motivates you and what your purpose is.”
              </p>
            </h5>
          </Col>
        </Row>
      </Container>
    );
  }
}
