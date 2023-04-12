use gloo::console::log;
use web_sys::HtmlButtonElement;
use yew::prelude::*;
use yew::{html, Callback, Html};

#[function_component(Component)]
fn component() -> Html {
    let click_handler = Callback::from(move |event: MouseEvent| {
        let target = event.target_dyn_into::<HtmlButtonElement>().unwrap();
        log!("Button is clicked", target);
    });
    html! {
        <div>
        <h1>{"Hello WASM world"}</h1>
        <p>{"Open the console (DevTools) before you click the button below"}</p>
        <button onclick={click_handler}>{"Click Me"}</button>
        </div>
    }
}

pub fn render() {
    yew::Renderer::<Component>::new().render();
}
