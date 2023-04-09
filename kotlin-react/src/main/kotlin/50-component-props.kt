import csstype.*
import emotion.react.css
import kotlinx.js.timers.setInterval
import react.*
import react.dom.html.InputType
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import react.dom.html.ReactHTML.span
import kotlin.math.min

external interface ThumbProps: Props {
    var count: Int?
}

val ThumbsUp = FC<ThumbProps> {
    // Default value of count is not provided
    val thumbCount = it.count ?: 2
    div {
        span {
            +"Show me ${thumbCount} thumbs "
        }
        repeat(thumbCount) {
            span {
                +"\uD83D\uDC4D" // Unicode for ThumbsUp
            }
        }
    }
}

external interface TimerProps:Props {
    var rate:Int?
}
val SimpleTimer = FC<TimerProps> {
    val rate = it.rate ?: 1000
    val (minute, setMinute) = useState<Int>(0)
    val (second, setSecond) = useState<Int>(0)
    val minRef = useRef(minute)
    val secRef = useRef(second)
    useEffect(minute) {
        minRef.current = minute
    }
    useEffect(second) {
        secRef.current = second
    }

    fun twoDigit (n:Int): String {
        return if (n < 10) n.toString().padStart(2, '0') else n.toString()
    }

    useEffectOnce {
        println("Function timer")
        setInterval ( {
            setSecond { it + 1}
            if (secRef.current == 60) {
                setMinute { it + 1 }
                setSecond(0)
            }
        }, rate)
    }
    div {
        css {
            display = Display.inlineBlock
            fontSize = 32.pt
            border = Border(3.px, LineStyle.solid, NamedColor.green)
            borderRadius = 8.px
            padding = 0.25.em
            margin = 6.px
        }
        +"${twoDigit(minute!!)}:${twoDigit(second)}"
    }
}
val Sample50 = FC<Props> {
    var thumbCount by useState<Int>(2)
    ThumbsUp {
        count = 5
    }
    // Empty parentheses or curly braces needed when using default
    // value
    ThumbsUp()
    ThumbsUp {
        count = thumbCount
    }
    div {
        css {
            display = Display.flex
            flexDirection = FlexDirection.row
            alignItems =AlignItems.center
        }
        label {
            htmlFor = "numTh"
            +"Number of thumbs"
        }
        input {
            id = "numTh"
            type = InputType.range
            min = 2.0
            max = 12.0
            value = thumbCount.toString()
            onChange = {
                thumbCount = it.target.value.toInt()
            }
        }
    }

    div {}
    SimpleTimer()
    SimpleTimer {
        rate = 100
    }
}