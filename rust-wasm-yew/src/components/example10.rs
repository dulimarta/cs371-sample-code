use getrandom::getrandom;
use yew::{function_component, html, use_state, Html};

#[function_component(Component)]
fn component() -> Html {
    // let mut rng = rand::thread_rng();
    let mut buff: [u8; 4] = [0; 4];
    let _ = getrandom(&mut buff);
    let num = u32::from_be_bytes(buff);
    let who = use_state(|| "Lakers");
    html! {
        <>
        <h1>{"Hello "}{who.to_string()}</h1>
        <p>{"Visitor number "}{num}</p>
        </>
    }
}

pub fn render() {
    yew::Renderer::<Component>::new().render();
}
