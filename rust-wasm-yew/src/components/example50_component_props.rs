use web_sys::HtmlInputElement;
// Reference: https://yew.rs/docs/concepts/function-components/properties
use yew::prelude::*;
use yew::{function_component, html, use_state, AttrValue, Callback, Html, Properties};

#[derive(Clone, PartialEq, Properties)]
struct ThumbProps {
    count: usize,
    #[prop_or(AttrValue::from("👍"))] // Default to thumbsup
    icon: AttrValue,
}

#[function_component(Thumb)]
fn thumb(prop: &ThumbProps) -> Html {
    html! {
        <>
            <p>{"Thumbs Up "}
            {prop.icon.to_string().repeat(prop.count)}
            </p>
        </>
    }
}

#[function_component(Component)]
fn component() -> Html {
    let repeat_count = use_state(|| 3 as usize);
    let slider_changed = {
        let rep = repeat_count.clone();
        Callback::from(move |ev: InputEvent| {
            let t = ev.target_dyn_into::<HtmlInputElement>();
            if let Some(elem) = t {
                rep.set(elem.value_as_number() as usize);
            }
        })
    };
    html! {
        <>
        <h1>{"Component Properties"}</h1>
        <Thumb count={8}/>
        <Thumb count={*repeat_count} icon="😃"/>
        <br/>
        <input type="range" min={1} max={12} value={repeat_count.to_string()}
        oninput={slider_changed}/>
        </>

    }
}

pub fn render() {
    yew::Renderer::<Component>::new().render();
}
