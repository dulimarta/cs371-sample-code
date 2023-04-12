import react.*
import react.dom.html.ReactHTML.li
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.ul

data class Atom(val name:String, val weight: Float)


val Sample20 = FC<Props> {
    val chemData by useState(listOf<Atom>(
        Atom("Argon", 39.12f),
        Atom(name = "Barium", weight = 137.33f ),
        Atom( name = "Carbon", weight = 12.011f),
        Atom( name= "Fluor", weight=19.998f ),
        Atom( name= "Galium", weight= 69.723f ),
        Atom( name= "Helium", weight= 4.0024f ),
    ))
    p {
        +"Chemical Element"
    }

    ul {
        chemData.forEachIndexed { index, atom ->
            li {
                key = index.toString()
                +"${atom.name} (${atom.weight})"
            }
        }
    }
}