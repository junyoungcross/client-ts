"use client";

import { useNilRetrieveValues } from "@nillion/client-react-hooks";
import { Uuid } from "@nillion/client-vms";
import { type ChangeEvent, type FC, useState } from "react";

export const RetrieveValues: FC = () => {
  const mutation = useNilRetrieveValues({
    staleAfterSeconds: 30,
  });
  const [id, setId] = useState("");

  let data = "";
  if (mutation.isSuccess) {
    // stringify cannot handle BigInts
    data = data = JSON.stringify(mutation.data, (_, v) =>
      typeof v === "bigint" ? v.toString() : v,
    );
  } else if (mutation.isError) {
    data = mutation.error.message;
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setId(event.target.value);
  }

  const isValidUuid = Uuid.safeParse(id).success;

  return (
    <div>
      <h2>Retrieve Values</h2>
      <ol>
        <li>Status: {mutation.status}</li>
        <li>Data: {data}</li>
      </ol>
      <input type="text" value={id} onChange={handleChange} />
      <button
        type="button"
        disabled={!isValidUuid}
        onClick={(): void => mutation.execute({ id })}
      >
        Execute
      </button>
    </div>
  );
};
