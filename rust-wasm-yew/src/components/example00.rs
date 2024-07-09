use yew::{function_component, html, Html};

#[function_component(Component)]
fn component() -> Html {
    html! {
        <h1>{"Hello WASM ,,,,, world"}</h1>
    }
}

pub fn render() {
    yew::Renderer::<Component>::new().render();
}
