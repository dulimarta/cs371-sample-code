import csstype.*
import emotion.react.css
import react.FC
import react.Props
import react.dom.html.InputType
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import react.dom.html.ReactHTML.p
import react.useState

val Sample40 = FC<Props> {
    var bgColor by useState<NamedColor>(NamedColor.transparent)
    var edgeStyle by useState<LineStyle>(LineStyle.dashed)

    h1 {
        +"Event handling"
    }
    input {
        type = InputType.checkbox
        id = "borderFlag"
        onChange = {
            edgeStyle = if (it.target.checked) LineStyle.solid else LineStyle.dashed
        }
    }
    label {
        +"Solid border"
    }
    p {
        +"Move the mouse into the box below"
    }
    div {
        css {
            backgroundColor = bgColor
            maxWidth = 4.cm
            minHeight = 4.cm
//            border = Border(2.px, LineStyle.solid, NamedColor.red)
            borderWidth = 2.px
            borderStyle = edgeStyle
            borderColor = NamedColor.black

        }
        onMouseEnter = {
            bgColor = NamedColor.red
        }
        onMouseLeave = {
            bgColor = NamedColor.transparent
        }
    }
}