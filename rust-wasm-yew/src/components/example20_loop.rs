use yew::{function_component, html, Html};

struct Atom {
    pub name: String,
    pub weight: f32,
}

#[function_component(Component)]
fn component() -> Html {
    let elements: Vec<Atom> = vec![
        Atom {
            name: "Argon".to_string(),
            weight: 39.948,
        },
        Atom {
            name: "Barium".to_string(),
            weight: 137.33,
        },
    ];
    html! {
        <>
        <h2>{"Chemical elements"}</h2>
        <ul>
        {
            for elements.iter()
              .enumerate()
              .map(|(idx,a)| html! {
                <li key={idx}>{format!("{} ({} daltons)",  &a.name, a.weight)}</li>
              })
        }

        </ul>
        </>
    }
}

pub fn render() {
    yew::Renderer::<Component>::new().render();
}
