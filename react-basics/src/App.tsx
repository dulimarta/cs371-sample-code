import "./App.css";

// import Sample from "./functional-components/01-minimal";
// import Sample from "./functional-components/10-state-binding";
// import Sample from "./functional-components/12-state-binding-to-attr";
// import Sample from "./functional-components/20-forloop";
// import Sample from "./functional-components/30-conditional";
// import Sample from "./functional-components/40-event-handling";
// import Sample from "./functional-components/45-state-update";
// import Clock from "./functional-components/50-props-clock";
import Sample from "./functional-components/60-effect";
// import Sample from "./class-components/01-minimal";
// import Sample from "./class-components/10-state-binding";
// import Sample from "./class-components/12-state-binding-to-attr";
// import Sample from "./class-components/20-forloop";
// import Sample from "./class-components/30-conditional";
// import Sample from "./class-components/40-event-handling";
// import Sample from "./class-components/45-state-update";
// import Clock from "./class-components/50-props-clock";
export default function App() {
  return (
    <div className="App">
      <Sample />

      {/* <Clock hour={5} minute={13} label="San Fransisco" />
      <Clock hour={8} minute={29} label="London" pm /> */}
    </div>
  );
}
