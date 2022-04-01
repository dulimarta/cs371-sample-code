interface MyProp {
  hour: number;
  minute: number;
  label: string;
  pm?: boolean;
}
export default function Clock(props: MyProp): JSX.Element {
  return (
    <>
      <p>
        Functional Time in {props.label} is {props.hour}:{props.minute}{" "}
        {props.pm ? "PM" : "AM"}
      </p>
    </>
  );
}
