import react.FC
import react.Fragment
import react.Props
import react.dom.html.ReactHTML.img
import react.useState

val Sample12 = FC<Props> {
    val imageURL by useState<String>("https://upload.wikimedia.org/wikipedia/commons/f/fd/Sumatran_tiger.JPG")
    Fragment {
        img {
            src = imageURL
            width = 480.0
        }
    }
}