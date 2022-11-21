import { Progress } from "@material-tailwind/react";
 
export default function Example(props) {
  return (
    <div className="bc">
    <Progress value={props.value} label="completed" color="indigo"/>
    </div>);
}