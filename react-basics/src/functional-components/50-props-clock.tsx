type MyProp = {
  hour: number; // the first three are required props
  minute: number;
  label: string;
  pm?: boolean; // optional prop
};

export default function Clock(props: MyProp): JSX.Element {
  return (
    <>
      <p>
        Time in {props.label} is {props.hour}:{props.minute}{" "}
        {props.pm ? "PM" : "AM"}
      </p>
    </>
  );
}
