import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.p
import react.useState
import kotlin.random.Random

val Sample10 = FC<Props> {
    val who by useState<String>("KingKong")
    val visitor by useState<Int>(Random.nextInt())
    div {
        h1 {
            +"Hello $who"
        }
        p {
            +"You are visitor #${visitor}"
        }
    }
}