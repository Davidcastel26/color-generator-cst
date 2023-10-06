import { useState } from "react";
import Values from "values.js";
import { Color } from "./Color";
import { Form } from "./Form";

const App = () => {

  const [colors, setColors ] = useState(new Values('#f15025').all(10))

  return (<main> 
    <Form />
    <Color colors={colors}/>
  </main>);
};
export default App;
