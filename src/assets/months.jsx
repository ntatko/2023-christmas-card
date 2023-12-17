import COOKING from './january/cooking.jpg'
import ITS_A_BROTHER from './january/its_a_brother.jpg'
import JESS_B_DAY from './january/jess_b_day.jpg'
import LAUNDRY from './january/laundry.jpg'
import MAIL from './january/mail.jpg'
import READ_W_ANDREW from './january/read_w_andrew.jpg'
import SLEEPING from './january/sleeping.jpg'
import STICKERSON from './january/stickerson.jpg'
import TUNITY from './january/tunity.jpg'

const PHOTOS = {
    JANUARY: {
        COOKING,
        ITS_A_BROTHER,
        JESS_B_DAY,
        LAUNDRY,
        MAIL,
        READ_W_ANDREW,
        SLEEPING,
        STICKERSON,
        TUNITY,
    }
}

export const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july', 
    'august',
    'september',
    'october',
    'november',
    'december',
]

const Body = ({ children }) => {
    return (
        <div style={{ width: '100%', padding: '12px 0', maxWidth: 500 }}>
            {children}
        </div>
    )
}

const Caption = ({ children }) => {
    return (
        <p style={{ marginTop: 0}}><i>{children}</i></p>
    )
}

const SizedImage = ({ src }) => {
    return (
        <img style={{ paddingTop: 32, width: '100%' }} src={src} />
    )
}

export default {
    'january': {
        'name': 'January',
        'word': 'art',
        'clue': 'rayhbtgbtgbtgbtft',
        'body': () => {
            return (
                <Body>
                    <h1>January</h1>
        
                    <p>Juliet and Noah got to spend a lot of quality time together in January while Jess worked as a human incubator. 
                        We would have been perfectly happy lounging under blankets during the cold weather, but Juliet motivated us to keep up with all the things!
                        Finding out about "baby buther" was the start of a many month name debate that went unresolved until the day of his birth. 
                        Juliet learned the 21st century struggle of voice activated speakers not understanding what people really want.
                    </p>
                    <SizedImage src={PHOTOS.JANUARY.COOKING} />
                    <Caption>"I'm makin' some bread! It's kinda like cooking!"</Caption>
                    <SizedImage src={PHOTOS.JANUARY.ITS_A_BROTHER} />
                    <Caption>"It's a baby buther!"</Caption>
                    <SizedImage src={PHOTOS.JANUARY.JESS_B_DAY} />
                    <Caption>"Happy Day, Mama! Happy Day!" 🎂</Caption>
                    <SizedImage src={PHOTOS.JANUARY.LAUNDRY} />
                    <Caption>Juliet picked up some slack around the house when she felt we were being too lazy 😅</Caption>
                    <SizedImage src={PHOTOS.JANUARY.MAIL} />
                    <Caption>A natural born coupon clipper</Caption>
                    <SizedImage src={PHOTOS.JANUARY.READ_W_ANDREW} />
                    <Caption>"In da great green room, there was a tedephone and a red abloon..."</Caption>
                    <SizedImage src={PHOTOS.JANUARY.SLEEPING} />
                    <Caption>Juliet loves to be a "take carer" for "this nice Daddy".</Caption>
                    <SizedImage src={PHOTOS.JANUARY.TUNITY} />
                    <Caption>Does it count as a first pun if she confused the word "tuna" with "opportunity"?</Caption>
                    <SizedImage src={PHOTOS.JANUARY.STICKERSON} />
                    <Caption>In Juliet's world, everything has a name and a story.</Caption>
                </Body>
            )
        }
    },
    'february': {
        'name': 'February',
        'word': 'crepe',
        'clue': 'spectre',
        'body': () => {
            return (
                <div>
                    <p>February</p>
                    <p>bath</p>
                    <p>bat</p>
                </div>
            )
        }
    },
    'march': {
        'name': 'March',
        'word': 'arch',
        'clue': 'arch',
        'body': () => {
            return (
                <div>
                    <p>March</p>
                    <p>arch</p>
                    <p>arch</p>
                </div>
            )
        }
    },
    'april': {
        'name': 'April',
        'word': 'pail',
        'clue': 'pail',
        'body': () => {
            return (
                <div>
                    <p>April</p>
                    <p>pail</p>
                    <p>pail</p>
                </div>
            )
        }
    },
    'may': {
        'name': 'May',
        'word': 'may',
        'clue': 'may',
        'body': () => {
            return (
                <div>
                    <p>May</p>
                    <p>may</p>
                    <p>may</p>
                </div>
            )
        }
    },
    'june': {
        'name': 'June',
        'word': 'june',
        'clue': 'june',
        'body': () => {
            return (
                <div>
                    <p>June</p>
                    <p>june</p>
                    <p>june</p>
                </div>
            )
        }
    },
    'july': {
        'name': 'July',
        'word': 'july',
        'clue': 'july',
        'body': () => {
            return (
                <div>
                    <p>July</p>
                    <p>july</p>
                    <p>july</p>
                </div>
            )
        }
    },
    'august': {
        'name': 'August',
        'word': 'gust',
        'clue': 'gust',
        'body': () => {
            return (
                <div>
                    <p>August</p>
                    <p>gust</p>
                    <p>gust</p>
                </div>
            )
        }
    },
    'september': {
        'name': 'September',
        'word': 'ember',
        'clue': 'ember',
        'body': () => {
            return (
                <div>
                    <p>September</p>
                    <p>ember</p>
                    <p>ember</p>
                </div>
            )
        }
    },
    'october': {
        'name': 'October',
        'word': 'cob',
        'clue': 'cob',
        'body': () => {
            return (
                <div>
                    <p>October</p>
                    <p>cob</p>
                    <p>cob</p>
                </div>
            )
        }
    },
    'november': {
        'name': 'November',
        'word': 'ember',
        'clue': 'ember',
        'body': () => {
            return (
                <div>
                    <p>November</p>
                    <p>ember</p>
                    <p>ember</p>
                </div>
            )
        }
    },
    'december': {
        'name': 'December',
        'word': 'ember',
        'clue': 'ember',
        'body': () => {
            return (
                <div>
                    <p>December</p>
                    <p>ember</p>
                    <p>ember</p>
                </div>
            )
        }
    },
}