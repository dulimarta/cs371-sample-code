import react.FC
import react.Props
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.p
import react.useState
import kotlin.js.Date

val Sample30 = FC<Props> {
    val now by useState<Date>(Date("2023-03-21T19:00:00"))
    h3 {
        +"You visited at ${now.toDateString()}"
    }
        p {
            if (now.getHours() < 12)
                +"Good morning"
            else
                +"Good afternoon"
        }

}