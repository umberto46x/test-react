import { useEffect, useRef, useState } from "react";

export function TextAreaWithLimit() {
  // states
  const [limit, setLimit] = useState<Boolean>(false);

  // refs
  const taRef = useRef<HTMLTextAreaElement>(null);

  // vars
  const max: number = 30;

  // effects
  useEffect(() => {
    if (taRef.current?.value.length == max) {
      setLimit(true);
    }
  }, [taRef.current?.value.length]);

  return (
    <div className="container mt-5 ">
      <h2 className="d-block text-center">TextArea Limited</h2>

      <label className="me-5" htmlFor="ta">
        Text Area
      </label>
      <textarea className="me-2" name="ta" id="ta" ref={taRef}></textarea>
    </div>
  );
}
