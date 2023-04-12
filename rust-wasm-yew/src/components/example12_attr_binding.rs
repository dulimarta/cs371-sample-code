use yew::{function_component, html, use_state, Html};

#[function_component(Component)]
fn component() -> Html {
    let image_url =
        use_state(|| "https://upload.wikimedia.org/wikipedia/commons/f/fd/Sumatran_tiger.JPG");
    html! {
        <>
        <h1>{"Hello Tiger"}</h1>
        <img src={image_url.to_string()} />
        <div>
        <a href="https://creativecommons.org/licenses/by/2.0/">{"CC BY"}</a>
      </div>
        </>
    }
}

pub fn render() {
    yew::Renderer::<Component>::new().render();
}
