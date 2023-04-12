use stylist::yew::styled_component;
use web_sys::HtmlInputElement;
use yew::prelude::*;
use yew::{html, use_state, Callback, Html};

#[styled_component(Component)]
fn component() -> Html {
    let first_input = use_state(String::default);
    let second_input = use_state(|| -83f64);
    let lazy_handler = {
        let first_input = first_input.clone();
        Callback::from(move |event: Event| {
            let target = event.target_dyn_into::<HtmlInputElement>();
            if let Some(target) = target {
                first_input.set(target.value());
            }
        })
    };
    let input_handler = {
        let second_input = second_input.clone();
        Callback::from(move |event: InputEvent| {
            let target = event.target_dyn_into::<HtmlInputElement>();
            if let Some(target) = target {
                second_input.set(target.value_as_number());
            }
        })
    };
    html! { <>
        <h1>{"Input handling"}</h1>
        <label for="lazy_input">{"Lazy Input "}
            <input id="lazy_input" type="text"
            onchange={lazy_handler} />
        </label>
        <br/>
        <label for="active_input">{"Active input "}
            <input type="number"
            oninput={input_handler} />
        </label>
        <p>{"What goes here?"}</p>
        <ul>
            <li>{first_input.to_string()}</li>
            <li>{second_input.to_string()}</li>
        </ul>
        </>

    }
}

pub fn render() {
    yew::Renderer::<Component>::new().render();
}
