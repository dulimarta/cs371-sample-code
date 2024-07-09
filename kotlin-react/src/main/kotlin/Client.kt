import kotlinx.browser.document
import react.create
import react.dom.client.createRoot

fun main() {
    val container = document.createElement("div")
    document.body!!.appendChild(container)

//    val welcome = Welcome.create {
//        name = "Kotlin/JS"
//    }
    val sample = Sample40.create()
    createRoot(container).render(sample)
}