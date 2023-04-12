use gloo::console::log;
use stylist::style;
use stylist::yew::styled_component;
use yew::prelude::*;
use yew::{html, use_state, Callback, Html};

#[styled_component(Component)]
fn component() -> Html {
    let bg_style = use_state(|| "transparent".to_string());
    let my_css = style! {
        r#"
        .box {
            height: 200px;
            width: 200px;
            border: 2px solid green;
            border-radius: 0.5em;
        }
        .withBg {
            background-color: red;
        }
        "#
    }
    .unwrap();
    let mouse_enter = {
        let b = bg_style.clone();
        Callback::from(move |_| {
            b.set("withBg".to_string());
            log!("Mouse IN");
        })
    };
    let mouse_leave = {
        let b = bg_style.clone();
        // let target = e.target().unwrap();
        Callback::from(move |_| {
            b.set("transparent".to_string());
            log!("Mouse OUT");
        })
    };
    html! {
        <div class={my_css}>
        <h1>{"Hello WASM world"}</h1>
        <div class={classes!("box", bg_style.to_string())}
        onmouseenter={mouse_enter}
        onmouseleave={mouse_leave}
        >
        </div>
        </div>

    }
}

pub fn render() {
    yew::Renderer::<Component>::new().render();
}
