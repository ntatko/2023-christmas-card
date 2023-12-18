import COOKING from './january/cooking.jpg'
import ITS_A_BROTHER from './january/its_a_brother.jpg'
import JESS_B_DAY from './january/jess_b_day.jpg'
import LAUNDRY from './january/laundry.jpg'
import MAIL from './january/mail.jpg'
import READ_W_ANDREW from './january/read_w_andrew.jpg'
import SLEEPING from './january/sleeping.jpg'
import STICKERSON from './january/stickerson.jpg'
import TUNITY from './january/tunity.jpg'
import POGRAMMIN from './february/pogrammin.jpg'
import DRESSER from './february/Dresser.jpg'
import HIDING from './february/Hiding.jpg'
import GAZEBO from './february/Gazebo.jpg'
import BOXDINNER from './february/BoxDinner.jpg'
import PILLOWHOP from './february/PillowHop.jpg'
import BUDDLTS from './february/Buddlts.jpg'
import READING from './february/Reading.jpg'
import ALTON_ROOM_GIF from './march/alton_room_gif.gif'
import ALTON_TRAINS from './march/alton_trains.jpg'
import BABY_BROTHER from './march/baby_brother.jpg'
import BABY_BROTHER_GIF from './march/baby_brother_gif.gif'
import COOL_SUNGLASSES from './march/cool_sunglasses.jpg'
import DUSTY_WITH_THESE_ONES from './march/dusty_with_these_ones.jpg'
import GARDENING_SEEDS from './march/gardening_seeds.jpg'
import HOODIES from './march/hoodies.jpg'
import SPELLING_MAMA from './march/spelling_mama.jpg'
import TOWELS_HANDSOME from './march/towels_handsome.jpg'
import VICKI_COOKING from './march/vicki_cooking.jpg'
import WINNIE_POOH from './march/winnie_pooh.jpg'

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
    },
    FEBRUARY: {
        POGRAMMIN,
        DRESSER,
        HIDING,
        GAZEBO,
        BOXDINNER,
        PILLOWHOP,
        BUDDLTS,
        READING,
    },
    MARCH: {
        ALTON_ROOM_GIF,
        ALTON_TRAINS,
        BABY_BROTHER,
        BABY_BROTHER_GIF,
        COOL_SUNGLASSES,
        DUSTY_WITH_THESE_ONES,
        GARDENING_SEEDS,
        HOODIES,
        SPELLING_MAMA,
        TOWELS_HANDSOME,
        VICKI_COOKING,
        WINNIE_POOH,
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
        'word': 'discovery',
        'clue': 'rosyviced',
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
        'word': 'storytime',
        'clue': 'toysmiter',
        'body': () => {
            return (
                <Body>
                    <h1>February</h1>
        
                    <p>It felt sometimes like Juliet never stopped talking, so we tried to make the most of her neverending streams of chatter and made more efforts to record her funny sayings and quotes.
                        She discovered the art of flattery with sayings like "Daddy, you're so handsome," during dinner one night.
                        Some other funny things we enjoyed were when she called things "new-brand" instead of brand-new, and one time when she sat in a puddle and said, "It's very soggy for me. It's very soggy in my lap."
                    </p>
                    <SizedImage src={PHOTOS.FEBRUARY.POGRAMMIN} />
                    <Caption>"I'm pogrammin' I think! It's a meeting, where me headphones?"</Caption>
                    <SizedImage src={PHOTOS.FEBRUARY.DRESSER} />
                    <Caption>Juliet loved hide and seek, but still cannot stop herself from popping out as soon as the counter says 10!</Caption>
                    <SizedImage src={PHOTOS.FEBRUARY.HIDING} />
                    <Caption>Noah helped Juliet hide, but she just had to stretch her legs 🤣 </Caption>
                    <SizedImage src={PHOTOS.FEBRUARY.GAZEBO} />
                    <Caption>Juliet loves to "Run run run to a 'zebo" with Nessie the ladle.</Caption>
                    <SizedImage src={PHOTOS.FEBRUARY.BOXDINNER} />
                    <Caption>"And I would eat them with a fox and I would eat them in a box..." <br/>~ Dr. Seuss</Caption>
                    <SizedImage src={PHOTOS.FEBRUARY.PILLOWHOP} />
                    <Caption>The amount of bed jumping here makes us glad we donated our bedframe after it caused Juliet's ER trip last summer...</Caption>
                    <SizedImage src={PHOTOS.FEBRUARY.BUDDLTS} />
                    <Caption>When the house gets quiet, we automatically assume Juliet is playing in the bathroom sink now.</Caption>
                    <SizedImage src={PHOTOS.FEBRUARY.READING} />
                    <Caption>When Juliet reads to us, the books take interesting turns...</Caption>
                </Body>
            )
        }
    },
    'march': {
        'name': 'March',
        'word': 'chooches',
        'clue': 'sechocho',
        'body': () => {
            return (
                <Body>
                    <h1>March</h1>
                    <SizedImage src={PHOTOS.MARCH.ALTON_ROOM_GIF} />
                    <Caption>Juliet loves to play in Alton's room, especially when he's not there.</Caption>
                    <SizedImage src={PHOTOS.MARCH.ALTON_TRAINS} />
                    <Caption>Juliet loves to play with Alton's trains, especially when he's not there.</Caption>
                    <SizedImage src={PHOTOS.MARCH.BABY_BROTHER} />
                    <Caption>Juliet loves to play with her baby brother, especially when he's not there.</Caption>
                    <SizedImage src={PHOTOS.MARCH.BABY_BROTHER_GIF} />
                    <Caption>Juliet loves to play with her baby brother, especially when he's not there.</Caption>
                    <SizedImage src={PHOTOS.MARCH.COOL_SUNGLASSES} />
                    <Caption>Juliet loves to wear cool sunglasses, especially when she's not there.</Caption>
                    <SizedImage src={PHOTOS.MARCH.DUSTY_WITH_THESE_ONES} />
                    <Caption>Juliet loves to wear cool sunglasses, especially when she's not there.</Caption>
                    <SizedImage src={PHOTOS.MARCH.GARDENING_SEEDS} />
                    <Caption>Juliet loves to garden, especially when she's not there.</Caption>
                    <SizedImage src={PHOTOS.MARCH.HOODIES} />
                    <Caption>Juliet loves to wear hoodies, especially when she's not there.</Caption>
                    <SizedImage src={PHOTOS.MARCH.SPELLING_MAMA} />
                    <Caption>Juliet loves to spell, especially when she's not there.</Caption>
                    <SizedImage src={PHOTOS.MARCH.TOWELS_HANDSOME} />
                    <Caption>Juliet loves to be handsome, especially when she's not there.</Caption>
                    <SizedImage src={PHOTOS.MARCH.VICKI_COOKING} />
                    <Caption>Juliet loves to cook, especially when she's not there.</Caption>
                    <SizedImage src={PHOTOS.MARCH.WINNIE_POOH} />
                    <Caption>Juliet loves to read, especially when she's not there.</Caption>
                </Body>
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